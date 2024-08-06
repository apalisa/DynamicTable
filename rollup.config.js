import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
    input: "src/index.js",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({
            exclude: "node_modules/**",
            presets: ["@babel/preset-env", "@babel/preset-react"],
        }),
        postcss(),
        terser(),
    ],
    external: ["react", "react-dom"],
};
