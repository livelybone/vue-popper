# @livelybone/vue-popper
[![NPM Version](http://img.shields.io/npm/v/@livelybone/vue-popper.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/vue-popper)
[![Download Month](http://img.shields.io/npm/dm/@livelybone/vue-popper.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/vue-popper)
![gzip with dependencies: 8.5kb](https://img.shields.io/badge/gzip--with--dependencies-8.5kb-brightgreen.svg "gzip with dependencies: 8.5kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")
![arrow control supported](https://img.shields.io/badge/arrow--control-supported-blue.svg "arrow control supported")
![ssr supported](https://img.shields.io/badge/ssr-supported-blue.svg "ssr supported")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

A vue component of popper.js, and the arrow position control is implemented

`popper.js` see: https://popper.js.org

## repository
https://github.com/livelybone/vue-popper.git

## Demo
https://livelybone.github.io/vue/vue-popper/

## Installation
```bash
npm i -S @livelybone/vue-popper
```

## Register
```js
import VuePopper from '@livelybone/vue-popper'

// Global register
Vue.component('popper', VuePopper)

// Local register
new Vue({
  components:{'popper': VuePopper}
})
```

## Props
| Name                    | Type                                      | DefaultValue              | Description  |
| ----------------------- | ----------------------------------------- | ------------------------- | ------------ |
| `arrowPosition`         | `String`                                  | `middle`                  | Set the position of arrow, options: `middle start end`  |
| `arrowOffsetScaling`    | `Number`                                  | `window.devicePixelRatio` or `1`                       | Set the left offset scaling of arrow  |
| `referenceElm`          | `HTMLElement`                             | the parentNode of the component instance              | Prop `reference` of popper.js  |
| `popperOptions`         | `Object`                                  | Defaults of popper.js     | Prop `options` of popper.js |

## style
Since 2.3.0， you don't need to import the css file in your project, because the style will be injected inline

For rewrite style, you can copy the `index.scss` or `index.css` file, rewrite it, and the import the file in your project

## QA

1. Error `Error: spawn node-sass ENOENT`

> You may need install node-sass globally, `npm i -g node-sass`
