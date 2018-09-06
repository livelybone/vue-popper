# @livelybone/vue-popper
A vue component of popper.js

`popper.js` see: https://popper.js.org

## repository
https://github.com/livelybone/vue-popper.git

## Demo
https://github.com/livelybone/vue-popper#readme

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
| Name              | Type                                      | DefaultValue              | Description  |
| ----------------- | ----------------------------------------- | ------------------------- | ------------ |
| `referenceElm`    | `HTMLElement`                             | `false`                   | Prop `reference` of popper.js  |
| `popperOptions`   | `Object`                                  | Defaults of popper.js     | Prop `options` of popper.js |

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
