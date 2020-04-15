import modularScale from "./style/modularscale";

export const SCALE = modularScale({
  scale: 1.618,
  stepsDown: 2,
  length: 25,
});

export const SCALE_VARS = SCALE.map(
  (item: string, i: number) => `--size-${i}: ${item}rem`
);
