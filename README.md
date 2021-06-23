# WebRTC を用いたビデオ通話アプリ

## 環境構築

### 予めインストールしておく

全て Chocolatey または Homebrew でインストール可能です。

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Google Chrome](https://www.google.com/intl/ja_jp/chrome/)
- [mkcert](https://mkcert.dev)
- [Mozilla Firefox](https://www.mozilla.org/ja/firefox/new/)
- [Node.js LTS](https://nodejs.org/ja/) (v12.x)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Yarn](https://classic.yarnpkg.com/ja/)

### 追加設定 (システム・初回のみ)

_以下、**失敗する場合は管理者権限で再試行**してみてください。_

Visual Studio Code の各種プラグインをインストールします。

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

```sh
code --install-extension dbaeumer.vscode-eslint
code --install-extension EditorConfig.EditorConfig
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode-remote.vscode-remote-extensionpack
```

### 追加設定 (プロジェクト固有・初回のみ)

一般的な Node.js プロジェクト同様、依存パッケージのインストール・構築をします。

```sh
npm install
```

## 開発

下記コマンドで、localhost にフロントエンド サーバーを立ち上げ、既定のブラウザでプロジェクトを表示します。

```sh
npm start
```

### テスト

下記でテスト(実装予定)を watch モードで起動します。

```sh
npm test
```

CI 上など、全件をノンインタラクティブに回す場合、下記の npm-scripts を使用します。

また、このテストによりカバレッジを記録し、レポートを `coverage/lcov-report/index.html` に保管します。併せてマシンリーダブルなレポートを `coverage/coverage-final.json` に保管します。

```sh
npm run test:ci
```

実装によってスナップショットの差異が発生し、それが想定したものである場合、watch モード中の場合は `u` キーを押します。そうでない場合は、下記の npm-scripts でスナップショットを同期します。

```sh
npm run test:snapshot:update
```

## 環境設定

### VScode

#### RemoteContainer

`cmd + shift + p`から`Reopen in Container`を実行するとコンテナが構築されます。

#### CodeFormatter

CodeFormatter として [Prettier](https://prettier.io/) を導入している。  
基本的にデフォルトの設定にしている。

#### 保存時に Prettier を実行させる

設定画面から`Editor: Format On Save`にチェックを入れる。

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

スクリプトを変更し、https で接続できるようにした。

Runs the app in the development mode.  
Open [https://localhost:3000](https://localhost:3333) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.
