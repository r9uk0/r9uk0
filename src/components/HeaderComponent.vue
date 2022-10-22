<template>
  <div class="headerArea">
    <img src="@/assets/logo.png" alt="" @click="scroll('TOP')" />
    <div class="headerMenu">
      <p @click="scroll('CREATEION')">CREATEION</p>
      <p @click="scroll('CONCEPT')">CONCEPT</p>
      <p @click="scroll('PROFILE')">PROFILE</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderComponent",
  components: {},
  props: {},
  data() {
    return {
      scrollY: 0,
    };
  },
  methods: {
    scroll(target: string) {
      const element = document.getElementById(target);
      if (element) {
        const position = element.getBoundingClientRect().top + this.scrollY;
        window.scrollTo({
          top: position,
          behavior: "smooth",
        });
      }
    },
    getScroll() {
      this.scrollY = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  computed: {},
  watch: {},
});
</script>

<style scoped>
.headerArea {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: transparent;
  width: 100vw;
  height: auto;
  padding: 2vw 3vw;
  position: fixed;
  top: 0;
  z-index: 100;
}
.headerArea img {
  width: 4vw;
  height: 4vw;
  margin-right: 2vw;
  border-radius: 50%;
}
.headerArea .headerMenu {
  display: flex;
}
.headerArea .headerMenu p {
  margin-left: 2vw;
  font-size: 1.2vw;
  letter-spacing: 0.15em;
  height: 100%;
  display: flex;
  align-items: center;
}
.headerArea .headerMenu p:hover {
  cursor: pointer;
}
.headerArea .headerMenu p:first-child {
  margin-left: 0;
}
@media screen and (max-width: 768px) {
  .headerArea img {
    width: 10.5vw;
    height: 10.5vw;
  }

  .headerArea .headerMenu p {
    font-size: 2.5vw;
    margin-left: 4vw;
  }
}
</style>
