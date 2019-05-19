export default {
  title: 'Cabify',
  themeConfig: {
    logo: {
      src: 'https://user-images.githubusercontent.com/4967157/57986184-c3eb0b00-7a3f-11e9-8f47-744007868edf.png',
      width: 150,
    },
  },
  modifyBundlerConfig: (config) => {
    config.resolve.extensions.push('.css');
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    return config;
  },
};
