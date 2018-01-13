export default {
  namespaced: true,
  state: {
    items: [
      '裝潢用材料',
      '模板用材料',
      '代加工備料',
      '傢俱用材料',
      '包裝用材料',
      '特殊訂製品',
    ],
    products: [
      {
        name: '夾板',
        open: false,
        height: 0,
        items: [
          '印尼夾板',
          '馬來西亞夾板',
          '大陸夾板',
          '波麗夾板',
          '防火夾板',
          '地板',
          '雷射板',
          '彎曲板',
          '模板',
          '補模用夾板',
          '機械模夾板',
          '抽牆板',
        ],
      },
      {
        name: '木心板',
        open: false,
        height: 0,
        items: [
          '麻六甲木心板',
          '柳安木心板',
          '波麗木心板',
          '防火木心板',
        ],
      },
      {
        name: '角材',
        open: false,
        height: 0,
        items: [
          '層積角材',
          '紅膠環保角材',
          '防火角材',
          '防腐角材',
        ],
      },
      {
        name: '木製品',
        open: false,
        height: 0,
        items: [
          '紐西蘭松木',
          '南方松防腐材',
          '門斗',
          '門片',
        ],
      },
      {
        name: '人造板',
        open: false,
        height: 0,
        items: [
          '角柱',
          '密迪板',
          '塑合板',
        ],
      },
      {
        name: '防火板',
        open: false,
        height: 0,
        items: [
          '矽酸鈣板',
          '石膏板',
          '水泥板',
        ],
      },
      {
        name: '其他材料',
        open: false,
        height: 0,
        items: [
          'PVC發泡板',
          '美耐板',
          '防潮布',
          '隔熱吸音棉捲',
          'PP瓦楞板',
        ],
      },
    ],
  },
  mutations: {
    changeProductsValue(state, { idx, key, value }) {
      state.products[idx][key] = value;
    },
  },
  getters: {

  },

  actions: {

  },
};
