<template>
  <div class="vue-popper" ref="vuePropper">
    <div class="arrow" x-arrow></div>
    <slot/>
  </div>
</template>

<script>
import Popper from 'popper.js'

export default {
  name: 'Index',
  mounted() {
    this.createPopper()
  },
  updated() {
    this.updatePopper()
  },
  beforeDestroy() {
    this.destroyPopper()
  },
  props: {
    referenceElm: Object,
    popperOptions: Object,
  },
  data() {
    return {
      popperJs: null,
    }
  },
  computed: {
    referenceEle() {
      return this.referenceElm || window
    },
  },
  watch: {
    referenceEle() {
      this.createPopper()
    },
  },
  methods: {
    createPopper() {
      this.destroyPopper()
      this.popperJs = new Popper(this.referenceEle, this.$refs.vuePropper, this.popperOptions)
    },
    updatePopper() {
      if (this.popperJs) this.popperJs.scheduleUpdate()
    },
    destroyPopper() {
      if (this.popperJs) this.popperJs.destroy()
    },
  },
}
</script>
