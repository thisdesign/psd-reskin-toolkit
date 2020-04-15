import modularScale from "./style/modularscale";

export const SCALE = modularScale({
  scale: 1.2,
  stepsDown: 2,
  length: 25,
});

export const SCALE_VARS = SCALE.map(
  (item: string, i: number) => `--size-${i}: ${item}rem`
);

export const COLORS = {
  navy: [0, 30, 65],
  navyAlt: [63, 91, 123],

  sky: [56, 180, 248],
  skyAlt: [14, 147, 220],

  dust: [181, 173, 165],

  slate: [123, 132, 147],
  heather: [186, 192, 201],
  ghost: [217, 221, 227],
  cloud: [236, 238, 241],
  porcelain: [249, 250, 251],
};

export const COLOR_RGB = Object.keys(COLORS).map((key: string, i: number) => {
  const [r, g, b] = COLORS[key];
  return `rgb(${r}, ${g}, ${b})`;
});

export const COLOR_VARS = Object.keys(COLORS).map((key: string, i: number) => {
  return `--color-${key}: ${COLOR_RGB[i]}`;
});

export const SIZES = {
  xl: 1900,
  lg: 1440,
  md: 1024,
  sm: 768,
  xs: 576,
  xxs: 0,
};

export const FONT_SIZES = {
  xl: 21,
  lg: 21,
  md: 20,
  sm: 19,
  xs: 18,
  xxs: 17,
};
