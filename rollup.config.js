import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "packages/core/src/index.ts",
    output: [
      {
        file: "packages/core/dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "packages/core/dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: "./packages/core/tsconfig.json" }),
    ],
  },
  {
    input: "packages/react/src/index.ts",
    output: [
      {
        file: "packages/react/dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "packages/react/dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: "./packages/react/tsconfig.json" }),
    ],
    external: (id) =>
      id === "@html-text-parser/core" || /^react($|\/)/.test(id),
  },
  {
    input: "packages/dom/src/index.ts",
    output: [
      {
        file: "packages/dom/dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "packages/dom/dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: "./packages/dom/tsconfig.json" }),
    ],
    external: ["@html-text-parser/core"],
  },
];
