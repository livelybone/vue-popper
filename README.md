# @livelybone/vue-popper 
![dependency: popper.js](https://img.shields.io/badge/dependency-popper.js-blue.svg "dependency: popper.js")
![gzip: 7.4kb](https://img.shields.io/badge/gzip-7.4kb-brightgreen.svg "gzip: 7.4kb")
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
| `arrowOffsetScaling`    | `Number`                                  | `1`                       | Set the left offset scaling of arrow, usually to be `window.devicePixelRatio`  |
| `referenceElm`          | `HTMLElement`                             | `false`                   | Prop `reference` of popper.js  |
| `popperOptions`         | `Object`                                  | Defaults of popper.js     | Prop `options` of popper.js |

## style
For building style, you can use the css or scss file in lib directory. 
```js
// scss
import 'node_modules/@livelybone/vue-popper/lib/css/index.scss'

// css
import 'node_modules/@livelybone/vue-popper/lib/css/index.css'
```
Or
```scss
// scss
@import 'node_modules/@livelybone/vue-popper/lib/css/index.scss';

// css
@import 'node_modules/@livelybone/vue-popper/lib/css/index.css';
```

Or, you can build your custom style by copying and editing `index.scss`
