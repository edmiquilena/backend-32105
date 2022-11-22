import JWT from "jsonwebtoken";

const PKEY = "otrosecreto!!";
const data = { username: "maria" };
const token = JWT.sign({ data: data }, PKEY, { expiresIn: "24h" });
console.log("token: ", token);
JWT.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiMjAxOTcwNzIzIn0sImlhdCI6MTY2ODcyNzIxMSwiZXhwIjoxNjY4ODEzNjExfQ.CTjljn8iYO21mWvh86pyyQl8VCOfOFhm4OxbnqVej1Q",
  PKEY,
  (err, decoded) => {
    if (err) return console.log("no esta correcto");

    return console.log(decoded);
  }
);
