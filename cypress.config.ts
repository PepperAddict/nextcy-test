import { defineConfig } from "cypress";
import { createRequire } from "module";
const require = createRequire(import.meta.url);


export default defineConfig({
  component: {
    env: {codeCoverageTasksRegistered: true},
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.cy.(tsx)$/,
              exclude: /node_modules/
            }
          ]
        }
      }
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);

      return config;
    }
  },

});
