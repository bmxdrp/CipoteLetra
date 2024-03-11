/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate } from '../astro_Y5ySfmIQ.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { createTransport } from 'nodemailer';

const $$Astro = createAstro("https://cipoteletra.netlify.app");
const $$Sender = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sender;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const email = data.get("email");
    const name = data.get("name");
    const last = data.get("last");
    const message = data.get("message");
    const transporter = createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "cipoteletra@hotmail.com",
        pass: "Anaisabel11"
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    async function main() {
      await transporter.sendMail({
        from: `"${name} ${last}" <cipoteletra@hotmail.com>`,
        // sender address
        to: "cipoteletra@hotmail.com",
        // list of receivers
        subject: `${name} ${last} desde Cipote Letra`,
        // Subject line
        text: `${message}`,
        // plain text body
        html: `<p>Nombre: ${name} ${last}</p><p>Correo: ${email}</p><p>Mensaje: ${message}</p>`
        // html body
      });
    }
    main().catch(console.error);
  }
  return renderTemplate``;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/api/sender.astro", void 0);
const $$file = "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/api/sender.astro";
const $$url = "/dashboard/api/sender";

export { $$Sender as default, $$file as file, $$url as url };
