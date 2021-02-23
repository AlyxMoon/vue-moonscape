module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  roots: [
    '<rootDir>/tests/unit',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
}
