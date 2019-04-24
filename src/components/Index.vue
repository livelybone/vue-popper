<template>
  <div class="vue-popper" ref="vuePopper">
    <div class="arrow" x-arrow></div>
    <slot/>
  </div>
</template>

<script>
import Popper from 'popper.js'

export default {
  name: 'Index',
  props: {
    // Options: ['middle', 'start', 'end']
    arrowPosition: {
      default: 'middle',
      type: String,
    },
    arrowOffsetScaling: {
      default: 1,
      type: Number,
    },
    referenceElm: typeof window !== 'undefined'
      ? [Window, Element, Document]
      : Object,
    popperOptions: Object,
  },
  data() {
    return {
      el: null,
      popperJs: null,
    }
  },
  computed: {
    referenceEle() {
      if (this.referenceElm) return this.referenceElm
      if (typeof window === 'undefined' || !this.el) return null
      return this.el.parentNode || window
    },
    options() {
      const { modifiers } = this.popperOptions || {}
      return {
        ...this.popperOptions,
        modifiers: {
          ...modifiers,
          arrow: {
            fn: this.arrowModifier,
            element: '[x-arrow]',
          },
        },
      }
    },
    arrowOffset() {
      return 10 * this.arrowOffsetScaling
    },
  },
  watch: {
    referenceEle() {
      this.createPopper()
    },
  },
  methods: {
    getElement() {
      this.el = this.$refs.vuePopper
    },
    createPopper() {
      if (this.referenceEle) {
        this.destroyPopper()
        this.popperJs = new Popper(this.referenceEle, this.el, this.options)
      }
    },
    updatePopper() {
      if (this.popperJs) this.popperJs.scheduleUpdate()
    },
    destroyPopper() {
      if (this.popperJs) this.popperJs.destroy()
    },
    arrowModifier(dataObject, options) {
      const data = Popper.Defaults.modifiers.arrow.fn(dataObject, options)
      const { offsets: { arrow: { left, top }, reference, popper }, arrowElement } = data

      data.offsets.arrow.left = this.convertPos(left, popper, reference, arrowElement)
      data.offsets.arrow.top = this.convertPos(top, popper, reference, arrowElement, 'top')

      return data
    },
    convertPos(pos, popper, reference, arrowElement, type = 'left') {
      let pos1 = ''

      const altSide = type === 'left' ? 'left' : 'top'
      const len = type === 'left' ? 'width' : 'height'
      const offsetLen = type === 'left' ? 'offsetWidth' : 'offsetHeight'

      if (typeof pos === 'number') {
        if (this.arrowPosition === 'start') {
          pos1 = this.arrowOffset + Math.max(0, -(popper[altSide] - reference[altSide]))
        } else if (this.arrowPosition === 'end') {
          pos1 = Math.min(reference[len], popper[len])
            - Math.min(0, popper[altSide] - reference[altSide])
            - this.arrowOffset - arrowElement[offsetLen]
        } else if (pos < this.arrowOffset) {
          pos1 = this.arrowOffset
        } else if (pos > popper[len] - arrowElement[offsetLen] - this.arrowOffset) {
          pos1 = popper[len] - arrowElement[offsetLen] - this.arrowOffset
        } else {
          pos1 = pos
        }
      }
      return pos1
    },
  },
  mounted() {
    this.getElement()
    this.createPopper()
  },
  updated() {
    this.getElement()
    this.updatePopper()
  },
  beforeDestroy() {
    this.destroyPopper()
  },
}
</script>
