
### init

```bash
$ npm init routify@latest
```


### build

```bash
$ npm run build
[Routify] Could not import "spank".
[Routify] If you have not installed spank, please run:
[Routify] npm install span
$ npm install spank --save-dev
$ npm run build
```



### sass

```bash
$ npm install -D sass-embedded
$ npm install -D sass
```

#### bootstrap

```bash
$ npm intall --save bootstrap
```


#### Deprecation Warning [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.

* Warning消したい
* vite.config.js
* sass-embedded 使ってるから意味なし？

```js
// export default defineConfig({
//     css: {
//         preprocessorOptions: {
//             scss: {
//                 // api: "legacy-js-api"
//                 api: "modern-compiler"
//             }
//         }
//     },
// })
```
