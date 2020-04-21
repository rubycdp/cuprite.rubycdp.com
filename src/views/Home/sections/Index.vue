<template>
  <div class="index">
    <div class="index__center-wrapper">
      <h1 class="index__title">{{ title }}</h1>
      <div class="index__links">
        <a href="#scroll-one" v-smooth-scroll="scrollOptions">
          {{ explore }}
        </a>
        <a :href="links.ferrum.path" target="_blank">
          {{ links.ferrum.text }}
        </a>
      </div>
      <img class="index__bg-image" src="@/assets/images/home/cover_illistration.png" alt="image">
    </div>
  </div>
</template>

<script>
import links from '@/data/links.js'

export default {
  name: 'Index',
  components: {
  },
  data () {
    return {
      title: 'Fearless Ruby Chrome driver',
      links: {
        ferrum: {
          text: 'GitHub',
          path: links.ferrum
        }
      },
      explore: 'Explore',
      scrollOptions: {
        duration: 700,
        updateHistory: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100vh;
  min-height: 100%;
  max-height: 1400px;
  background: url("../../../assets/images/home/cover_illistration.png") 86% 1%/45% no-repeat;
  @include md {
    height: 100%;
    background-position: 50% 100%;
    background-size: 75%;
    margin-bottom: 315px;
  }
  @include sm {
    margin-bottom: 120px;
  }
  @include xs {
    background: transparent;
  }
  &__bg-image {
    display: none;
    @include xs {
      display: block;
    }
  }
  &__header {
    margin-bottom: 166px;
    @include sm {
      margin-bottom: 22px;
    }
  }
  &__title {
    max-width: 745px;
    margin: 10px 0 32px;
    @include sm {
      max-width: 295px;
    }
    @include xxs {
      letter-spacing: -0.04em;
      margin-bottom: 16px;
    }
  }
  &__links {
    position: relative;
    display: inline-block;
    align-self: flex-start;
    margin-bottom: 30px;
    cursor: pointer;
    @include md {
      margin-bottom: 480px;
    }
    @include sm {
      margin-bottom: 384px;
    }
    @include xs {
      margin-bottom: 0px;
    }

    a {
      display: inline-block;
      color: $white;
      line-height: 1.6;
      transition: color .1s, background .1s;
      padding: 8px 32px;
      border-radius: 4px;
      border: 2px solid white;
      &:first-child {
        margin-right: 24px;
      }
      &:hover {
        color: $black;
        background: $white;
      }
      @include xs {
        font-size: 14px;
        padding: 6px 24px;
        &:first-child {
          display: none;
        }
      }
    }
  }
}
</style>
