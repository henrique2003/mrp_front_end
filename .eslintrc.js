module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: 'standard-with-typescript',
      rules: {
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "array-callback-return": "off"
      }
    }
  ]
};
