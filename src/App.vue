<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import { LOADING_START, LOADING_STOP } from "@/store/action-types";
export default Vue.extend({
  mounted() {
    let fadeInTarget = document.querySelectorAll(".fadeIn");
    window.addEventListener("scroll", () => {
      for (let i = 0; i < fadeInTarget.length; i++) {
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; // 現在のブラウザの高さ
        if (scroll > offset - windowHeight + 150) {
          fadeInTarget[i].classList.add("scrollIn");
        }
      }
    });
  },
  computed: {
    ...mapState({
      isLoading: (state) => (state as any).isLoading,
    }),
  },
  methods: {
    ...mapActions({
      loadingStart: LOADING_START,
      loadingStop: LOADING_STOP,
    }),
  },
  async created() {
    const sleep = (ms: any) => new Promise((res) => setTimeout(res, ms));
    await Promise.all([
      await this.loadingStart(),
      await await sleep(2000),
      await this.loadingStop(),
    ]);
  },
});
</script>
<style>
.fadeIn {
  opacity: 0;
  transition-duration: 500ms;
  transition-property: opacity, transform;
}

.fadeInUp {
  transform: translate(0, 50px);
}

.fadeInDown {
  transform: translate(0, -50px);
}

.fadeInLeft {
  transform: translate(-50px, 0);
}

.fadeInRight {
  transform: translate(50px, 0);
}

.scrollIn {
  opacity: 1;
  transform: translate(0, 0);
}
html,
body,
div,
span,
a,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ul,
ol {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: "";
}

del {
  text-decoration: line-through;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 0;
  padding: 0;
}

img {
  vertical-align: bottom;
}

input,
select {
  vertical-align: middle;
}

input:focus,
textarea:focus {
  outline: 0;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-family: "Yu Gothic", YuGothic, "Hiragino Kaku Gothic Pro", Meiryo, Osaka,
    "MS PGothic", sans-serif;
  font-size: 12px;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  background-color: #faf8f5;
  color: #131313;
}

h1 {
  font-size: 2.25vw;
}

h2 {
  font-size: 2vw;
}

h3 {
  font-size: 1.75vw;
}

h4 {
  font-size: 1.5vw;
}

h5 {
  font-size: 1.25vw;
}

h6 {
  font-size: 1vw;
}

a {
  color: #c51162;
  text-decoration: none;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

a:hover {
  color: #ff4081;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.7;
}

.topArea,
.creationArea,
.introArea {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
