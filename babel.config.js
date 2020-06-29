module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ios.js', '.android.js', '.json', '.png', '.svg'],
        alias: {
          api: './api',
          components: './components',
          assets: './assets',
          sagas: './sagas',
          reducers: './reducers',
          selecters: './selecters',
          hooks: './hooks',
          actions: './actions',
          constants: './constants',
          store: './store',
        },
      },
    ],
  ],
};
