import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default [
  // Сборка для React
  {
    input: "src/index.react.ts",
    output: [
      {
        file: "dist/react.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/react.cjs.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(), // автоматически external-ит все peerDependencies
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    // дополнительная гарантия, что React не попадёт в бандл
    external: (id) => /^react($|\/)/.test(id),
  },
  {
    input: "src/index.dom.ts",
    output: [
      {
        file: "dist/dom.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/dom.cjs.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(), // автоматически external-ит все peerDependencies
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
];
