<template lang="pug">
section.banner.swiper-container
  .swiper-wrapper
    .photo.swiper-slide(
      v-for="(i, idx) in photos"
      :class="`photo${idx}`"
    )
      .text
        .ch(v-html="i.ch")
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
    }),
  },
  mounted() {
    this.mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
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
$vpw:600;
$vph:1200;
@media screen and (max-width: 600px) {

}
</style>
