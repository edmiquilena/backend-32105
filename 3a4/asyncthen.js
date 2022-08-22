function call(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`This call took ${timeout} seconds`);
      resolve(true);
    }, timeout * 1000);
  });
}

//then

(async () => {
  call(5).then((r) => {
    console.log(r);
  });
  call(2).then((r) => {
    console.log(r);
  });
  call(1).then((r) => {
    console.log(r);
  });
})();

//awayit

(async () => {
  await call(5); //This will print result first
  await call(2);
  await call(1);
})();
