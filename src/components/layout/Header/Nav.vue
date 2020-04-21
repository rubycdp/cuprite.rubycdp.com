<template>
  <nav class="nav">
    <a
      v-for="(link, key) in links"
      :key="key"
      :href="link.path"
      class="nav__link"
      :target="isExternalLink(link) ? '_blank' : '_self'"
    >
      {{ link.text }}
    </a>
  </nav>
</template>

<script>
import links from '@/data/links.js'

export default {
  name: 'Nav',
  components: {
  },
  data () {
    return {
      links: [
        // {
        //   text: 'Docs',
        //   path: '/docs'
        // },
        {
          text: 'GitHub',
          path: links.cuprite
        }
      ]
    }
  },
  methods: {
    /**
     * @param {object} link
     * @returns boolean
     */
    isExternalLink (link) {
      return link.path[0] !== '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  &__link {
    display: inline-block;
    line-height: 1.6;
    margin-right: 24px;
    color: $white;
    transition: color .1s;
    &:hover {
      color: $red;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
