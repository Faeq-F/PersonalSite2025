<script lang="js">
export default {
  mounted() {
    this.width = this.$refs.card.offsetWidth
    this.height = this.$refs.card.offsetHeight
  },
  props: ['dataImage', 'header', 'content'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: 15,
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width
    },
    mousePY() {
      return this.mouseY / this.height
    },
    cardStyle() {
      const rX = this.mousePX * 10
      const rY = this.mousePY * -10
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      }
    },
    cardBgTransform() {
      const tX = this.mousePX * -40
      const tY = this.mousePY * -40
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage}Light.png)`,
      }
    },
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay)
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0
        this.mouseY = 0
      }, 1000)
    },
  },
}
</script>

<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
  >
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <h1 class="font-header">{{ this.header }}</h1>
        <p class="font-text">{{ this.content }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
