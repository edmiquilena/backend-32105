// * argv []: 1,2...n
// * max, min, promedio,
// * ejecutable
// * id proceso

process.on("exit", (code) =>
  console.log(code == 0 ? `adios!` : `salido con codigo: ${code}`)
);
// * < 0
process.on("uncaughtException", (error) => {
  console.log(error);
  return process.exit(-5);
});
const nums = process.argv.slice(2).map((num) => Number(num));

const avg = (nums) => {
  let total = 0;

  for (const num of nums) {
    if (isNaN(num)) {
      throw {
        description: "type error",
        numeros: nums,
        tipos: process.argv
          .slice(2)
          .map((n) => (isNaN(n) ? typeof n : "Number")),
      };
    } else {
      total += num;
    }
  }
  return total / nums.length;
};
//nums.reduce((pv, cv) => pv+cv, 0)/nums.length

const data = {
  numeros: nums,
  id: process.pid,
  ejecutable: process.execPath,
  max: Math.max(...nums),
  min: Math.min(...nums),
  avg: avg(nums),
};

console.log(data);
