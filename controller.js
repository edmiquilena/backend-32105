import mongoose from "mongoose";

export function DBConnect(cb) {
  mongoose.connect(
    "mongodb://127.0.0.1:27017/coder",
    { useNewUrlParser: true },
    (err) => {
      console.log("conectado!");
      if (err) {
        console.log(err);
      }
      cb();
    }
  );
}

export const Users = mongoose.model("users", {
  username: String,
  password: String,
  email: String,
  // _id
});
