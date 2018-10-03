module.exports = {
    plugins: [
        'react'
    ],
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
        'ecmaFeatures': {
            'jsx': true
          }
    },
    env: {
        browser: true,
        es6: true
    },
    globals: {},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    rules: {
        'indent': [2, 4],
        'linebreak-style': 0,
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'eqeqeq': 2,
        'no-cond-assign': 0,
        'no-console': 1,
        'no-constant-condition': 1,
        'no-debugger': 1,
        'no-empty': 1,
        'no-unsafe-negation': 1,
        'no-caller': 2,
        'no-alert': 1,
        'no-case-declarations': 0,
        'no-else-return': 2,
        'no-eval': 2,
        'no-extend-native': 1,
        'no-fallthrough': 0,
        'no-sparse-arrays': 0,
        'no-param-reassign': 2,
        'no-redeclare': 2,
        'no-self-compare': 1,
        'no-self-assign': 1,
        'no-with': 2,
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', {allowSingleLine: true}],
        'camelcase': 1,
        'comma-dangle': [2, 'never'],
        'comma-spacing': 1,
        'comma-style': 1,
        'computed-property-spacing': [2, 'never'],
        'func-style': [2, 'declaration', {allowArrowFunctions: true}],
        'keyword-spacing': [1, {overrides: {
            'for': {after: false},
            'while': {after: false},
            'if': {after: false},
            'switch': {after: false},
            'catch': {after: false}
        }}],
        'no-lonely-if': 2,
        'no-trailing-spaces': 1,
        'no-whitespace-before-property': 2,
        'operator-linebreak': [1, 'before'],
        'padded-blocks': [1, 'never'],
        'space-before-blocks': [1, 'always'],
        'space-before-function-paren': [1, 'never'],
        'space-in-parens': [1, 'never'],
        'space-infix-ops': [1, {int32Hint: true}],
        'space-unary-ops': [2, {words: true, nonwords: false}],
        'no-class-assign': 2
    }
};