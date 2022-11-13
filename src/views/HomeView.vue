<template>
  <div class="home">
    <HeaderComponent />
    <!-- TopComponent -->
    <TopComponent />
    <!-- CreationComponent -->
    <CreationComponent />
    <!-- ContactComponent -->
    <IntroComponent />
    <FooterComponent />
    <LoadingComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopComponent from "@/components/TopComponent.vue";
import CreationComponent from "@/components/CreationComponent.vue";
import IntroComponent from "@/components/IntroComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
export default Vue.extend({
  name: "HomeView",
  components: {
    TopComponent,
    CreationComponent,
    IntroComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
});
</script>
<style>
.home {
  position: relative;
}
</style>