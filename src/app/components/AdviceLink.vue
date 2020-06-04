<template>
  <span class="advice__link" v-html="advice"></span>
</template>

<script>
export default {
  name: 'FgaAdviceLink',
  props: {
    advice: String
  }
}
</script>

<style lang="scss">
.heighten {
  top: .05em
}

.heighten,
.typo {
  position: relative
}

.typo {
  left: -.33em;
  margin-right: -.4em
}

.typo_double {
  margin-right: -.8em
}

.dash {
  margin-right: -3em
}

.dash,
.timer {
  position: relative
}

.timer {
  top: -.05em;
  animation: blink 1s step-start 0s infinite
}

@keyframes blink {
  50% {
    opacity: 0
  }
}
</style>
