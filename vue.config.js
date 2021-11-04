// vue.config.js

/* Keeping track of all the components you’re using can be a real chore. 
The vuetify-loader alleviates this pain by automatically importing all 
the Vuetify components you use, where you use them. 
This will also make code-splitting more effective, 
as webpack will only load the components required for that chunk to be displayed.
 */

module.exports = {
  chainWebpack: (config) => {
    config.plugin("VuetifyLoaderPlugin").tap((args) => [
      {
        match(originalTag, { kebabTag, camelTag, path, component }) {
          if (kebabTag.startsWith("core-")) {
            return [
              camelTag,
              `import ${camelTag} from '@/components/core/${camelTag.substring(
                4
              )}.vue'`,
            ];
          }
        },
      },
    ]);
  },
  /*   configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        fs: false,
      },
    },
  }, */
};
