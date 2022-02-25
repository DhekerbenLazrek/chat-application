module.exports = {
    root: true,
    env: {
        node: true,
        jest: true
    },
    // extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off',
        'no-console': 'off',
        'vue/valid-v-slot': [ 'error', { allowModifiers: true, }, ],
        // 'vue/script-indent': [ {
        //     'baseIndent': 1
        // }]
    },
    // 'vue/valid-v-slot': ['error', {
    //     allowModifiers: true,
    //   }],
     parserOptions: {
        parser: 'babel-eslint'
     }
};
