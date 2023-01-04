import { createTransport } from "nodemailer";
async function run() {
  const transporter = createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "santiago55@ethereal.email",
      pass: "23RHg2YhjH9uhtQ9xA",
    },
  });

  const opts = {
    from: "santiago55@ethereal.email",
    to: "vince50@ethereal.email",
    subject: "Prueba coder!",
    html: "<b>Hola mundo desde nodejs!</b>",
  };
  try {
    const info = await transporter.sendMail(opts);
    console.log(info);
  } catch (e) {
    console.log(e);
  }
}
run();
