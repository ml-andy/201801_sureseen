<template lang="pug">
  #app
    Loading
    transition(name="fade",mode="out-in")
      .btn_gotop(
        @click="goTop"
        v-if="pageYoffset > 0 ? true : false"
      )
    .main
      .content
        Header
        transition(name="fade",mode="out-in")
          router-view
        Footer
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import $ from 'jquery';
import Loading from './components/component/Loading';
import Header from './components/component/Header';
import Footer from './components/component/Footer';


export default {
  name: 'app',
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      loadingShow: state => state.loadingShow,
      pageYoffset: state => state.pageYoffset,
    }),
  },
  mounted() {
    $(window).on('scroll', () => {
      this.changeStateKeyValue({
        key: 'pageYoffset',
        value: window.pageYOffset,
      });
    });
  },
  methods: {
    ...mapMutations(['changeStateKeyValue']),
    goTop() {
      $('body,html').animate({ scrollTop: 0 }, 600);
    },
  },
  components: {
    Loading,
    Header,
    Footer,
  },
};
</script>

<style>
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {margin:0;padding:0;}
table {border-collapse:collapse;border-spacing:0;}
fieldset, img {border:0;}
address, caption, cite, code, dfn, em, strong, th, var {font-style:normal;font-weight:normal;}
ol, ul {list-style:none;}
caption, th {text-align:left;}
/*h1, h2, h3, h4, h5, h6 {font-size:100%;font-weight:normal;}*/
q:before, q:after {content:'';}
abbr, acronym {border:0;}
html,body{height:100%;}
input{background:transparent;border:none;}
input:focus,input:focus{outline: none !important;}
body{font-family: 'Microsoft JhengHei',Arial;font-size:12px;}
a{outline: none;hlbr:expression(this.onFocus=this.blur());text-decoration:none;}
.clear{clear: both;}
img{vertical-align:top;}
html{-webkit-text-size-adjust: 100%;}
</style>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: auto;
  float: left;
  background-color: #f1f1f1;

  .btn_gotop {
    @include flb(42px,42px,50%,50px,579px);
    background-image: url(assets/btn_gotop.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    z-index: 99;
    cursor: pointer;
  }

  .main{
    position: relative;
    width: 100%;
    max-width: 1200px;
    height: auto;
    margin: auto;

    .content{
      @include r;
      background-color: #fff;
    }
  }
}

//mobile
$vpw:768;
$vph:1200;
@media screen and (max-width: 1199px) {
#app {
  position: relative;
  width: 100%;
  height: auto;
  float: left;
  background-color: #f1f1f1;

  .btn_gotop {
    @include frbvw(42,42,6,20);
    left: auto;
    top: auto;
    margin-left: 0;
    background-image: url(assets/btn_gotop.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    z-index: 99;
    cursor: pointer;
  }

  .main{
    @include r;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: auto;

    .content{
      @include r;
      background-color: #fff;
    }
  }
}
}
</style>
