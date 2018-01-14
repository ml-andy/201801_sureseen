<template lang="pug">
section.product
  h1 Product
  h2 
    |產品種類豐富，為您嚴格把關每個細節
  .photo
    img(src="../../../assets/product_photo0.jpg")
  .unit
    .left-side A
    .right-side
      .title
        .ch 營業項目
        .en Business Project
      .items
        .item(v-for="i in items") {{ i }}
  .unit
    .left-side B
    .right-side
      .title
        .ch 產品內容
        .en Product List
      .produts
        .product(v-for="(i,idx) in products")
          .name(@click="openProduct(idx)")
            span.number {{ idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}}
            |{{ i.name }}
            .ctrl(:class="i.open ? 'on' : ''")
              span.vertical
              span.horizontal
          .content(:style="{ height: i.height +'px'}")
            ul(ref="productContent")
              li(v-for="d in i.items") {{ d }}

</template>

<script>
import { mapState, mapMutations } from 'vuex';
import $ from 'jquery';

export default {
  name: 'Product',
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      loadingShow: state => state.loadingShow,
      items: state => state.product.items,
      products: state => state.product.products,
    }),
  },
  mounted() {

  },
  methods: {
    ...mapMutations(['changeStateKeyValue']),
    ...mapMutations('product', ['changeProductsValue']),
    openProduct(idx) {
      this.changeProductsValue({
        idx,
        key: 'height',
        value: !this.products[idx].open ? $(this.$refs.productContent[idx]).outerHeight(true) : 0,
      });

      this.changeProductsValue({
        idx,
        key: 'open',
        value: !this.products[idx].open,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
//desktop
$vpw:1920;
$vph:1080;
section.product{
  @include r;
  box-sizing: border-box;
  padding: 0 getVW(100);
  
  h1{
    @include r;
    @include fontvw(42,42,#006f37,bolder);
    margin-bottom: getVW(30);
    font-family: 'Arial';
  }

  h2{
    @include r;
    @include fontvw(24,24,#5c5c5c);
    margin-bottom: getVW(30);
    letter-spacing: getVW(2);
  }

  .photo{
    @include r;
    width: calc(100% + #{getVW(200)});
    margin-left: getVW(-100);
    margin-bottom: getVW(66);

    img{ width: 100%; }
  }

  .unit{
    @include r;
    box-sizing: border-box;
    padding-right: getVW(365);
    margin-bottom: getVW(60);

    .left-side{
      @include altvw(40,100);
      @include fontvw(28,28,#006f37,bolder);
      font-family: 'Arial';
      z-index: 1;
    }

    .right-side{
      @include r;
      box-sizing: border-box;
      padding-left: getVW(40);

      .title{
        @include r;
        
        .ch{
          @include fontvw(19,28,#5c5c5c);
          letter-spacing: getVW(2);
          display: inline-block;
          vertical-align: top;
          margin-right: getVW(10);
        }

        .en{
          @include fontvw(14,14,#5c5c5c);
          font-family: 'Myriad Pro';
          letter-spacing: getVW(2);
          display: inline-block;
          vertical-align: top;
          margin-top: getVW(10);
        }
      }

      .items{
        @include r;
        margin-top: getVW(10);
        padding-top: getVW(15);

        &:after{
          content: "";
          @include alt(100%,3px);
          background-color: #006f37;
        }

        .item{
          @include r(33%);
          @include fontvw(16,16,#5c5c5c);
          margin-bottom: getVW(20);
        }
      }

      .produts{
        @include r;
        margin-top: getVW(30);

        .product{
          @include r(48%);
          margin-right: 4%;
          margin-bottom: getVW(40);

          &:nth-child(2n){ margin-right: 0; }

          .name{
            @include r;
            @include fontvw(16,16,#5c5c5c);
            letter-spacing: getVW(2);
            padding-bottom: getVW(10);
            cursor: pointer;

            &:after{
              content: "";
              @include alb(100%,3px);
              background-color: #006f37;
            }

            .number{
              color: #006f37;
              margin-right: getVW(10);
              display: inline-block;
              vertical-align: top;
              font-family: 'Arial';
              font-weight: bolder;
            }

            .ctrl{
              @include art(auto,auto);

              &.on{
                .vertical{
                  opacity: 0;
                }
              }

              .vertical{
                @include art(3px,10px,16px,5px);
                background-color: #006f37;
                transition: 0.3s;
              }

              .horizontal{
                @include art(10px,3px,12px,9px);
                background-color: #006f37;
              }
            }
          }

          .content{
            @include r;
            box-sizing: border-box;
            margin-top: getVW(5);
            background-image: url(../../../assets/product_items_bg.jpg);
            background-repeat: repeat-y;
            background-size: 100% auto;
            background-position: center top;
            overflow: hidden;
            transition: 0.3s;

            ul{
              @include r;
              margin-top: getVW(15);
              margin-bottom: getVW(15);

              li{
                @include r;
                @include fontvw(14,28,#fff);;
                box-sizing: border-box;
                padding-left: getVW(30);
              }
            }
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
section.product{
  @include r;
  box-sizing: border-box;
  padding: 0 getVW(100);
  
  h1{
    @include r;
    @include fontvw(42,42,#006f37,bolder);
    margin-bottom: getVW(30);
    font-family: 'Arial';
  }

  h2{
    @include r;
    @include fontvw(24,24,#5c5c5c);
    margin-bottom: getVW(30);
    letter-spacing: getVW(2);
  }

  .photo{
    @include r;
    width: calc(100% + #{getVW(200)});
    margin-left: getVW(-100);
    margin-bottom: getVW(66);

    img{ width: 100%; }
  }

  .unit{
    @include r;
    box-sizing: border-box;
    padding-right: getVW(0);
    margin-bottom: getVW(60);

    .left-side{
      @include altvw(40,100);
      @include fontvw(28,28,#006f37,bolder);
      font-family: 'Arial';
      z-index: 1;
    }

    .right-side{
      @include r;
      box-sizing: border-box;
      padding-left: getVW(40);

      .title{
        @include r;
        
        .ch{
          @include fontvw(19,28,#5c5c5c);
          letter-spacing: getVW(2);
          display: inline-block;
          vertical-align: top;
          margin-right: getVW(10);
        }

        .en{
          @include fontvw(14,14,#5c5c5c);
          font-family: 'Myriad Pro';
          letter-spacing: getVW(2);
          display: inline-block;
          vertical-align: top;
          margin-top: getVW(10);
        }
      }

      .items{
        @include r;
        margin-top: getVW(10);
        padding-top: getVW(15);

        &:after{
          content: "";
          @include alt(100%,3px);
          background-color: #006f37;
        }

        .item{
          @include r(33%);
          @include fontvw(16,16,#5c5c5c);
          margin-bottom: getVW(20);
        }
      }

      .produts{
        @include r;
        margin-top: getVW(30);

        .product{
          @include r(48%);
          margin-right: 4%;
          margin-bottom: getVW(40);

          &:nth-child(2n){ margin-right: 0; }

          .name{
            @include r;
            @include fontvw(16,16,#5c5c5c);
            letter-spacing: getVW(2);
            padding-bottom: getVW(10);
            cursor: pointer;

            &:after{
              content: "";
              @include alb(100%,3px);
              background-color: #006f37;
            }

            .number{
              color: #006f37;
              margin-right: getVW(10);
              display: inline-block;
              vertical-align: top;
              font-family: 'Arial';
              font-weight: bolder;
            }

            .ctrl{
              @include art(auto,auto);

              &.on{
                .vertical{
                  opacity: 0;
                }
              }

              .vertical{
                @include art(3px,10px,16px,5px);
                background-color: #006f37;
                transition: 0.3s;
              }

              .horizontal{
                @include art(10px,3px,12px,9px);
                background-color: #006f37;
              }
            }
          }

          .content{
            @include r;
            box-sizing: border-box;
            margin-top: getVW(5);
            background-image: url(../../../assets/product_items_bg.jpg);
            background-repeat: repeat-y;
            background-size: 100% auto;
            background-position: center top;
            overflow: hidden;
            transition: 0.3s;

            ul{
              @include r;
              margin-top: getVW(15);
              margin-bottom: getVW(15);

              li{
                @include r;
                @include fontvw(14,28,#fff);;
                box-sizing: border-box;
                padding-left: getVW(30);
              }
            }
          }
        }
      }
    }
  }
}
}
</style>
