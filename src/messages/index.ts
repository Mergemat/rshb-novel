import { chapter1 } from "./chapters/1";
import { chapter2 } from "./chapters/2";
import { chapter3 } from "./chapters/3";

export const chapters = {
  1: chapter1,
  2: chapter2,
  3: chapter3,
} as const;
