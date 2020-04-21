<template>
  <div class="suggest">
    <div class="suggest__title-wrapper">
      <h2 class="suggest__title">{{ title }}</h2>
    </div>
    <div class="suggest__service-list">
      <div
        class="suggest__service suggest-service"
        v-for="(service, key) in services"
        :key="key"
      >
        <div class="suggest-service__name">{{ service.name }}</div>
        <div class="suggest-service__description">{{ service.description }}</div>
        <a
          :href="service.link.path"
          target="_blank"
          class="suggest-service__link"
        >
          <span>{{ service.link.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import links from '@/data/links.js'

export default {
  name: 'Suggest',
  data () {
    return {
      title: 'USEFUL',
      services: [
        {
          name: 'Cuprite',
          description: `Is a pure Ruby Capybara driver which uses Ferrum underneath. 
            Basically it makes Ferrum to be compatible with Capybara calls`,
          link: {
            text: 'See more',
            path: links.cuprite
          }
        },
        {
          name: 'Vessel',
          description: `In this simple framework you can build and start running 
            in parallel your crawler which works on top of Ferrum`,
          link: {
            text: 'See more',
            path: links.vessel
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.suggest {
  padding-bottom: 192px;
  @include md{
    padding-bottom: 112px;
  }
  @include sm {
    padding-bottom: 56px;
  }
  &__title-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 43px;
    @include sm {
      margin-bottom: 24px;
    }
    svg {
      position: absolute;
      right: -54px;
      bottom: 50%;
      transform: translateY(47%);
      @include sm {
        transform: scale(0.6641) translate(-23px, 72%);
      }
    }
  }
  &__service-list {
    display: flex;
    @include xs {
      flex-wrap: wrap;
    }
  }
  &__service {
    max-width: 43%;
    @include xs {
      max-width: 100%;
      margin-right: 0;
    }
    &:first-child {
      margin-right: 90px;
      @include sm {
        margin-right: 58px;
      }
      @include xs {
        margin-right: 0;
        margin-bottom: 64px;
      }
    }
  }
  &-service {
    display: flex;
    flex-direction: column;
    &__name {
      font-size: 32px;
      line-height: 100%;
      margin-bottom: 32px;
      @include sm {
        font-size: 24px;
        line-height: 1.35;
        margin-bottom: 16px;
      }
    }
    &__description {
      line-height: 1.6;
      line-height: 32px;
      margin-bottom: 24px;
      @include sm {
        margin-bottom: 24px;
      }
    }
    &__link {
      margin-top: auto;
      align-self: flex-start;
      line-height: 1.6;
      font-weight: 500;
      color: $white;
      transition: color .1s;
      @include sm {
        line-height: 1.2;
      }
      &:hover {
        color: $green;
        svg path {
          fill: $green;
        }
      }
    }
  }
}
</style>
