"use server";

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

  // Basic validation
  if (!name || !email || !message) {
    return { status: "error", message: "Nombre, email y mensaje son requeridos." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "El email no es válido." };
  }

  // TODO: Connect to email provider (Resend, Nodemailer, etc.)
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "hola@noiz.mx",
  //   to: "hola@noiz.mx",
  //   subject: `Nuevo contacto: ${name}`,
  //   html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Empresa: ${company}</p><p>Servicio: ${service}</p><p>Mensaje: ${message}</p>`,
  // });

  // Log for now (remove in production)
  console.log("[NOIZ Contact]", { name, email, company, service, message });

  return {
    status: "success",
    message: "¡Mensaje recibido! Te contactaremos pronto.",
  };
}
