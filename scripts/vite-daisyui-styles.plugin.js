// come from https://github.com/daief/daisyui-vue.git
const postcss = require("postcss");
const daisyui = require("daisyui");

const createPlugin = () => {
  const process = postcss([
    require("tailwindcss")({
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [daisyui], // 代码样式提示
      daisyui: {
        logs: false,
        themes: false,
        // styled: false,
        // base: false,
        // utils: false,
        // rtl: false,
      },
    }),
    require("postcss-nested")({
      bubble: ["screen"],
    }),
    require("autoprefixer"),
    // require("cssnano")({
    //   preset: [
    //     "default",
    //     {
    //       mergeRules: false,
    //     },
    //   ],
    // }),
  ]);

  /**
   * @type {import('rollup').Plugin}
   */
  const plugin = {
    async transform(code, id) {
      if (!/\.css$/.test(id)) return null;

      let cssCode = code;
      const postcssResult = await process.process(cssCode, {
        map: false,
      });
      return postcssResult.css;
    },
  };

  return plugin;
};

export default createPlugin;
