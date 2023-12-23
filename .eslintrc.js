module.exports = {
  // parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // Add your custom rules here:
    'no-console': ['error', { allow: ['debug'] }], // Disallow console.log, etc. in production code
    'no-unused-vars': 'error', // Disallow unused variables
    'no-undef': 'error', // Disallow the use of undeclared variables
    'no-extra-boolean-cast': 'error', // Avoid unnecessary boolean casts
    'no-else-return': 'error', // Enforce returning inside if/else blocks
    'no-const-assign': 'error', // Disallow reassigning const variables
    'no-dupe-args': 'error', // Disallow duplicate arguments in function definitions
    'no-dupe-keys': 'error', // Disallow duplicate keys in object literals
    'no-var': 'error', // Use let/const instead of var
    'prefer-const': 'error', // Prefer const over let when possible
    'react/no-unknown-property': 'error', // Enforce valid React DOM properties
    'react/no-deprecated': 'error', // Enforce no deprecated React APIs
    'react/no-string-refs': 'error', // Enforce using callback refs in React
    'prettier/prettier': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
  },
}
