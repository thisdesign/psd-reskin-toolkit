import modularScale from "./style/modularscale";

export const EASE: {
  [key: string]: [number, number, number, number];
} = {
  // cubic-bezier(.39,.575,.565,1)
  standard: [0.4, 0.0, 0.2, 1],
  decel: [0.0, 0.0, 0.2, 1],
  accel: [0.4, 0.0, 1, 1],
};

export const SCALE: number[] = modularScale({
  scale: 1.2,
  stepsDown: 2,
  length: 25,
});

export const COLORS = {
  navy: [0, 30, 65],
  navyAlt: [63, 91, 123],

  sky: [56, 180, 248],
  skyAlt: [14, 147, 220],

  midnight: [10, 23, 32],

  dust: [181, 173, 165],

  slate: [123, 132, 147],
  heather: [186, 192, 201],
  ghost: [217, 221, 227],
  cloud: [236, 238, 241],
  porcelain: [249, 250, 251],
};

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

export const FONT_SIZE_SCALE = {
  h1: { xxs: 6, sm: 7, lg: 8 },
  h2: { xxs: 5, sm: 6, lg: 7 },
  h3: { xxs: 4 },
  h4: { xxs: 3 },
  h5: { xxs: 2 },
  h6: { xxs: 1 },
};

export const FADE_IN_TIMING = 800;
/**
 * Transformed
 */

export const SCALE_VARS: string[] = SCALE.map(
  (item: number, i: number) => `--size-${i}: ${item}rem`
);

export const COLOR_RGB = Object.keys(COLORS).map((key: string, i: number) => {
  const [r, g, b] = COLORS[key];
  return `rgb(${r}, ${g}, ${b})`;
});

export const COLOR_VARS = Object.keys(COLORS).map((key: string, i: number) => {
  return `--color-${key}: ${COLOR_RGB[i]}`;
});

export const EASE_VARS: string[] = Object.keys(EASE).map((key: string) => {
  return `--ease-${key}: ${EASE[key].join(", ")}`;
});
