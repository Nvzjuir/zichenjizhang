// components/statistics_content/statistics_content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  pageLifetimes: {
    show: function () {
      this.setData({
        remark: wx.getStorageSync('remark'),
        num: wx.getStorageSync('num'),
        header_yy: wx.getStorageSync('header_yy'),
        header_mm: wx.getStorageSync('header_mm'),
        header_dd: wx.getStorageSync('header_dd'),
        live: wx.getStorageSync('live'),
        income_index: wx.getStorageSync('income_index'),
        live_index: wx.getStorageSync('live_index'),
        income: wx.getStorageSync('income'),
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    remark:'',
    num:0,
    header_yy:'',
    header_mm: '',
    header_dd: '',
    live:[],
    income_index:null,
    live_index:null,
    income:[],
    data:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    taplist() {
    },
  }
})
