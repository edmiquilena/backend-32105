import autocannon from "autocannon";
import { PassThrough } from "stream";

function run(url) {
  const buf = [];
  const outputStream = new PassThrough();

  const inst = autocannon({
    url,
    connections: 100,
    duration: 60,
  });
  //
  autocannon.track(inst, { outputStream });

  outputStream.on("data", (data) => buf.push(data));
  inst.on("done", () => {
    process.stdout.write(Buffer.concat(buf));
  });
}

run("http://localhost:8080/?max=1000000");
