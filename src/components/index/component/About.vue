<template lang="pug">
section.about
  .left-side
    h1 About
    h2 
      |進口來自世界的木建材供應商
      br
      |─  樹欣企業
    .vd
      .cover(
        @click="mainPlayer.playVideo()"
        :class="showVdCover ? 'on' : ''"
      )
      #player
    p
      |樹欣企業是專業木建材供應商，創立於西元1967年，延攬50年的木建材進口經驗，在台灣木建材材料業界具有領導地位，更是各大企業公司的指定品牌。樹欣橫跨18,219公里，從智利、印尼、馬來西亞、紐西蘭、泰國、中國、俄羅斯、美國等地進口各項品質優良的木建材、裝潢材料，不僅擁有自己數千坪的倉儲，更擁有經驗豐富、高效率的工作團隊。從倉儲備貨、庫存管理一直到包裝運輸，秉持專業服務的精神與科學管理的方式，迅速提供多樣優質的產品，滿足每位客戶的需求。讓各種建材、材料最後以完全不同的姿態呈現於世人，滿足了人們的需求、精采了人們的生活。
      br
      br
      |面對全球市場快速地劇變，樹欣積極檢視市場需求、挑戰市場變化、開發創新與尋找替代產品，持續向前邁進，為台灣木建材產業與世界接軌。50年來，樹欣由小型建材行蛻變為木建材代理進口商，持續贏得建築裝潢、包裝材料、家具等產業客戶的信賴與支持。我們努力實踐「取之於社會、用之於社會、樹立標竿、欣然回饋」的理念，將繼續朝向國際化、精緻化的方向發展，不辜負客戶的信賴與市場的需求，持續扮演台灣木建材產業領導的角色。

  .right-side
    section.features
      .feature
        .icon.i0
        h1 材料齊全、經驗豐富
        .des
          span.number 40
          |種進口木材、裝潢材料
          br
          span.number 50
          |年木建材供應服務經驗
        .photo
          img(src="../../../assets/about_photo0.jpg")
      .feature
        .icon.i1
        h1 各地據點、倉儲充足
        .des
          |台北、台中、高雄倉儲總面積
          br
          |達
          span.number 7000
          |坪
          br
          |月平均庫存量
          span.number 45,000
          |立方米
        .photo
          img(src="../../../assets/about_photo1.jpg")
      .feature
        .icon.i2
        h1 持續更新、世界同步
        .des
          |每月從世界各地進口 
          br
          span.number 200
          |個貨櫃
        .photo
          img(src="../../../assets/about_photo2.jpg")
      .feature
        .icon.i3
        h1 導入科學、系統管理
        .des
          |導入科學 ERP 管理系統
          br
          |進行倉儲庫存管理
        .photo
          img(src="../../../assets/about_photo3.jpg")
      
    
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import $ from 'jquery';

export default {
  name: 'About',
  data() {
    return {
      mainPlayer: null,
      showVdCover: true,
      alreadyStart: false,
    };
  },
  computed: {
    ...mapState({
      loadingShow: state => state.loadingShow,
    }),
  },
  mounted() {
    $(window).on('load', this.creatVideo);
  },
  methods: {
    ...mapMutations(['changeStateKeyValue']),
    creatVideo() {
      this.mainPlayer = new YT.Player(
        'player',
        {
          height: '100%',
          width: '100%',
          videoId: 'idKh-rc0Zz8',
          playerVars: {
            controls: 0,
            autoplay: false,
            enablejsapi: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            cc_load_policy: 1,
            playsinline: 1,
          },
          events: {
            onReady: () => {
              this.mainPlayer.pauseVideo();
            },
            onStateChange: this.vdStateChange,
          },
        },
      );
    },
    vdStateChange(event) {
      if (event.data !== 1) this.showVdCover = true;
      else this.showVdCover = false;
    },
  },
};
</script>

