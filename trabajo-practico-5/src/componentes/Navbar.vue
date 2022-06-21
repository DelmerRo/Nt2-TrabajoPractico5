<template >
  <section class="navigator">
   <button id="reset" @click="init()">{{restartButton}}</button>
    <span class="message" :style="getStyles(messageDisplay)">{{messageDisplay}}</span>

    <button id="easy" :class="[!isHard ? 'selected' : '']" @click="hardToEasy()">easy </button>
    <button id="hard" :class="[isHard ? 'selected' : '']" @click="easyToHard()"> hard</button>
    
  </section>
</template>

<script >
export default {
  name: "src-components-navbar",
  props: [
    'isHard',
    'colorCount',
    'init',
    'messageDisplay',
    'restartButton'
  ],

  mounted() {},

  data() {
    return {
    };
  },
  
  methods: {
  getClass(isHard, messageDisplay) {
          return [{
            'selected': isHard,
            'message-visible': messageDisplay
          }]
      },
      getStyles(messageDisplay) {
        return {
          color: messageDisplay ? "#000000" : "#ffffff"
        }
      },
      hardToEasy(){
        if (this.isHard) {
          this.$emit('isHard', false);
          this.$emit('colorCount', 3);
          this.init();  
        }
      },
      easyToHard(){
        if (!this.isHard) {
          this.$emit('isHard', true);
          this.$emit('colorCount', 6);
          this.init();
        }
      }
  },
  computed: {},
};
</script>

<style scoped lang="css">
.navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
.message {
  color: #ffffff;
  display: inline-block;
  width: 20%;
}
.message-visible {
  color: #000000;
}
.selected {
  background-color: steelblue;
  color: white;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
</style>
