import express from "express";
import JWT from "jsonwebtoken";
const app = express();
const usuarios = [];
const PKEY = "holasoysecreto!!";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// localhost/auth/twitter -> twitter.com/
app.post("/register", (req, res) => {
  {
    const { nombre, password, email } = req.body;
    const user = usuarios.find((u) => u.nombre == nombre);

    if (user) return res.send({ error: true, msg: "usuario existe" });

    usuarios.push({ nombre, password, email });

    const token = JWT.sign({ data: { nombre, email } }, PKEY, {
      expiresIn: "60d",
    });
    const Refreshtoken = JWT.sign({ data: { nombre, email } }, PKEY, {
      expiresIn: "1d",
    });
    res.send({ error: false, token: token, rtoken: Refreshtoken });
    //res.redirect("/login");
  }
});
const JWTMiddleWare = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).send({ error: true });

  const token = auth.split(" ")[1];
  console.log("token", token);

  JWT.verify(token, PKEY, (err, decoded) => {
    if (err) console.log(err);
    return res.status(401).send({ error: true, msg: "token invalido" });

    req.user = decoded.data;
    next();
  });
};

app.get("/datos", JWTMiddleWare, (req, res) => {
  res.send({ data: req.user });
});

app.listen(8080, () => console.log("conectados!"));
