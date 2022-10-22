<template>
  <div class="introArea" id="CONCEPT">
    <p class="fadeIn">
      Vue.jsが得意なフロントエンドエンジニアです。いろいろなWebサービスに触れて価値観の変わる体験をしたように、関わってくださった方々へ向けて、感動を届けられるような、自身の抱える課題を解決していきたいと考えています。
      また、何かを作ることが好きなため、今後もエンジニアとして社会に貢献し続けたいと思っています。そのためにも日々進化し続ける技術のキャッチアップやお客様目線を考えていく必要があると考えております。
    </p>
    <p class="fadeIn">
      顧客満足度に何よりも重きを置き、お客様と対話を重ねることで意図を理解し、訪問されたユーザーに納得して頂けるものをデザインからコーディング、運用・保守までワンストップで行います。デザインは可愛らしいものからクールなものまで多岐の方向性に対応しており、タブレット・スマートフォンに対応したレスポンシブWebデザインにて設計します。また、見た目だけでなく将来性や使い勝手を考え、サイトのメンテナンス性や運用のしやすさにも配慮しています。個人事業ならではの特性を生かして、お客さまからのお問い合わせは平日はもちろん、土日祝日も承っております。お待たせさせず、対話を大切にし誠意を持って対応させていただきます。どうぞよろしくお願い致します。
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IntroComponent",
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
.introArea {
  flex-direction: column;
}
.introArea p {
  font-size: 1.1vw;
  width: 81.25vw;
  margin-bottom: 2vw;
  line-height: 2.2em;
  letter-spacing: 0.075em;
}
@media screen and (max-width: 768px) {
  .introArea p {
    font-size: 3.2vw;
    margin-bottom: 8vw;
  }
}
</style>
