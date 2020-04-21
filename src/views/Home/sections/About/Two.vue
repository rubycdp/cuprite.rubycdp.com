<template>
  <div class="two">
    <div class="two__title-wrapper">
      <SVGSkillTitleLeft />
      <h2 class="two__title">
        <span>Supported</span>
        <span> features</span>
      </h2>
      <SVGSkillTitleRight />
    </div>
    <div class="two__skills">
      <div class="two__triggers">
        <div
          :class="getSkillClassList(index)"
          v-for="(skill, index) in skills"
          :key="index"
          @click="setActiveSkillNumber(index)"
        >
          <span>{{ skill.name }}</span>
        </div>
      </div>
      <div class="two__slides">
        <img :src="activeSkillImagePath" alt="skill">
      </div>
    </div>
  </div>
</template>

<script>
import SVGSkillTitleLeft from '@/assets/images/home/skill_title_l.svg'
import SVGSkillTitleRight from '@/assets/images/home/skill_title_r.svg'

export default {
  name: 'Two',
  components: {
    SVGSkillTitleLeft,
    SVGSkillTitleRight
  },
  data () {
    return {
      skills: [
        {
          name: 'Navigation & finders',
          imgName: 'skill_02.png'
        },
        {
          name: 'Screenshots',
          imgName: 'skill_02.png'
        },
        {
          name: 'Mouse & keyboard',
          imgName: 'skill_02.png'
        },
        {
          name: 'Network, cookies, headers',
          imgName: 'skill_02.png'
        },
        {
          name: 'JS, frames, dialogs',
          imgName: 'skill_02.png'
        }
      ],
      activeSkillNumber: 0
    }
  },
  computed: {
    /**
     * @returns string
     */
    activeSkillImagePath () {
      const imgName = this.skills[this.activeSkillNumber].imgName
      return this.getImgUrl(imgName)
    }
  },
  methods: {
    /**
     * @param {number} index Skill number
     * @returns array
     */
    getSkillClassList (index) {
      return [
        'two-skill',
        index === this.activeSkillNumber ? 'two-skill_active' : ''
      ]
    },
    /**
     * @param {number} index Skill number
     * @returns void
     */
    setActiveSkillNumber (index) {
      this.activeSkillNumber = index
    },
    /**
     * Get dynamic image path
     * @param {string} imgPath
     * @returns string
     */
    getImgUrl (imgName) {
      return require('@/assets/images/home/' + imgName)
    }
  }
}
</script>

<style lang="scss" scoped>
.two {
  padding-bottom: 242px;
  @include sm {
    padding-bottom: 120px;
  }
  &__title {
    width: min-content;
    @include sm {
      margin-bottom: 32px;
    }
    @include xs {
      font-size: 41px;
    }
  }
  &__title-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 43px;
    @include sm {
      margin-bottom: 0;
    }
    svg {
      position: absolute;
      bottom: 50%;
      transform: translateY(48%);
      &:first-child {
        left: -78px;
        bottom: 45%;
        @include sm {
          transform: scale(0.6641) translate(34px, 75%);
        }
      }
      &:last-child {
        right: -59px;
        bottom: 44%;
        @include sm {
          transform: scale(0.6641) translate(-3px, 82%);
        }
        @include xs {
          transform: scale(0.6641) translate(-3px, 72%);
        }
      }
    }
  }
  &__skills {
    display: flex;
    @include xs {
      flex-wrap: wrap;
    }
  }
  &__triggers {
    display: flex;
    flex-direction: column;
    @include md {
      flex-shrink: 0;
      margin-right: 70px;
    }
    @include sm {
      flex-shrink: 0;
      margin-right: 25px;
    }
    @include xs {
      flex-direction: initial;
      overflow-x: auto;
      max-width: 100%;
      margin-left: -24px;
      margin-right: -24px;
      padding: 4px 16px;
      padding-bottom: 20px;
      margin-bottom: 28px;
    }
    .two-skill {
      position: relative;
      align-self: flex-start;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.35;
      margin-bottom: 24px;
      cursor: pointer;
      transition: color .1s;
      @include sm {
        font-size: 20px;
        margin-bottom: 16px;
        line-height: 1.2;
      }
      @include xs {
        margin-bottom: 0px;
        margin-right: 16px;
        white-space: nowrap;
        &:last-child {
          margin-right: 16px;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        color: $green;
        svg {
          opacity: 1;
          transition: opacity .1s;
        }
      }
      svg {
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        opacity: 0;
      }
      &_active {
        color: $green;
        svg {
          opacity: 1;
          transition: opacity .1s;
        }
      }
    }
  }
  &__slides {
    margin-top: -68px;
    margin-left: auto;
    @include md {
      margin-top: 0;
    }
    @include xs {
      padding: 0 16px;
    }
  }
}
</style>
