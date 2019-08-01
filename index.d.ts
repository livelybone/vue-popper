import Vue from 'vue'
import { PopperOptions } from 'popper.js'

export type ArrowPosition = 'middle' | 'start' | 'end'

declare class VuePopper extends Vue {
  /**
   * Set the position of arrow
   *
   * Default to 'middle'
   * */
  arrowPosition: ArrowPosition
  /**
   * Set the left offset scaling of arrow
   *
   * Default to: window.devicePixelRatio || 1
   * */
  arrowOffsetScaling: number
  /**
   * Prop `reference` of popper.js
   *
   * Default to the parentNode of the component instance
   * */
  referenceElm: Element
  /**
   * Prop `options` of popper.js
   *
   * Default to the defaults of popper.js
   * */
  popperOptions: PopperOptions
}

export default VuePopper
