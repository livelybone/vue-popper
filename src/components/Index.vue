<template>
  <div class="vue-popper" ref="vuePopper">
    <div class="arrow" x-arrow></div>
    <slot />
  </div>
</template>

<script>
import Popper from 'popper.js'

const isBrowser =
  typeof window !== 'undefined' && typeof document !== 'undefined'

export default {
  name: 'Index',
  props: {
    // Options: ['middle', 'start', 'end']
    arrowPosition: {
      default: 'middle',
      type: String,
    },
    arrowOffsetScaling: {
      default: (isBrowser && window.devicePixelRatio) || 1,
      type: Number,
    },
    referenceElm: isBrowser ? [Window, Element, Document] : Object,
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
      if (!isBrowser || !this.el) return null
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
    setStyle() {
      if (isBrowser) {
        const id = 'vue-popper-module-style'
        if (!document.getElementById(id)) {
          const style = document.createElement('style')
          style.id = id
          style.innerText =
            '.arrow-extend,.vue-popper[x-placement^=top] .arrow,.vue-popper[x-placement^=top] .arrow:before,.vue-popper[x-placement^=bottom] .arrow,.vue-popper[x-placement^=bottom] .arrow:before,.vue-popper[x-placement^=left] .arrow,.vue-popper[x-placement^=left] .arrow:before,.vue-popper[x-placement^=right] .arrow,.vue-popper[x-placement^=right] .arrow:before{position:absolute;width:0;height:0}' +
            '.vue-popper{border:1px solid #c2ccdc;border-radius:.2em;background:#fff}' +
            '.vue-popper[x-placement^=top]{margin-bottom:.75em}' +
            '.vue-popper[x-placement^=top] .arrow{bottom:-.4em;border:.4em solid transparent;border-bottom:0;border-top-color:#c2ccdc}' +
            ".vue-popper[x-placement^=top] .arrow:before{content:'';bottom:-.4em;border:.4em solid transparent;border-bottom:0;border-top-color:#fff;left:-.4em;bottom:1px}" +
            '.vue-popper[x-placement^=bottom]{margin-top:.75em}' +
            '.vue-popper[x-placement^=bottom] .arrow{top:-.4em;border:.4em solid transparent;border-top:0;border-bottom-color:#c2ccdc}' +
            ".vue-popper[x-placement^=bottom] .arrow:before{content:'';top:-.4em;border:.4em solid transparent;border-top:0;border-bottom-color:#fff;left:-.4em;top:1px}" +
            '.vue-popper[x-placement^=left]{margin-right:.75em}' +
            '.vue-popper[x-placement^=left] .arrow{right:-.4em;border:.4em solid transparent;border-right:0;border-left-color:#c2ccdc}' +
            ".vue-popper[x-placement^=left] .arrow:before{content:'';right:-.4em;border:.4em solid transparent;border-right:0;border-left-color:#fff;top:-.4em;right:1px}" +
            '.vue-popper[x-placement^=right]{margin-left:.75em}' +
            '.vue-popper[x-placement^=right] .arrow{left:-.4em;border:.4em solid transparent;border-left:0;border-right-color:#c2ccdc}' +
            ".vue-popper[x-placement^=right] .arrow:before{content:'';left:-.4em;border:.4em solid transparent;border-left:0;border-right-color:#fff;top:-.4em;left:1px}"
          document.head.appendChild(style)
        }
      }
    },
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
      const {
        offsets: {
          arrow: { left, top },
          reference,
          popper,
        },
        arrowElement,
      } = data

      data.offsets.arrow.left = this.convertPos(
        left,
        popper,
        reference,
        arrowElement,
      )
      data.offsets.arrow.top = this.convertPos(
        top,
        popper,
        reference,
        arrowElement,
        'top',
      )

      return data
    },
    convertPos(pos, popper, reference, arrowElement, type = 'left') {
      let pos1 = ''

      const altSide = type === 'left' ? 'left' : 'top'
      const len = type === 'left' ? 'width' : 'height'
      const offsetLen = type === 'left' ? 'offsetWidth' : 'offsetHeight'

      if (typeof pos === 'number') {
        if (this.arrowPosition === 'start') {
          pos1 =
            this.arrowOffset +
            Math.max(0, -(popper[altSide] - reference[altSide]))
        } else if (this.arrowPosition === 'end') {
          pos1 =
            Math.min(reference[len], popper[len]) -
            Math.min(0, popper[altSide] - reference[altSide]) -
            this.arrowOffset -
            arrowElement[offsetLen]
        } else if (pos < this.arrowOffset) {
          pos1 = this.arrowOffset
        } else if (
          pos >
          popper[len] - arrowElement[offsetLen] - this.arrowOffset
        ) {
          pos1 = popper[len] - arrowElement[offsetLen] - this.arrowOffset
        } else {
          pos1 = pos
        }
      }
      return pos1
    },
  },
  mounted() {
    this.setStyle()
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
