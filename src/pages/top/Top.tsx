import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useAppContext } from '../../store/AppContext';

import './Top.css';

export const TechStack: React.FC = () => {
  return (
    <section>
      <h3 className="mt-4">&quot;Todo List&quot; example with using;</h3>
      <ul>
        <li>
          <a href="https://reactjs.org/">React</a>
        </li>
        <li>
          <a href="https://mobx.js.org/">MobX</a>
        </li>
        <li>
          <a href="https://reactrouter.com/">REACT ROUTER</a>
        </li>
        <li>
          <a href="https://getbootstrap.com/">Bootstrap 5</a>
        </li>
      </ul>

      <h3 className="mt-4">Development environment tech stack;</h3>
      <ul>
        <li>
          <a href="https://www.typescriptlang.org/">TypeScript</a>
        </li>
        <li>
          <a href="https://vitejs.dev/">Vite</a>
        </li>
        <li>
          <a href="https://eslint.org/">ESLint</a>
        </li>
        <li>
          <a href="https://prettier.io/">Prettier</a>
        </li>
      </ul>
    </section>
  );
};

export const Tips: React.FC = () => {
  return (
    <section>
      <h3 className="mt-4">Tips: Vite + React + TypeScript</h3>
      <p>
        Vite is fast and works great with React + TypeScript. Check{' '}
        <a href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project">Vite guide</a> for
        details please.
      </p>
      <p className="lang-ja">
        Viteは高速でReact + TypeScriptにおいても快適です。詳しくは上のページを見てください。
      </p>
      <pre>
        {/*prettier-ignore*/}
        <code>
          # npm 6{'\n'}
          npm init vite@latest my-react-ts-app --template react-ts
        </code>
      </pre>
      <h3 className="mt-4">Tips: Sort `import` lines with ESLint</h3>
      <p>
        We can sort `import` with customized rules and remove unused `imports`. This is very
        convenient especially for team work.
        <br />
        Please check ESLint plugin{' '}
        <a href="https://github.com/lydell/eslint-plugin-simple-import-sort">
          eslint-plugin-simple-import-sort
        </a>
        and{' '}
        <a href="https://github.com/sweepline/eslint-plugin-unused-imports">
          eslint-plugin-unused-imports
        </a>
        <br />
        And also check `package.json` and `.eslintrc.json` in this project.
      </p>
      <p className="lang-ja">
        importを自動で並び替えたり、不要なimportを自動で削除できると便利ですね。とくにチームワークの時には。
        詳しくは上のページと、このプロジェクトの package.json と .eslintrc.json を見てみてください。
      </p>
      <h3 className="mt-4">Tips: Create application-level (global) store with MobX</h3>
      <p>
        <a href="https://reactjs.org/docs/context.html">React Context</a> will work good with MobX
        for creating application-level store. Please check `store/AppContext.tsx` for actual
        implementation.
      </p>
      <p className="lang-ja">
        React
        ContextとMobXをつかってアプリケーションレベルのストアを作ることができます。詳しくはこのプロジェクトの
        store/AppContext.tsx を見てみてください
      </p>
    </section>
  );
};

export const Top: React.FC = observer(() => {
  const { header } = useAppContext();

  useEffect(() => {
    header.update({ subtitle: 'Todo list with React, Mobx, ESLint, Prettier, etc.' });
  }, [header]);

  return (
    <div className="Top">
      <section>
        <p>
          No data is sent anywhere. Since everything is only in the browser&rsquo;s memory, the data
          is lost when the page is reloaded.
        </p>
      </section>

      <TechStack />
      <Tips />
    </div>
  );
});
