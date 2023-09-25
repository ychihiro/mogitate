# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# mogitate

## ディレクトリ構成について

## ui

基本的にはMUIのコンポーネントをラップし、独自にスタイルを当てたコンポーネント群になり、ドメインを持たせないようにします。<br>
コンポーネントがドメインを持つか、持たないかは、そのコンポーネントをそのまま別のプロジェクトで使い回すことができるか、否かで判断します。<br>
またReactHookFormを使っている場合は、同じuiディレクトリ内にReactHookFormのロジックを付加したコンポーネントを配置します。

### features

featuresディレクトリは以下のような構成になっています。

```
features/
├─ generic/
├─ todo/
│ ├─ container/
│ ├─ presenter/
│ ├─ hooks/
│ ├─ (actions.ts)
│ ├─ (todo.constant.ts)
│ ├─ (todo.type.ts)
│ └─ (todo.validation.ts)
```

- actions.tsにはその機能で使うRecoilのロジックを記述します。
- [feature].constant.tsにはその機能で使う定数を記述します。
- [feature].type.tsには型を記述します。
- [feature].validation.tsにはzodで定義するschemeを記述します。
  基本的にはこれらのファイルは無くてもよく、コードの見通しが悪くなってきたら作るというユルい運用をしています。

### feature/generic

genericにはプロジェクト内共通の機能を担うディレクトリも作成します。<br>
こちらもtodoディレクトリと同じようにcontainer、presenter、actions.tsなどを持ちます。こちらのディレクトリ内にはドメインを持ち（＝他のプロジェクトには流用できない）、アプリケーション内の様々な場所で汎用的に用いられる機能のロジックを記述します。<br>
例えばヘッダに表示するユーザープロフィールコンポーネントなどはこちらに記述します。

### hooks

hooksには機能を実現するために必要なAPIを叩くカスタムフックや、複雑なロジックをまとめるカスタムフックを記述します。

### cssVariables

カラーコードやz-index、ヘッダの高さなどのcssにかかわる変数を管理するディレクトリです。<br>

<!-- styled-componentを使っているのでtsファイルで管理します。 -->

### messages.ts

エラーメッセージやバリデーションメッセージを管理するファイルです。

### reactQueryKeys.ts/recoilKeys.ts

ReactQueryとrecoilは使用する際に一意なキーを設定しなければならないため１つのファイル内で一元管理し、重複しないようにします。

### utils

汎用的に使える便利関数を管理するディレクトリです。

### lib

ライブラリの初期設定などはこちらのディレクトリに記述します。

## 参考資料

[https://tech-blog.rakus.co.jp/entry/20230208/frontend](https://tech-blog.rakus.co.jp/entry/20230208/frontend)
[https://zenn.dev/sakito/articles/af87061a5016e6](https://zenn.dev/sakito/articles/af87061a5016e6)
