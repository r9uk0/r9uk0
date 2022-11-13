import Vue from 'vue'
import Vuex from 'vuex'
import {
  LOADING_START,
  LOADING_STOP,
} from "./action-types";
import {
  CHANGE_LOADING_STATUS,
} from "./mutation-types";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  getters: {
  },
  mutations: {
    [CHANGE_LOADING_STATUS](state, loadingStatus) {
      state.isLoading = loadingStatus;
    },
  },
  actions: {
    [LOADING_START]({ commit }) {
      commit(CHANGE_LOADING_STATUS, true);
    },
    [LOADING_STOP]({ commit }) {
      commit(CHANGE_LOADING_STATUS, false);
    },
  },
  modules: {
  }
})
