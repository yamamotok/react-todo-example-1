Example: Todo list with React, Mobx, ESLint, Prettier, etc.
----------------------------

### "Todo List" example with using;

*   [React](https://reactjs.org/)
*   [MobX](https://mobx.js.org/)
*   [REACT ROUTER](https://reactrouter.com/)
*   [Bootstrap 5](https://getbootstrap.com/)

### Development environment tech stack;

*   [TypeScript](https://www.typescriptlang.org/)
*   [Vite](https://vitejs.dev/)
*   [ESLint](https://eslint.org/)
*   [Prettier](https://prettier.io/)

Demo: [techstackexample01.modelhouse.tech](https://techstackexample01.modelhouse.tech/)

### Tips: Vite + React + TypeScript

Vite is fast and works great with React + TypeScript. Check [Vite guide](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) for details please.

Viteは高速でReact + TypeScriptにおいても快適です。詳しくは上のページを見てください。

```
# npm 6
npm init vite@latest my-react-ts-app --template react-ts
```

### Tips: Sort `import` lines with ESLint

We can sort `import` with customized rules and remove unused `imports`. It is very convenient especially for team work.
Please check ESLint plugin [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
and [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports).

And also check [package.json](./package.json) and [.eslintrc.json](./.eslintrc.json) in this project.

importを自動で並び替えたり、不要なimportを自動で削除できると便利ですね。とくにチームワークの時には。
詳しくは上のページと、このプロジェクトの package.json と .eslintrc.json を見てみてください。

### Tips: Create application-level (global) store with MobX

[React Context](https://reactjs.org/docs/context.html) will work good with MobX for creating application-level store.
Please check [src/store/AppContext.tsx](./src/store/AppContext.tsx) for actual implementation.

React ContextとMobXをつかってアプリケーションレベルのストアを作ることができます。詳しくはこのプロジェクトの src/store/AppContext.tsx を見てみてください
