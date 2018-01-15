<template lang="pug">
section.company
  h1 Company base
  h2(v-if="language.chinese") 全台據點為您服務
  h2(v-else-if="language.english") With locations all over Taiwan
  .stores(v-if="language.chinese")
    .welcome
      |We glad to 
      br
      |serve you,welcome 
      br
      |to
      br
      |contact us
    .store
      |<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.035455792976!2d121.44950691554425!3d25.066787383957003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a89b86e73579%3A0xceec910730164a4a!2zMjQ45paw5YyX5biC5LqU6IKh5Y2A5LqU5qyK5YWt6LevMzXomZ8!5e0!3m2!1szh-TW!2stw!4v1515824877299" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      .title 台北總公司
      .addr 新北市五股區五權六路35號4樓
      .tel 電話：02-22992726 (代表號)
      .fax 傳真：02-22992960
      .email 服務信箱：wuku37@sureseen.com.tw
    .store
      |<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.035455792976!2d121.44950691554425!3d25.066787383957003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a89b86e73579%3A0xceec910730164a4a!2zMjQ45paw5YyX5biC5LqU6IKh5Y2A5LqU5qyK5YWt6LevMzXomZ8!5e0!3m2!1szh-TW!2stw!4v1515825058778" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      .title 五股分公司
      .addr 新北市五股區五權六路35號
      .tel 電話：02-22992721(代表號)
      .fax 傳真：02-22993964
    .store
      |<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.4735397423487!2d120.61128891553143!3d24.225211184357363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469142c12ebb89f%3A0x7eb8ca2d52a33b6a!2zNDI46Ie65Lit5biC5aSn6ZuF5Y2A5p2x5aSnIOi3rzcwN-iZnw!5e0!3m2!1szh-TW!2stw!4v1515825170840" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      .title 台中分公司
      .addr 台中市大雅區東大路二段707號
      .tel 電話：04-25660476(代表號)
      .fax 傳真：04-25660478
    .store
      |<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.2607690275072!2d120.42751545382714!3d22.57897549588028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1c06a32d3cbd%3A0xb9b315a0b1ed79ef!2z5qi55qyj5LyB5qWt6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1516020241066" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      .title 高雄分公司
      .addr 高雄市大寮區華中路21號
      .tel 電話：07-7875060(代表號)
      .fax 傳真：07-7875438
  .stores(v-else-if="language.english")
    .welcome
      |We glad to 
      br
      |serve you,welcome 
      br
      |to
      br
      |contact us
    .store.en
      |<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14456.140570361167!2d121.451681!3d25.066798!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a89b86e73579%3A0xceec910730164a4a!2sNo.+35%2C+Wuquan+6th+Road%2C+Wugu+District%2C+New+Taipei+City%2C+248!5e0!3m2!1sen!2stw!4v1516028964611" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      .title Taipei Headquarters
      .addr 4F., No.35, Wuquan 6th Rd., Wugu Dist., New Taipei City 248, Taiwan (R.O.C.)
      .tel TEL：02-22992726 (Rep. Line)
      .fax FAX：02-22992960
      .email EMAIL：wuku37@sureseen.com.tw
    .store.en
      |<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14456.140570361167!2d121.451681!3d25.066798!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a89b86e73579%3A0xceec910730164a4a!2sNo.+35%2C+Wuquan+6th+Road%2C+Wugu+District%2C+New+Taipei+City%2C+248!5e0!3m2!1sen!2stw!4v1516029001101" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      .title Wugu Branch
      .addr No.35, Wuquan 6th Rd., Wugu Dist., New Taipei City 248, Taiwan (R.O.C.)
      .tel TEL：02-22992721(Rep. Line)
      .fax FAX：02-22993964
    .store.en
      |<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14553.89418004006!2d120.613478!3d24.225211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469142c12ebb89f%3A0x7eb8ca2d52a33b6a!2sNo.+707%2C+Section+2%2C+Dongda+Road%2C+Daya+District%2C+Taichung+City%2C+428!5e0!3m2!1sen!2stw!4v1516029032355" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      .title Taichung Branch
      .addr No.707, Sec. 2, Dongda Rd., Daya Dist., Taichung City 428, Taiwan (R.O.C.)
      .tel TEL：04-25660476(Rep. Line)
      .fax FAX：04-25660478
    .store.en
      |<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3683.999340258578!2d120.428352!3d22.579128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9b315a0b1ed79ef!2z5qi55qyj5LyB5qWt6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2stw!4v1516029071685" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      .title Kaohsiung branch
      .addr No.21, Huazhong Rd., Daliao Dist., Kaohsiung City 831, Taiwan (R.O.C.)
      .tel TEL：07-7875060(Rep. Line)
      .fax FAX：07-7875438

      
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Company',
  data() {
    return {

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
    ...mapMutations(['changeStateKeyValue']),
  },
};
</script>

