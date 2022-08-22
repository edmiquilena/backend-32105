const delay = (ret) => {
  for (let i = 0; i < ret * 3e6; i++);
};

function hacerTarea(num) {
  console.log("haciendo tarea " + num);
  delay(100);
}

console.log("inicio de tareas");
hacerTarea(1);
hacerTarea(2);
hacerTarea(3);
hacerTarea(4);
console.log("fin de tareas");
console.log("otras tareas ...");

const a = () => console.log("a");
const b = () => setTimeout(() => console.log("b"), 100);
const c = () => console.log("c");
const d = new Promise((resolve, reject) => {
  resolve("d");
});
const e = () => setTimeout(() => console.log("e"), 0);
