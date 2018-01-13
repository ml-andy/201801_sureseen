<template lang="pug">
  .wrapper.index
    Banner
    About
    Product
    Company
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Banner from '@/components/index/component/Banner';
import About from '@/components/index/component/About';
import Product from '@/components/index/component/Product';
import Company from '@/components/index/component/Company';

export default {
  name: 'Index',
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      loadingShow: state => state.loadingShow,
    }),
  },
  mounted() {

  },
  methods: {
    ...mapMutations(['changeStateKeyValue']),
  },
  components: {
    Banner,
    About,
    Product,
    Company,
  },
};
</script>

<style lang="scss" scoped>
//desktop
$vpw:1920;
$vph:1080;
.wrapper{
  @include r;
}

//mobile
$vpw:600;
$vph:1200;
@media screen and (max-width: 600px) {

}
</style>
