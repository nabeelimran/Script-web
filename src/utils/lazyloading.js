import { lazy } from "react";
import wait from "./wait";

export function lazyloading(importPath, namedExport, time = 1000) {
  return lazy(() => wait(time).then(() => importPath));
}