<style lang="scss" scoped>
//desktop
$vpw:1920;
$vph:1080;
section.company{
  @include r;
  
  h1{
    @include r;
    @include fontvw(42,42,#006f37,bolder);
    margin-bottom: getVW(30);
    font-family: 'Arial';
    box-sizing: border-box;
    padding: 0 getVW(100);
  }

  h2{
    @include r;
    @include fontvw(24,24,#5c5c5c);
    margin-bottom: getVW(30);
    letter-spacing: getVW(2);
    box-sizing: border-box;
    padding: 0 getVW(100);
  }

  .stores{
    @include r;

    .welcome{
      @include art(auto,auto);
      @include fontvw(16,36,#5c5c5c);
      letter-spacing: getVW(4);
      right: getVW(90);
      font-family: 'Myriad Pro';
      z-index: 1;
    }

    .store{
      @include r;
      width: getVW(412);
      margin-right: getVW(20);
      min-height: getVW(440);
      margin-bottom: getVW(80);

      &.en{ min-height: getVW(460); }

      iframe{
        @include r;
        height: getVW(250);
        margin-bottom: getVW(36);
        box-sizing: border-box;
        border: 1px solid #d6d6d6;
      }

      .title{
        @include r;
        @include fontvw(22,22,#5c5c5c);
        letter-spacing: getVW(2);
        margin-bottom: getVW(24);
        box-sizing: border-box;
        padding-left: getVW(40);
      }

      .addr, .tel, .fax, .email{
        @include r;
        @include fontvw(14,24,#5c5c5c);
        box-sizing: border-box;
        padding-left: getVW(40);
      }
    }
  }
}

//mobile
$vpw:768;
$vph:1200;
@media screen and (max-width: 1199px) {
section.company{
  @include r;
  
  h1{
    @include r;
    @include fontvw(50,50,#006f37,bolder);
    margin-bottom: getVW(30);
    font-family: 'Arial';
    box-sizing: border-box;
    padding: 0 getVW(100);
  }

  h2{
    @include r;
    @include fontvw(37,50,#5c5c5c);
    margin-bottom: getVW(30);
    letter-spacing: getVW(2);
    box-sizing: border-box;
    padding: 0 getVW(100);
  }

  .stores{
    @include r;
    box-sizing: border-box;
    padding: 0 getVW(30);
    padding-bottom: getVW(250);

    .welcome{
      @include alb(auto,auto);
      @include fontvw(30,50,#5c5c5c);
      top: auto;
      letter-spacing: getVW(4);
      right: auto;
      left: getVW(430);
      bottom: getVW(90);
      font-family: 'Myriad Pro';
      z-index: 1;
    }

    .store{
      @include r(100%);
      margin-right: 0;
      min-height: getVW(400);
      margin-bottom: getVW(80);

      &.en{ min-height: getVW(450); }

      &:nth-child(2n){ margin-right: 0%; }

      iframe{
        @include r;
        height: getVW(350);
        margin-bottom: getVW(36);
        box-sizing: border-box;
        border: 1px solid #d6d6d6;
      }

      .title{
        @include r;
        @include fontvw(37,50,#5c5c5c);
        letter-spacing: getVW(2);
        margin-bottom: getVW(24);
        box-sizing: border-box;
        padding-left: getVW(40);
      }

      .addr, .tel, .fax, .email{
        @include r;
        @include fontvw(30,50,#5c5c5c);
        box-sizing: border-box;
        padding-left: getVW(40);
      }
    }
  }
}
}
</style>
