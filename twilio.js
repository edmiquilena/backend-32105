import twilio from "twilio";
import * as dotenv from "dotenv";
dotenv.config();

const accountSID = "";
const authToken = process.env.TWILIO;

const client = twilio(accountSID, authToken);

try {
  const msg = await client.messages.create({
    body: "Coder: Tu codigo es 98327. No compartas.",
    from: "+14582434892",
    to: process.env.PHONE,
  });
  // console.log(msg)
  // $0.01
} catch (e) {
  //  console.log(e)
  console.log("error");
}
