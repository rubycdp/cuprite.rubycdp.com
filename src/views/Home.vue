<template>
  <div class="home">
    <div class="z-index-wrapper z-index-wrapper_top">
      <Header class="index__header" />
      <div class="container">
        <div class="home__section-list">
          <Index class="home__section home__section_index" />
          <About class="home__section home__section_about" />
          <Suggest class="home__section home__section_suggest" />
        </div>
        <Footer />
      </div>
    </div>
    <div class="z-index-wrapper z-index-wrapper_bottom">
      <Proposal />
    </div>
  </div>
</template>

<script>
import Index from '@/views/Home/sections/Index.vue'
import About from '@/views/Home/sections/About.vue'
import Suggest from '@/views/Home/sections/Suggest.vue'
import Footer from '@/components/layout/Footer.vue'
import Proposal from '@/components/Proposal.vue'
import Header from '@/components/layout/Header.vue'

export default {
  name: 'Home',
  components: {
    Index,
    About,
    Suggest,
    Footer,
    Proposal,
    Header
  },
  mounted () {
    this.setBodyBgBlack()
  },
  methods: {
    /**
     * Need it for ios devices to avoid
     * showing white background on scroll
     * @returns void
     */
    setBodyBgBlack () {
      document.body.classList.add('bg-black')
    }
  }
}
</script>

<style lang="scss">
.home {
  position: relative;
  background: $black;
  color: $white;
  font-size: 16px;
  font-weight: 300;
  @include sm {
    font-size: 16px;
  }
  .container {
    @include page-container;
  }

  a {
    text-decoration: none;
  }
  h1 {
    font-size: 96px;
    font-weight: 900;
    @include sm {
      font-size: 40px;
    }
  }
  h2 {
    font-size: 96px;
    font-weight: 900;
    @include sm {
      font-size: 48px;
    }
  }
  h1, h2 {
    text-transform: lowercase;
    line-height: 100%;
  }
  .z-index-wrapper {
    position: relative;
    padding-top: 20px;
    &_top {
      z-index: 2;
      background: $black;
      margin-bottom: 320px;
      @include sm {
        margin-bottom: 160px;
      }
    }
    &_bottom {
      z-index: 1;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }
}
</style>
