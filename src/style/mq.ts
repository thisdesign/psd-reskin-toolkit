import { SIZES } from "../constants";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type Sizes = {
  [item in Size]: number;
};

export type MediaQuery = {
  [item in Size]: string;
};

const mq: MediaQuery = Object.keys(SIZES).reduce(
  (acc, current) => ({
    ...acc,
    [current as Size]: `(min-width: ${Reflect.get(SIZES, current)}px)`,
  }),
  { xs: "", sm: "", md: "", lg: "", xl: "" }
);

export default mq;
