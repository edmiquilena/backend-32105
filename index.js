import express from "express";
import cookieParser from "cookie-parser";

const expressApp = express();
//* secreto / llave privada
//* array con strings, string
expressApp.use(cookieParser("qw0d3wj9032j09322390"));

expressApp.use((req, res, next) => {
  // * cookies normales
  console.log(req.cookies);
  // * cookies firmadas
  console.log(req.signedCookies);
  next();
});

expressApp.get("/", (req, res) => {
  // * Cookie: coder=house; token=xxxxxxxx
  // {coder: 'houser', token: ''}
  //  req.headers.cookie
  res.send({
    logged: "jwt" in req.cookies ? true : false,
    cookies: req.cookies,
    signed: req.signedCookies,
  });
});

expressApp.get("/cookie", (req, res) => {
  // * proviene de express
  // ? s%3Aejjewoij2309u32.23423wqewqewqqewwqe.73QsNSg4FgFZv1Bynaw7n%2BS8XFCQJqIzoChHNaPW9sw
  res.cookie("jwt", "ejjewoij2309u32.23423wqewqewqqewwqe", { signed: true });
  res.cookie("recordar", "true", {});
  res.cookie("config", { color: "rojo", modo: "oscuro" });
  res.send("set!");
});

expressApp.get("/logout", (req, res) => {
  // * proviene de express
  res.clearCookie("jwt");
  res.send(req.cookies);
});

expressApp.listen(8081, () => {
  console.log("conectado!");
});
