<template>
  <header class="header">
    <div class="header__content">
      <Logo />
      <Nav />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/layout/Header/Logo'
import Nav from '@/components/layout/Header/Nav'

export default {
  name: 'Header',
  components: {
    Logo,
    Nav
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 60px 0;
  position: sticky;
  top: 0;
  background: $black;
  margin: 0 auto;
  padding: 20px 0;
  margin-bottom: 166px;
  z-index: 100;
  @include sm {
    padding: 32px 0;
    margin-bottom: 67px;
  }
  &__content {
    max-width: 960px;
    width: calc(100% - 96px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    @include xs {
      width: calc(100% - 48px);
    }
  }
}
</style>
