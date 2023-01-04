import { createTransport } from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();
async function run({ subject, html, email, attch }) {
  const transporter = createTransport({
    service: "gmail",
    // host: 'smtp.google.com',
    port: 587,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAILPASS,
    },
  });

  const opts = {
    from: process.env.GMAIL,
    to: email,
    subject,
    html,
    attachment: attch ? [{ path: attch }] : undefined,
  };
  try {
    return transporter.sendMail(opts);
  } catch (e) {
    throw Error(e);
  }
}
const params = process.argv;
const subject = params[2] || "Titulo";
const html = params[3] || "html";
const email = params[4] || "hola@mundo.com";
const attch = params[5];
const info = await run({ subject, html, email, attch });
console.log(info);
// * node desafio2.js "enviar correo" "contenido html" coder@gmail.com ["./hola.txt"]
