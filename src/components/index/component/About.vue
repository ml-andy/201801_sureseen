<template lang="pug">
section.about
  .left-side
    h1 About
    h2(v-if="language.chinese")
      |引進世界各地木建材供應商
      br
      |─  樹欣企業
    h2(v-else-if="language.english")
      |Introducing a Global Construction Material Supplier
      br
      |─  Sureseen Enterprise
    .vd
      .cover(
        @click="mainPlayer.playVideo()"
        :class="showVdCover ? 'on' : ''"
      )
      #player
    p(v-if="language.chinese")
      |樹欣企業是專業木建材供應商，創立於西元1967年，延攬50年的木建材進口經驗，在台灣木建材材料業界具有領導地位。樹欣橫跨18,219公里，從智利、印尼、馬來西亞、紐西蘭、泰國、中國、俄羅斯、美國等地進口各項品質優良的木建材、裝潢材料，不僅擁有自己的倉儲，更擁有經驗豐富、高效率的工作團隊。從倉儲備貨、庫存管理一直到包裝運輸，秉持專業服務的精神與科學管理的方式，迅速提供多樣優質的產品，滿足每位客戶的需求。讓各種建材、材料結合品味與趨勢，融入每個角落、精彩了人們的生活。
      br
      br
      |面對全球市場快速地劇變，樹欣主動檢視市場需求、挑戰市場變化、積極開發、創新替代的產品，持續向前邁進，為台灣木建材產業與世界接軌、做出貢獻。50年來，樹欣由小型建材行蛻變為木建材代理進口商，持續贏得建築裝潢、包裝材料、家具等產業客戶的信賴與支持，努力實踐「樹立標竿、欣然回饋」的理念，繼續朝向國際化、精緻化的方向發展，持續扮演台灣木建材產業領導的角色。
    p(v-else-if="language.english")
      |Founded in 1967, Sureseen Enterprise is a professional provider of wooden construction materials. With 50 years of experience in importing wooden construction materials, the company holds a leading position in Taiwan’s wooden construction material industry. Sureseen imports a variety of high-quality wooden construction and furnishing materials from countries including Chile, Indonesia, Malaysia, New Zealand, Thailand, China, Russia, and the United States, covering 18,219km. The company has not only its own storage space, but it also has rich experience and a highly efficient team. From material preparation and inventory management to packaging and transporting, the company upholds a spirit of professional service and a scientific management methodology to provide a variety of top-quality products that satisfy each customer’s demands in a timely manner. Each type of construction and furnishing material is tasteful and follows the latest trends, fitting into every corner of the world and lightning up people’s lives.
      br
      br
      |Facing the dramatic changes in the global market, Sureseen has actively observed market demands and taken on challenges in the dynamic market. The company has been vigorous in the development and innovation of substitute products and has continuously contributed to the wooden construction material industry at home in Taiwan and around the world. In the last 50 years, Sureseen has transformed from a small-scale construction material company to an importer of wooden construction material and has won the trust and support of customers in the construction, furnishing, packaging, and furniture industries. We have striven to put into practice the principle of “establishing the benchmark, giving back with joy” and continue with globalized and detail-oriented development as we maintain the leading position in Taiwan’s wooden construction material industry.
  .right-side
    section.features(v-if="language.chinese")
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
    section.features(v-else-if="language.english")
      .feature
        .icon.i0
        h1 Abundant in materials, rich in experience.
        .des.en
          span.number 40
          |types of imported wood and 
          br
          |furnishing materials
          br
          br
          span.number 50
          |years of experience in the supply 
          br
          |of construction material
        .photo
          img(src="../../../assets/about_photo0.jpg")
      .feature
        .icon.i1
        h1 Multiple locations, sufficient storage space
        .des.en
          |The total storage spaces including Taipei, Taichung, and Kaohsiung is
          br
          span.number 23,140
          |square meter
          br
          |The average monthly stock volume is
          span.number 45,000
          |cubic meter
        .photo
          img(src="../../../assets/about_photo1.jpg")
      .feature
        .icon.i2
        h1 Continuous innovation, synchronizing with the rest of the world
        .des.en
          |Monthly global import of
          br
          span.number 200
          |containers
        .photo
          img(src="../../../assets/about_photo2.jpg")
      .feature
        .icon.i3
        h1 The application of Scientific, systematic management
        .des.en
          |The application of Scientific 
          br
          |ERP management system
          br
          |Performing Storage space 
          br
          |and stock management
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
      videoId: {
        chinese: 'idKh-rc0Zz8',
        english: 'qLQ61cv_C_4',
      },
    };
  },
  computed: {
    ...mapState({
      loadingShow: state => state.loadingShow,
      language: state => state.language,
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
          videoId: this.videoId.chinese,
          playerVars: {
            controls: 0,
            autoplay: 0,
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
  watch: {
    language: {
      handler(e) {
        Object.keys(e).forEach((key) => {
          if (this.language[key]) {
            this.mainPlayer.loadVideoById(this.videoId[key]);
            this.mainPlayer.stopVideo();
          }
        });
      },
      deep: true,
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
      text-align: left;
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

          &.en{
            min-height: getVW(150);
          }

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
      text-align: left;
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

          &.en{
            min-height: getVW(150);
          }

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
