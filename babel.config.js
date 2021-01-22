module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'rewrite-require',
      {
        aliases: {
          crypto: 'expo-crypto',
        },
      },
    ],
  ],
};
