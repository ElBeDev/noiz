"use server";

import { Resend } from "resend";

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();
  const service = (formData.get("service") as string)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Nombre, email y mensaje son requeridos." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "El email no es válido." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "NOIZ Contacto <hola@noiz.com.mx>",
    to: "hola@noiz.com.mx",
    replyTo: email,
    subject: `Nuevo contacto: ${name}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
      ${service ? `<p><strong>Servicio:</strong> ${service}</p>` : ""}
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("[NOIZ Contact] Resend error:", error);
    return { status: "error", message: "Hubo un error al enviar tu mensaje. Inténtalo de nuevo." };
  }

  // Confirmación al usuario
  await resend.emails.send({
    from: "NOIZ <hola@noiz.com.mx>",
    to: email,
    subject: "Recibimos tu mensaje — NOIZ",
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #111;">
        <h1 style="font-size: 24px; margin-bottom: 8px;">Hola, ${name} 👋</h1>
        <p style="font-size: 16px; line-height: 1.6; color: #444;">
          Recibimos tu mensaje y ya estamos en ello. En breve uno de nuestros estrategas te contactará personalmente.
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #444;">
          Mientras tanto, si tienes alguna duda urgente escríbenos directo a
          <a href="mailto:hola@noiz.com.mx" style="color: #111; font-weight: 600;">hola@noiz.com.mx</a>.
        </p>
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;" />
        <p style="font-size: 13px; color: #999;">NOIZ — Marcas que Venden · <a href="https://noiz.com.mx" style="color: #999;">noiz.com.mx</a></p>
      </div>
    `,
  });

  return {
    status: "success",
    message: "¡Mensaje recibido! Te contactaremos pronto.",
  };
}
