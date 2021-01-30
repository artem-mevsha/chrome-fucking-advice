# Chrome fucking advice extension

A chrome extension to fetch advices from [fucking-great-advice.ru](https://fucking-great-advice.ru) and show them on the start page.

Check this extension in [Chrome Web Store](https://chrome.google.com/webstore/detail/%D0%BE%D1%85%D1%83%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%B1%D0%BB%D1%8F%D1%82%D1%8C-%D1%81%D0%BE%D0%B2%D0%B5%D1%82/odbdemlbgadodebdhdaeekabpnblcdlm)


Your start page could look like this:

![image](publisher_data/promo_large.png)

Or like this:

![image](publisher_data/screenshot_1.png)

Or even like this:

![image](publisher_data/screenshot_2.png)

## Usage

1. Build an app
```bash
$ npm install
$ npm run build
$ npm run watch
```

2. Enable [developer mode](https://developer.chrome.com/docs/extensions/mv2/getstarted/#manifest) in Chrome and load the extension

3. Load extension from `/dist` folder

3. Happy coding!
```

## Usage in development moode

Chrome Web Store restricts using `eval` in javascript, that's why development mode is recommended to use when you need to debug an extension or use Vue Dev Tools.

```bash
$ npm install
$ npm run build:dev
$ npm run watch:dev
```

## All available commands:

#### `npm run build`

Build the extension into `dist` folder for **production**. Use this command for development to check the production version of app.

#### `npm run build:dev`

Build the extension into `dist` folder for **development**. It's recommended to use

#### `npm run watch`

Watch for modifications then run `npm run build`.

#### `npm run watch:dev`

Watch for modifications then run `npm run build:dev`.

It also enable [Hot Module Reloading](https://webpack.js.org/concepts/hot-module-replacement), thanks to [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader) plugin.

:warning: Keep in mind that HMR only works for your **background** entry.

### `npm run build-zip`

Build a zip file following this format `<name>-v<version>.zip`, by reading `name` and `version` from `manifest.json` file.
Zip file is located in `dist-zip` folder.

### ``npm run lint`

Run eslint to check an errors in files