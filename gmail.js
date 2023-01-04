import { createTransport } from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();
async function run() {
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
    to: "vince50@ethereal.email",
    subject: "Prueba coder!",
    html: "<h1>Hola mundo desde nodejs!</h1>",
    attachment: [
      {
        path: "./hola.txt",
      },
    ],
  };
  try {
    const info = await transporter.sendMail(opts);
    console.log(info);
  } catch (e) {
    console.log(e);
  }
}
run();
