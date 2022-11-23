<template>
  <div class="footerArea" id="PROFILE">
    <div class="footerContainer">
      <img src="@/assets/profile.jpeg" alt="" />
      <p>
        フロントエンドエンジニア r9uk0<br />
        Vue.jsが得意です。バックエンドはNode.jsとpythonが好きです。<br />
        真摯にお客様と向き合い、課題解決や顧客体験への寄与を大切にしております。<br />
        CONTACT：<a class="contact" href="https://twitter.com/r9uk0">Twitter</a
        ><br />© r9uk0 All rights reserved.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FooterComponent",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
});
</script>

<style scoped>
.footerArea .contact {
  color: #1d9bf0;
}
.footerArea {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #24292f;
  width: 100%;
  height: 20vw;
  color: #fff;
}
.footerContainer {
  width: 81.25vw;
  font-size: 1vw;
  display: flex;
  align-items: center;
}
.footerContainer p {
  line-height: 1.8em;
  letter-spacing: 0.075em;
}
.footerContainer img {
  width: auto;
  height: 8vw;
  margin-right: 2vw;
}
@media screen and (max-width: 768px) {
  .footerArea {
    height: 40vw;
  }
  .footerContainer {
    font-size: 2.5vw;
  }
  .footerContainer img {
    height: 12vw;
  }
}
</style>
