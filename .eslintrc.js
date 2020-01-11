module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: ['./tsconfig.json', './babel.config.js']
  },
  rules: {
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/jsx-no-target-blank': 1,
    'react/jsx-curly-brace-presence': [1, { props: 'never', children: 'ignore' }],
    'react/jsx-fragments': [1, 'syntax'],
    'react/jsx-no-useless-fragment': 1,
    'react/jsx-pascal-case': 1,
    'react/no-array-index-key': 1,
    'react/no-children-prop': 0,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 1,
    'react/no-redundant-should-component-update': 1,
    'react/no-this-in-sfc': 1,
    'react/no-typos': 1,
    'react/no-unused-state': 1,
    'react/no-will-update-set-state': 1,
    'react/prefer-es6-class': [1, 'always'],
    'react/style-prop-object': 1,
    '@typescript-eslint/ban-ts-ignore': 1,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/consistent-type-definitions': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/no-dynamic-delete': 1,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/no-extra-non-null-assertion': 1,
    '@typescript-eslint/no-for-in-array': 1,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-namespace': 1,
    '@typescript-eslint/no-require-imports': 1,
    '@typescript-eslint/no-this-alias': 1,
    '@typescript-eslint/no-unused-vars-experimental': 1,
    '@typescript-eslint/no-useless-constructor': 1,
    '@typescript-eslint/prefer-regexp-exec': 1,
    '@typescript-eslint/prefer-string-starts-ends-with': 1,
    '@typescript-eslint/require-array-sort-compare': 1,
    '@typescript-eslint/restrict-plus-operands': 1,
    '@typescript-eslint/unbound-method': 1,
    '@typescript-eslint/no-non-null-assertion': 1
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
