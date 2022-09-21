// * Generador de numero al azar 0 - 255
// * ES6
const RandChannelNum = () => Math.floor(Math.random() * (255 + 1));

class RGB {
  create() {
    const color = `rgb(${RandChannelNum()}, ${RandChannelNum()}, ${RandChannelNum()})`;
    return color;
  }
}

// * console.log
let rgb = new RGB();

console.log(rgb.create());
