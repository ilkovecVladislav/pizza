module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    components: './src/components',
    assets: './src/assets',
    modules: './src/modules',
    pages: './src/pages',
    routers: './src/routers',
    types: './src/types',
    services: './src/services',
    config: './src/config',
    store: './src/store',
  },
};
