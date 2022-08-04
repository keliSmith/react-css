// Eslint规则: https://eslint.bootcss.com/docs/rules/
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended', // 使用推荐的React代码检测规范
    'plugin:@typescript-eslint/recommended', // 定义文件继承的子规范
  ],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: { // 自动发现React的版本，从而进行规范react代码
    'react': {
      'pragma': 'React',
      'version': 'detect'
    }
  },
  parserOptions: {        // 指定ESLint可以解析JSX语法
    'ecmaVersion': 2019,
    'sourceType': 'module',
    'ecmaFeatures': {
      jsx: true
    }
  },
  rules: {
    'no-console': 2,
    // 'no-magic-numbers': 2, // 禁止使用魔法数字
    'no-redeclare': 2,
    'block-spacing': [2, 'always'],
    'camelcase': [
      0,
      {
        'properties': 'always',
        'ignoreDestructuring': true,
      }
    ],
    'eol-last': [2, 'always'],
    'indent': [2, 2],
    'jsx-quotes': [2, 'prefer-single'],
    'quotes': [2, 'single'],
    'max-len': [2, { 'code': 100 }],
    'object-curly-spacing': [2, 'always'],
    'spaced-comment': [2, 'always']
  },
}
