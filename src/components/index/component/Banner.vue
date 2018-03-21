<template lang="pug">
section.banner.swiper-container
  .swiper-wrapper
    .photo.swiper-slide(
      v-for="(i, idx) in photos"
      :class="`photo${idx}`"
    )
      .text
        .ch(
          v-if="language.chinese"
          v-html="i.ch")
        .ch(
          v-if="language.english"
          v-html="i.chEn")
        .en(v-html="i.en")
      img(:src="i.url")
  .swiper-pagination
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Banner',
  data() {
    return {
      mySwiper: null,
    };
  },
  computed: {
    ...mapState({
      loadingShow: state => state.loadingShow,
      photos: state => state.banner.photos,
      language: state => state.language,
    }),
  },
  mounted() {
    this.mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      effect: 'fade',
      speed: 1500,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  },
  methods: {
    ...mapMutations(['changeStateKeyValue']),
  },
};
</script>

<style>
.banner .swiper-pagination .swiper-pagination-bullet{ 
  background: #c9c9ca; 
  opacity: 1;
}

.banner .swiper-pagination .swiper-pagination-bullet-active{ 
  background: #727171; 
  opacity: 1;
}
</style>

<style lang="scss" scoped>
//desktop
$vpw:1920;
$vph:1080;
.banner{
  @include r;
  height: 860px;
  margin-top: getVW(108);
  overflow: hidden;

  .text{
    @include alt(auto,auto,50%,50%);
    
    .ch{
      @include fontvw(22,50,#fff);
      letter-spacing: getVW(4);
      margin-bottom: getVW(10);
    }

    .en{
      @include fontvw(14,24,#fff);
      letter-spacing: getVW(6);
      font-family: 'Myriad Pro';
    }
  }
  
  .photo0 .text{
    margin-top: getVW(-300);
    margin-left: getVW(-104);
  }

  .photo1 .text{
    margin-top: getVW(-220);
    margin-left: getVW(250);
  }

  .photo2 .text{
    margin-top: getVW(-290);
    margin-left: getVW(250);
  }

  .photo3 .text{
    margin-top: getVW(-270);
    margin-left: getVW(194);
  }

  .photo4 .text{
    margin-top: getVW(-314);
    margin-left: getVW(-160);
  }

  .photo5 .text{
    margin-top: getVW(-350);
    margin-left: getVW(-104);

    .ch, .en{ color: #494949; }
  }

  .swiper-pagination{
    width: auto;
    text-align: right;
    bottom: 0;
    right: 50px;
  }
}

//mobile
$vpw:768;
$vph:1200;
@media screen and (max-width: 1199px) {
.banner{
  @include r;
  height: getVW(815);
  margin-top: getVW(160);
  overflow: hidden;

  .photo{
    width: 100%;
    height: getVW(768);
    overflow: hidden;

    img{
      @include alt(auto,100%,50%);
      transform: translateX(-50%);
      z-index: 0;
    }
  }

  .text{
    @include alt(auto,auto,50%,50%);
    z-index: 9;
    
    .ch{
      @include fontvw(22,50,#fff);
      letter-spacing: getVW(4);
      margin-bottom: getVW(10);
    }

    .en{
      @include fontvw(14,24,#fff);
      letter-spacing: getVW(6);
      font-family: 'Myriad Pro';
    }
  }
  
  .photo0{
    .text{
      margin-top: getVW(-330);
      margin-left: getVW(-208);
    }

    img{
      margin-left: getVW(-150);
    }
  }

  .photo1{
    .text{
      margin-top: getVW(-310);
      margin-left: getVW(85);
    }

    img{
      margin-left: getVW(-50);
    }
  }

  .photo2{
    .text{
      margin-top: getVW(-320);
      margin-left: getVW(70);
    }

    img{
      margin-left: getVW(-70);
    }
  }

  .photo3{
    .text{
      margin-top: getVW(-300);
      margin-left: getVW(80);
    }

    img{
      margin-left: getVW(-100);
    }
  }

  .photo4{
    .text{
      margin-top: getVW(-315);
      margin-left: getVW(-300);
    }

    img{
      margin-left: getVW(-50);
    }
  }

  .photo5{
    .text{
      margin-top: getVW(-345);
      margin-left: getVW(-230);

      .ch, .en{ color: #494949; }
    }

    img{
      margin-left: getVW(20);
    }
  }

  .swiper-pagination{
    width: auto;
    text-align: right;
    bottom: 0;
    right: getVW(50);
  }
}
}
</style>
