<template>
  <div class="square" :style="getColor()" @click="handlerSquareClick"></div>
</template>

<script >
export default {
  name: "src-componentes-square",
  props: ["color", "handlerSquareClick"],
  mounted() {},
  data() {
    return {};
  },

  methods: {
    getColor() {
      return {
        backgroundColor: this.color,
      }
    }
  },

    computed: {
      handleClick() {
        
        return this.$emit()
      }
    }
}
</script>

<style scoped lang="css">
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
