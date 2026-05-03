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

  return {
    status: "success",
    message: "¡Mensaje recibido! Te contactaremos pronto.",
  };
}
