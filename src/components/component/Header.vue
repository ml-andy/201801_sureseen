<template lang="pug">
header
  router-link.logo(to="/")
  .btn_menu(
    @click="openNav = !openNav"
    :class="openNav ? 'on' : ''")
    span.top
    span.middle
    span.bottom
  nav.pc
    a.link(
      v-for="(i, idx) in links"
      href="javascript:;"
      @click="navLinkClick(idx + 1)"
    )
      span.name {{ i.name }}
      span.eng {{ i.eng }}
  transition(name="fade",mode="out-in")  
    nav.mb(v-if="openNav ? 'on' : ''")
      a.link(
        v-for="(i, idx) in links"
        href="javascript:;"
        @click="navLinkClick(idx + 1)"
      )
        span.name {{ i.name }}
        span.eng {{ i.eng }}
  .language
    router-link(to="/") 中文
    span /
    router-link(to="/") EN

</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      openNav: false,
    };
  },
  computed: {
    ...mapState({
      loadingShow: state => state.loadingShow,
      links: state => state.nav.links,
    }),
  },
  mounted() {

  },
  methods: {
    ...mapMutations(['changeStateKeyValue', 'changeSection']),
    navLinkClick(idx) {
      this.openNav = false;
      this.changeSection(idx);
    },
  },
};
</script>

<style lang="scss" scoped>
$vpw:1920;
$vph:1080;
header{
  @include altvw(100,108);
  width: 100%;
  z-index: 99;

  .logo{
    @include altvw(282,118,116,20);
    background-image: url(../../assets/logo.png);
    background-repeat: no-repeat;
    background-size: getVW(206) auto;
    background-position: center center;
    z-index: 9;
  }

  .btn_menu{
    display: none;
  }

  nav{
    @include rvw(282);
    box-sizing: border-box;
    padding: getVW(182) getVW(40) getVW(20) getVW(40);
    background-color: #fff;
    margin-left: getVW(116);
    z-index: 8;

    &.pc{ display: block; }
    &.mb{ display: none; }

    .link{
      @include r;
      margin-bottom: getVW(40);
      box-sizing: border-box;
      padding-left: getVW(24);

      .name{
        @include r;
        @include fontvw(22,22,#5c5c5c);
        letter-spacing: getVW(4);
        margin-bottom: getVW(15);
      }

      .eng{
        @include r;
        @include fontvw(14,14,#5c5c5c);
        letter-spacing: getVW(2);
      }
    }
  }

  .language{
    @include arbvw(auto,auto,32,16);

    a{
      @include fontvw(16,16,#646464);
      font-family: '微軟正黑體';
      position: relative;
      display: inline-block;
      vertical-align: top;
    }

    span{
      @include fontvw(16,16,#646464);
      font-family: '微軟正黑體';
      position: relative;
      display: inline-block;
      margin: 0 getVW(6);
      vertical-align: top;
    }

  }
}

//mobile
$vpw:768;
$vph:1200;
@media screen and (max-width: 1199px) {
header{
  @include fltvw(100,160);
  width: 100%;
  z-index: 99;
  background-color: #fff;

  .logo{
    @include altvw(220,160,50,0,-110);
    left: 50%;
    background-image: url(../../assets/logo.png);
    background-repeat: no-repeat;
    background-size: getVW(206) auto;
    background-position: center center;
    z-index: 9;
  }

  .btn_menu{
    @include albvw(90,90,20);
    display: block;
    z-index: 10;
    cursor: pointer;

    &.on{
      span{
        &.top{ transform: rotate(45deg); top: getVW(41); }
        &.middle{ opacity: 0; }
        &.bottom{ transform: rotate(-45deg); top: getVW(41); }
      }
    }

    span{
      @include altvw(34,4,28,29);
      background-color: #707070;
      transition: 0.3s;

      &.middle{ top: getVW(41); }
      &.bottom{ top: getVW(53); }
    }
  }

  nav{
    @include flt;
    height: calc(100% - #{getVW(160)});
    top: getVW(160);
    box-sizing: border-box;
    padding: getVW(20) getVW(49);
    background-color: #fff;
    margin-left: getVW(0);
    z-index: 8;

    &.pc{ display: none; }
    &.mb{ display: block; }

    .link{
      @include r;
      margin-bottom: getVW(40);
      box-sizing: border-box;
      padding-left: 0;

      .name{
        @include r;
        @include fontvw(22,22,#5c5c5c);
        letter-spacing: getVW(4);
        margin-bottom: getVW(15);
      }

      .eng{
        @include r;
        @include fontvw(14,14,#5c5c5c);
        letter-spacing: getVW(2);
      }
    }
  }

  .language{
    @include arbvw(auto,auto,18,30);

    a{
      @include fontvw(16,16,#646464);
      font-family: '微軟正黑體';
      position: relative;
      display: inline-block;
      vertical-align: top;
    }

    span{
      @include fontvw(16,16,#646464);
      font-family: '微軟正黑體';
      position: relative;
      display: inline-block;
      margin: 0 getVW(6);
    }

  }
}
}
</style>