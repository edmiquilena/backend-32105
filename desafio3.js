import twilio from "twilio";
import * as dotenv from "dotenv";
dotenv.config();

const accountSID = "";
const authToken = process.env.TWILIO;

const client = twilio(accountSID, authToken);
const params = process.argv;
const phoneNumber = params[2] || process.env.PHONE;
const html = params[3] || "mensaje";
// ? Aca en Argentina, los móviles son 54911 y los fijos 5411
// ? Pero twilio se ve que no le importa eso, y hay que mandarlo 5411 al movil

try {
  const msg = await client.messages.create({
    body: html,
    from: "+14582434892",
    to: phoneNumber,
  });
  // console.log(msg)
  // $0.01
} catch (e) {
  //  console.log(e)
  console.log("error");
}
// * node desafio3.js +19289238923 "hola mundo"
