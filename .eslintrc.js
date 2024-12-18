module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',//_____________________________________________________重要
    'eslint:recommended'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': './build/webpack.base.conf.js'
      }
    }
  },
  //rules: {
  // 配合vscode设置
    //"editor.defaultFormatter": "dbaeumer.vscode-eslint"
    // "[vue]": {
    // 	"editor.defaultFormatter": "dbaeumer.vscode-eslint"
    // },

    //"vue/attribute-hyphenation": "off",
		//"vue/v-on-event-hyphenation": "off",
		//"prettier/prettier": [0],
		//"vue/max-attributes-per-line": [
		//	2,
		//	{
		//		singleline: 3,
		//		multiline: {
		//			max: 3
		//		}
		//	}
		//],
		//"vue/html-indent": [1, "tab"],
	        //"vue/script-indent": [1, "tab"],
		//indent: [1, "tab"],
		//"vue/html-closing-bracket-newline": [2],//标签闭合换行
	       //'vue/multiline-html-element-content-newline': [2], // 强制多行元素内容换行

  //},
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'no-console': (process.env.NODE_ENV === 'production') ? 'warn' : 'off',
    'no-debugger': (process.env.NODE_ENV === 'production') ? 'warn' : 'off',
    // @vue/cli-plugin-eslint
    // npm install --save-dev eslint eslint-plugin-vue
    // 配合vscode设置
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    // "[vue]": {
    // 	"editor.defaultFormatter": "dbaeumer.vscode-eslint"
    // },
    "vue/html-indent": [1, "tab"],
    "vue/script-indent": [1, "tab"],
    "vue/html-closing-bracket-newline": [2],//标签闭合换行
    'vue/multiline-html-element-content-newline': [2], // 强制多行元素内容换行
    'vue/max-attributes-per-line': [2, {
      'singleline': 3,
      'multiline': {
        max: 3,
        // allowFirstLine: false //vue3需要注释
      }
    }],
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],
    'comma-dangle': [0, 'never'],//结尾逗号
    'comma-spacing': [2, { // 逗号间距
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, { //缩进
      'SwitchCase': 1
    }],
    // 'vue/html-indent': [0, 2], //vue缩进
    'jsx-quotes': [0, 'prefer-single'],//单引号
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'], // 要求或禁止块内填充
    'quotes': [0, 'single', { // 单引号
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [0, 'never'],//结尾分号
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],// 同步层级缩进
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {//注释空格
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    'prefer-const': 2,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'],
    // 自定义规则~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 自定义规则~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 自定义规则~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 自定义规则~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'vue/multi-word-component-names': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'vue/html-self-closing': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'vue/attribute-hyphenation': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'eslintspace-before-blocks': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    '@typescript-eslint/no-empty-function': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    '@typescript-eslint/ban-types': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 'key-spacing': [2, { /*  "align": "value", */'align': 'colon' /* "mode": "minimum" */ }], // 对象对齐
    'no-use-before-define': ['error', { 'variables': true, "functions": false  }], // ~~~~~~~~~~~~~~

    // 新旧分隔
    // ____________________________________________________________________________________________________________
    // ____________________________________________________________________________________________________________
    // ____________________________________________________________________________________________________________
    // ____________________________________________________________________________________________________________
    // ____________________________________________________________________________________________________________

    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    'vue/attributes-order': 'off',//属性排序
    "eslint no-unsafe-optional-chaining": "error",//可选连
    "@typescript-eslint/no-explicit-any": "error",//不允许any
  }
}
