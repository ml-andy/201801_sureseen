import Vue from 'vue';
import Vuex from 'vuex';
import Nav from '@/store/modules/nav';
import Banner from '@/store/modules/banner';
import Product from '@/store/modules/product';
import $ from 'jquery';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingShow: true,
    pageYoffset: 0,
    language: {
      chinese: true,
      english: false,
    },
  },
  mutations: {
    changeStateKeyValue(state, { path, key, value }) {
      if (path) state[path][key] = value;
      else state[key] = value;
    },
    changeSection(state, idx) {
      let scrollTop = $('section').eq(idx).offset().top;
      if(window.innerWidth <= 1199) scrollTop = scrollTop - $('header').height();
      $('body,html').animate({ scrollTop }, 600);
    },
    changeLanguage(state, { key, value }) {
      state.language[key] = value;
    },
  },
  getters: {

  },

  actions: {
    // tracker_pg({ commit }, value ){
    //   let valueFin = value
    //   if(!device.desktop()) valueFin = '/m' + value

    //   ga('send', 'pageview',valueFin);
    //   ga('eventSite.send', 'pageview',valueFin);
    // },
  },
  modules: {
    nav: Nav,
    banner: Banner,
    product: Product,
  },
});
