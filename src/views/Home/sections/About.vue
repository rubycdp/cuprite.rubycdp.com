<template>
  <div class="about">
    <One class="about__block" />
    <Two class="about__block" />
    <Three class="about__block" />
  </div>
</template>

<script>
import One from '@/views/Home/sections/About/One'
import Two from '@/views/Home/sections/About/Two'
import Three from '@/views/Home/sections/About/Three'

export default {
  name: 'About',
  components: {
    One,
    Two,
    Three
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
