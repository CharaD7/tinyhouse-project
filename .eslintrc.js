module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    ignorePatterns: ['**/*.js', 'dist', 'node_modules'],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'import',
        'react',
        'simple-import-sort',
        '@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-unresolved': ['error', { commonjs: true }],
        'import/order': ['error',
            {
                groups: ['builtin', 'internal', 'external', 'parent', 'sibling', 'object', 'type', 'index'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            },
        ],
        indent: [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'auto'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
    },
    settings: {
        'import/resolver': {
            typescript: {}
        },
        react: {
            version: 'detect'
        }
    }
};
