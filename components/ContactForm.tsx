"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { services } from "@/lib/services";

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <section id="contacto" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — copy */}
        <div>
          <motion.p
            className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Hablemos
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h2
              className="font-display font-extrabold text-4xl md:text-6xl text-white uppercase leading-none tracking-tight"
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Tu marca,
              <br />
              <span className="text-accent">nuestro trabajo.</span>
            </motion.h2>
          </div>

          <motion.p
            className="font-light text-base text-white/50 leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cuéntanos qué necesitas. Respondemos en menos de 24 horas.
          </motion.p>

          <motion.div
            className="mt-10 space-y-3 text-sm font-light text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p>
              <span className="text-accent mr-3">→</span>
              hola@noiz.com.mx
            </p>
            <p>
              <span className="text-accent mr-3">→</span>
              Querétaro, México
            </p>
          </motion.div>
        </div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            {state.status === "success" ? (
              <motion.div
                key="success"
                className="flex flex-col items-start gap-4 py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-display font-extrabold text-5xl text-accent">✓</span>
                <p className="font-display font-bold text-2xl text-white uppercase">
                  ¡Listo!
                </p>
                <p className="font-light text-base text-white/50 leading-relaxed">
                  {state.message}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                action={formAction}
                className="flex flex-col gap-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name + Company */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField name="name" label="Nombre *" placeholder="Tu nombre" />
                  <FormField name="company" label="Empresa" placeholder="Opcional" />
                </div>

                {/* Email */}
                <FormField name="email" type="email" label="Email *" placeholder="hola@tuempresa.com" />

                {/* Service select */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    className="bg-transparent border border-border text-white/70 text-sm font-light px-4 py-3 focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Seleccionar...</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug} className="bg-black">
                        {s.name}
                      </option>
                    ))}
                    <option value="varios" className="bg-black">Varios servicios</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Cuéntanos de tu proyecto..."
                    className="bg-transparent border border-border text-white/80 text-sm font-light px-4 py-3 focus:outline-none focus:border-accent transition-colors duration-300 resize-none placeholder:text-white/20"
                  />
                </div>

                {/* Error */}
                {state.status === "error" && (
                  <p className="text-sm text-red-400 font-light">{state.message}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={pending}
                  className="group self-start inline-flex items-center gap-4 border border-white/20 px-8 py-4 font-display font-bold text-sm tracking-[0.2em] uppercase text-white hover:border-accent hover:bg-accent hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{pending ? "Enviando..." : "Enviar mensaje"}</span>
                  {!pending && (
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FormField({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="bg-transparent border border-border text-white/80 text-sm font-light px-4 py-3 focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-white/20"
      />
    </div>
  );
}