<style lang="scss" scoped>
//desktop
$vpw:1920;
$vph:1080;
.about{
  @include r;
  box-sizing: border-box;
  padding: getVW(70);

  .left-side{
    @include alt;
    left: getVW(70);
    width: getVW(300);
    top: getVW(70);
    height: calc(100% - #{getVW(70)});
    box-sizing: border-box;
    padding-left: getVW(30);
    z-index: 1;

    h1{
      @include r;
      @include fontvw(42,42,#006f37,bolder);
      font-family: 'Arial';
      margin-bottom: getVW(40);
    }

    h2{
      @include r;
      @include fontvw(20,38,#5c5c5c);
      margin-bottom: getVW(20);
    }

    .vd{
      @include altvw(674,379,100,0,84);
      left: 100%;

      .cover{
        @include alt;
        z-index: 9;
        pointer-events: none;
        opacity: 0;
        background-image: url(../../../assets/btn_videoplay.png);
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;

        &.on{
          opacity: 1;
          pointer-events: auto;
        }
      }

      #player{
        z-index: 0;
      }
    }

    p{
      @include r;
      @include fontvw(14,24,#5c5c5c);
      text-align: justify;
    }
  }

  .right-side{
    @include r;
    box-sizing: border-box;
    padding-left: getVW(384);
    z-index: 0;

    .features{
      @include r;
      margin-top: getVW(440);

      .feature{
        @include r(49%);
        margin-right: 2%;
        margin-bottom: getVW(55);

        &:nth-child(2n){
          margin-right: 0;
        }

        .icon{
          @include r;
          height: getVW(59);
          margin-bottom: getVW(8);
          background-repeat: no-repeat;
          background-position: center center;

          &.i0{ background-image: url(../../../assets/icon_about0.png); }
          &.i1{ background-image: url(../../../assets/icon_about1.png); }
          &.i2{ background-image: url(../../../assets/icon_about2.png); }
          &.i3{ background-image: url(../../../assets/icon_about3.png); }
        }

        h1{
          @include r;
          @include fontvw(19,19,#5c5c5c);
          box-sizing: border-box;
          padding: 0 getVW(50);
          padding-bottom: getVW(10);
          margin-bottom: getVW(30);
          text-align: center;

          &:after{
            content: "";
            @include alb(100%,1px);
            width: calc(100% - #{getVW(100)});
            left: getVW(50);
            background-color: #a0a0a0;
            z-index: 1;
          }
        }

        .des{
          @include r;
          @include fontvw(14,24,#5c5c5c);
          min-height: getVW(100);
          text-align: center;

          .number{
            @include fontvw(33,33,#006f37,bolder);
            font-family: 'Arial';
            display: inline-block;
            vertical-align: top;
            margin: 0 getVW(10);
          }
        }

        .photo{
          @include r;

          img{
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}

//mobile
$vpw:768;
$vph:1200;
@media screen and (max-width: 1199px) {
.about{
  @include r;
  box-sizing: border-box;
  padding: getVW(60);

  .left-side{
    @include r;
    left: getVW(0);
    top: getVW(0);
    box-sizing: border-box;
    padding-left: getVW(0);
    z-index: 1;

    h1{
      @include r;
      @include fontvw(50,50,#006f37,bolder);
      font-family: 'Arial';
      margin-bottom: getVW(40);
    }

    h2{
      @include r;
      @include fontvw(37,50,#5c5c5c);
      margin-bottom: getVW(20);
    }

    .vd{
      @include rvw(100,364);
      width: 100%;
      left: 0%;
      top: 0;
      margin-left: 0;
      margin-bottom: getVW(50);
      
      .cover{
        @include alt;
        z-index: 9;
        pointer-events: none;
        opacity: 0;
        background-image: url(../../../assets/btn_videoplay.png);
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;

        &.on{
          opacity: 1;
          pointer-events: auto;
        }
      }

      #player{
        z-index: 0;
      }
    }

    p{
      @include r;
      @include fontvw(30,50,#5c5c5c);
      text-align: justify;
    }
  }

  .right-side{
    @include r;
    box-sizing: border-box;
    padding-left: getVW(0);
    z-index: 0;

    .features{
      @include r;
      margin-top: getVW(70);

      .feature{
        @include r(100%);
        margin-right: 0%;
        margin-bottom: getVW(55);

        &:nth-child(2n){
          margin-right: 0;
        }

        .icon{
          @include r;
          height: getVW(59);
          margin-bottom: getVW(8);
          background-size: auto getVW(52);
          background-repeat: no-repeat;
          background-position: center center;

          &.i0{ background-image: url(../../../assets/icon_about0.png); }
          &.i1{ background-image: url(../../../assets/icon_about1.png); }
          &.i2{ background-image: url(../../../assets/icon_about2.png); }
          &.i3{ background-image: url(../../../assets/icon_about3.png); }
        }

        h1{
          @include r;
          @include fontvw(37,37,#5c5c5c);
          box-sizing: border-box;
          padding: 0;
          padding-bottom: getVW(10);
          margin-bottom: getVW(30);
          text-align: center;

          &:after{
            content: "";
            @include alb(100%,1px);
            width: calc(100% - #{getVW(100)});
            left: getVW(50);
            background-color: #a0a0a0;
            z-index: 1;
          }
        }

        .des{
          @include r;
          @include fontvw(30,50,#5c5c5c);
          min-height: getVW(100);
          text-align: center;
          margin-bottom: getVW(30);

          .number{
            @include fontvw(37,37,#006f37,bolder);
            font-family: 'Arial';
            display: inline-block;
            vertical-align: top;
            margin: 0 getVW(10);
          }
        }

        .photo{
          @include r;

          img{
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}
}
</style>
