# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Extension dev

- [Chrome Extensions using Vite + Typescript + React: Stepwise Process](https://arglee.medium.com/chrome-extensions-using-vite-typescript-react-stepwise-process-6d013f5332b9)

### hot module reload

- [HMR + vite ](https://medium.com/@saurssaurav33/chrome-extension-development-with-the-hot-reload-vite-plugin-8074a3d6589e) , [github](https://github.com/isaurssaurav/hot-reload-extension-vite-plugin)
- [CRXJS](https://crxjs.dev/vite-plugin/getting-started/react/add-content-script)
- [api-hmr](https://vitejs.dev/guide/api-hmr)



### config output of files

- [chromer guide](https://developer.chrome.com/docs/extensions/get-started?hl=es-419)