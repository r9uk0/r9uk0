<template>
  <div class="creationArea" id="CREATEION">
    <div class="l-content">
      <div class="l-content_inner">
        <ul class="creationList">
          <li class="creationListItem fadeIn">
            <a
              href="https://r9uk0.github.io/crashedchocolate/"
              class=""
              target="_blank"
            >
              <img src="@/assets/Crush.png" class="creationListItemCatch" />
              <div class="creationListItemText">
                <h2 class="creationListItemTitle">Crashed Chocolate</h2>
                <p class="creationListItemCategory">DESIGN , CODING</p>
              </div>
            </a>
          </li>
          <li class="creationListItem fadeIn">
            <a
              href="https://r9uk0.github.io/koreanLP/"
              class=""
              target="_blank"
            >
              <img src="@/assets/klp.png" class="creationListItemCatch" />
              <div class="creationListItemText">
                <h2 class="creationListItemTitle">韓国料理屋LP</h2>
                <p class="creationListItemCategory">DESIGN , CODING</p>
              </div>
            </a>
          </li>
          <li class="creationListItem fadeIn">
            <a
              href="https://r9uk0.github.io/WantedManPre/"
              class=""
              target="_blank"
            >
              <img src="@/assets/wanted.png" class="creationListItemCatch" />
              <div class="creationListItemText">
                <h2 class="creationListItemTitle">お尋ね者を探せ！！！</h2>
                <p class="creationListItemCategory">DESIGN , CODING</p>
              </div>
            </a>
          </li>
          <li class="creationListItem fadeIn">
            <a
              href="https://r9uk0.github.io/BusinessLP/"
              class=""
              target="_blank"
            >
              <img src="@/assets/kaku.png" class="creationListItemCatch" />
              <div class="creationListItemText">
                <h2 class="creationListItemTitle">BtoBLP</h2>
                <p class="creationListItemCategory">DESIGN , CODING</p>
              </div>
            </a>
          </li>
          <li class="creationListItem fadeIn">
            <a
              href="https://r9uk0.github.io/InfinityBillingView/"
              class=""
              target="_blank"
            >
              <img src="@/assets/infinity.png" class="creationListItemCatch" />
              <div class="creationListItemText">
                <h2 class="creationListItemTitle">無限課金体験</h2>
                <p class="creationListItemCategory">DESIGN , CODING</p>
              </div>
            </a>
          </li>
          <li class="creationListItem fadeIn">
            <a
              href="https://r9uk0.github.io/corporate/"
              class=""
              target="_blank"
            >
              <img src="@/assets/fiction.png" class="creationListItemCatch" />
              <div class="creationListItemText">
                <h2 class="creationListItemTitle">CorporateSite</h2>
                <p class="creationListItemCategory">DESIGN , CODING</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CreationComponent",
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
.creationArea .creationList {
  width: 81.25vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 5vw auto 7.5vw;
}

.creationArea .creationListItem {
  display: block;
  padding-bottom: 7.5vw;
}

.creationArea .creationListItemCatch {
  width: 39vw;
}

.creationArea .creationListItemTitle {
  font-family: "NotoSans SemiBold", sans-serif;
  font-size: 1.3vw;
  letter-spacing: 0.08em;
  color: #131313;
}

.creationArea .creationListItemCategory {
  color: #131313;
  font-size: 1vw;
  padding-top: 1vw;
  letter-spacing: 0.05em;
}

.creationArea .creationListItemText {
  padding: 1.4vw 0 0 1em;
}
.creationArea .l-content {
  height: 100%;
}
@media screen and (max-width: 768px) {
  .creationArea .creationList {
    flex-direction: column;
  }

  .creationArea .creationListItemCatch {
    width: 100%;
  }
  .creationArea .creationListItemText {
    margin-top: 4vw;
    padding-left: 2.7vw;
  }
  .creationArea .creationListItemTitle {
    font-size: 3.2vw;
  }
  .creationArea .creationListItemCategory {
    font-size: 2.3vw;
    padding-top: 3.3vw;
  }
}
</style>
