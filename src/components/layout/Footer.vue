<template>
  <footer class="footer">
    <div class="footer__developer">
      <span class="color-dim">{{ developer.siteBy }}</span>
      <a
        target="_blank"
        :href="developer.link.path"
        class="color-dim"
      >
        {{ developer.link.text }}
      </a>
    </div>
  </footer>
</template>

<script>
import links from '@/data/links.js'

export default {
  name: 'Footer',
  data () {
    return {
      developer: {
        siteBy: 'Designed by ',
        link: {
          path: links.evrone,
          text: 'evrone.com'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  padding: 48px 0;
  @include sm {
    padding: 24px 0;
  }
  &__developer, &__developer a {
    font-size: 16px;
    line-height: 2;
    @include sm {
      font-size: 12px;
      line-height: 2.7;
    }
  }
  .color-dim {
    opacity: .3;
  }
  &__developer {
    a {
      color: $white;
      transition: opacity .1s;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
