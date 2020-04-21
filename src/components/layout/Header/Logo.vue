<template>
  <div class="logo">
    <SVGLogo />
  </div>
</template>

<script>
import SVGLogo from '@/assets/images/logo.svg'

export default {
  name: 'Logo',
  components: {
    SVGLogo
  }
}
</script>

<style lang="scss" scoped>
.logo {
  @include sm {
    transform: scale(0.6641) translate(-31px, -9px);
    max-height: 32px;
  }
}
</style>
