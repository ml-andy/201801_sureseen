<template lang="pug">
footer
  .unit(v-if="language.chinese")
    .title 網站地圖
    ul
      li.bt(
        v-for="(i,idx) in sitemap"
        @click="changeSection(idx)")
        |{{ i }}
  .unit(v-else-if="language.english")
    .title Sitemap
    ul
      li.bt(
        v-for="(i,idx) in sitemapEng"
        @click="changeSection(idx)")
        |{{ i }}
  .unit(v-if="language.chinese")
    .title 聯絡我們
    ul
      li 新北市五股區五權六路35號4樓
      li Tel:+886-2-22992726
      li Fax:+886-2-22992960
      li Mail:wuku37@sureseen.com.tw
  .unit(v-else-if="language.english")
    .title Contact Us
    ul
      li 4F., No.35, Wuchuan 6th Rd., Wugu Dist., New Taipei City 248, Taiwan (R.O.C.)
      li Tel:+886-2-22992726
      li Fax:+886-2-22992960
      li Mail:wuku37@sureseen.com.tw
  .socialbox
    span.twitter(@click="share('twitter')")
    span.fb(@click="share('fb')")
    span.google(@click="share('google')")
    span.line(@click="share('line')")
  .copyright Design by 參柒設計

</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Footer',
  data() {
    return {
      sitemap: [
        '回到首頁',
        '認識樹欣',
        '優勢介紹',
        '產品介紹',
        '公司據點',
      ],
      sitemapEng: [
        'Home',
        'About Sureseen',
        'Our Advantage',
        'Product Info',
        'Company Base',
      ],
    };
  },
  computed: {
    ...mapState({
      loadingShow: state => state.loadingShow,
      language: state => state.language,
    }),
  },
  mounted() {

  },
  methods: {
    ...mapMutations(['changeStateKeyValue', 'changeSection']),
    share(type) {
      switch (type) {
        case 'twitter':
          window.open(`http://twitter.com/share?url=${encodeURIComponent(location.href)}`, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
          break;
        case 'fb':
          window.open(`http://www.facebook.com/sharer.php?u=${encodeURIComponent(location.href)}`, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
          break;
        case 'google':
          window.open(`https://plus.google.com/share?app=110&url=${encodeURIComponent(location.href)}`, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
          break;
        case 'line':
          window.open(`https://lineit.line.me/share/ui?url=${encodeURIComponent(location.href)}`, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
          break;
        default:
          window.open(`http://www.facebook.com/sharer.php?u=${encodeURIComponent(location.href)}`, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$vpw:1920;
$vph:1080;
footer{
  @include r;
  border-top: getVW(20) solid #006f37;
  background-color: #535353;
  box-sizing: border-box;
  padding-left: getVW(100);
  padding-top: getVW(70);

  .unit{
    @include r;
    width: getVW(215);
    margin-right: getVW(60);

    &:nth-child(2){
      width: getVW(578);
      margin-right: 0;
    }

    .title{
      @include r;
      @include fontvw(16,16,#d9d9d9);
      box-sizing: border-box;
      padding-bottom: getVW(10);
      border-bottom: 2px solid #fff;
      margin-bottom: getVW(18);
    }

    ul{
      @include r;

      li{
        @include r;
        @include fontvw(14,24,#afafaf);

        &.bt{ cursor: pointer; }
      }
    }
  }

  .socialbox{
    @include artvw(240,auto);
    box-sizing: border-box;
    padding-right: getVW(38);
    padding-top: getVW(23);
    text-align: right;

    span{
      position: relative;
      display: inline-block;
      vertical-align: top;
      width: getVW(30);
      height: getVW(30);
      margin-left: getVW(20);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      cursor: pointer;

      &.twitter{ background-image: url(../../assets/icon_share0.png); }
      &.fb{ background-image: url(../../assets/icon_share1.png); }
      &.google{ background-image: url(../../assets/icon_share2.png); }
      &.ig{ background-image: url(../../assets/icon_share3.png); }
      &.line{ background-image: url(../../assets/icon_share4.png); }
    }
  }

  .copyright{
    @include r;
    @include fontvw(14,14,#c5c5c5);
    text-align: right;
    box-sizing: border-box;
    padding-right: getVW(80);
    margin-top: getVW(140);
    margin-bottom: getVW(40);
  }
}

//mobile
$vpw:768;
$vph:1200;
@media screen and (max-width: 1199px) {
footer{
  @include r;
  border-top: getVW(20) solid #006f37;
  background-color: #535353;
  box-sizing: border-box;
  padding-left: getVW(56);
  padding-top: getVW(150);

  .unit{
    @include r;
    width: getVW(215);
    margin-right: getVW(30);

    &:nth-child(2){
      width: getVW(460);
      margin-right: 0;
    }

    .title{
      @include r;
      @include fontvw(37,37,#d9d9d9);
      box-sizing: border-box;
      padding-bottom: getVW(10);
      border-bottom: getVW(2) solid #fff;
      margin-bottom: getVW(18);
    }

    ul{
      @include r;

      li{
        @include r;
        @include fontvw(30,50,#afafaf);

        &.bt{ cursor: pointer; }
      }
    }
  }

  .socialbox{
    @include artvw(300,auto);
    box-sizing: border-box;
    padding-right: getVW(38);
    padding-top: getVW(50);
    text-align: right;

    span{
      position: relative;
      display: inline-block;
      vertical-align: top;
      width: getVW(30);
      height: getVW(30);
      margin-left: getVW(20);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      cursor: pointer;

      &.twitter{ background-image: url(../../assets/icon_share0.png); }
      &.fb{ background-image: url(../../assets/icon_share1.png); }
      &.google{ background-image: url(../../assets/icon_share2.png); }
      &.ig{ background-image: url(../../assets/icon_share3.png); }
      &.line{ background-image: url(../../assets/icon_share4.png); }
    }
  }

  .copyright{
    @include r;
    @include fontvw(30,30,#c5c5c5);
    text-align: left;
    letter-spacing: getVW(1);
    box-sizing: border-box;
    padding-left: getVW(245);
    margin-top: getVW(165);
    margin-bottom: getVW(60);
  }
}
}
</style>
