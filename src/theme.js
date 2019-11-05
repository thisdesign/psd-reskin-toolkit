export const colors = {
  navy: [0, 30, 65],
  navyAlt: [63, 91, 123],

  sky: [56, 180, 248],
  skyAlt: [14, 147, 220],

  dust: [181, 173, 165],

  slate: [123, 132, 147],
  heather: [186, 192, 201],
  ghost: [217, 221, 227],
  cloud: [236, 238, 241],
  porcelain: [249, 250, 251]
};

const toRgb = inputArr => `rgb(${inputArr[0]}, ${inputArr[1]}, ${inputArr[2]})`;

export const helpers = {
  toRgb
};

export default {
  colors
};
