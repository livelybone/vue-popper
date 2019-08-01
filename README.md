# @livelybone/vue-popper
[![NPM Version](http://img.shields.io/npm/v/@livelybone/vue-popper.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/vue-popper)
[![Download Month](http://img.shields.io/npm/dm/@livelybone/vue-popper.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/vue-popper)
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

A vue component of popper.js, and the arrow position control is implemented

## repository
https://github.com/livelybone/vue-popper.git

## Demo
https://github.com/livelybone/vue-popper#readme

## Installation
```bash
npm i -S @livelybone/vue-popper
```

## Global name
`VuePopper`

## Usage
```js
import VuePopper from '@livelybone/vue-popper'
import '@livelybone/vue-popper/lib/css/index.css';

// Global register
Vue.component('VuePopper', VuePopper)

// Local register
new Vue({
  components:{VuePopper}
})
```

when you want to set this module as external while you are developing another module, you should import it like this:
```js
import * as VuePopper  from '@livelybone/vue-popper'

// then use it by need
```

Use in html, see what your can use in [CDN: unpkg](https://unpkg.com/@livelybone/vue-popper/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/@livelybone/vue-popper/lib/umd/<--module-->.js"></script>
```

## Props
| Name                      | Type                                      | DefaultValue                                  | Description  |
| ------------------------- | ----------------------------------------- | --------------------------------------------- | ------------ |
| `prop`                    | `type`                                    | none                                          | Description |


## Events
| Name              | EmittedData           | Description                                       |
| ----------------- | --------------------- | ------------------------------------------------- |
| `event`           | `type`                |  |

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
@import 'node_modules/@livelybone/vue-popper/lib/css/index.scss'

// css
@import 'node_modules/@livelybone/vue-popper/lib/css/index.css'
```

Or, you can build your custom style by copying and editing `index.scss`

## QA

1. Error `Error: spawn node-sass ENOENT`

> You may need install node-sass globally, `npm i -g node-sass`
