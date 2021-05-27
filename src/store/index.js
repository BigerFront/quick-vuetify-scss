import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {
    ...getters,
  },
  actions: {},
  modules: {},
});
