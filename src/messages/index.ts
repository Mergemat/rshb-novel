import { chapter1 } from "./chapters/1";
import { chapter2 } from "./chapters/2";
import { chapter3 } from "./chapters/3";
import { chapter4 } from "./chapters/4";
import { chapter5 } from "./chapters/5";

export const chapters = {
  1: chapter1,
  2: chapter2,
  3: chapter3,
  4: chapter4,
  5: chapter5,
} as const;
