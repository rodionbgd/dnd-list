module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb-base", "prettier"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    overrides: [
        {
            files: ["src/*.js"],
            rules: {
                "import/extensions": [
                    "error",
                    "ignorePackages",
                    {
                        js: "never",
                    },
                ],
                "max-len": [
                    "error",
                    {
                        ignoreComments: true,
                        code: 120,
                    },
                ],
                "no-unused-vars": "off",
                "no-undef": "off",
                "no-restricted-globals": "off",

                "import/no-unresolved": "off",
                "import/no-mutable-exports": "off",

                camelcase: "off",
            },

        },
    ],
    settings: {
        "import/resolver": {
            node: {
                extensions: [".ts", ".js"],
            },
        },
    }
};
