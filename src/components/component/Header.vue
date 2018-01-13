<template lang="pug">
header
  nav
    router-link.logo(to="/")
    a.link(
      v-for="(i, idx) in links"
      href="javascript:;"
      @click="changeSection(idx + 1)"
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

  nav{
    @include rvw(282);
    box-sizing: border-box;
    padding: getVW(20) getVW(40);
    background-color: #fff;
    margin-left: getVW(116);

    .logo{
      @include rvw(100,118);
      width: 100%;
      background-image: url(../../assets/logo.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      margin-bottom: getVW(50);
    }

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
    }

  }
}
</style>