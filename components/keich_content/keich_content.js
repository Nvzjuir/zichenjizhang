// components/keich_content/keich_content.js
require("../../utils/Binding.js");
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: Number,
      content: 0,
      dialog1: false,
      dialog2: false,
      result: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    live: [{
      text: '餐饮',
      img: "../../asstes/keich/canyin.png"
    }, {
      text: '服饰',
      img: "../../asstes/keich/fushi.png"
    }, {
      text: '购物',
      img: "../../asstes/keich/Group-.png"
    }, {
      text: '交通',
      img: "../../asstes/keich/jiaotong.png"
    }, {
      text: '零食',
      img: "../../asstes/keich/lingshi.png"
    }, {
      text: '日用',
      img: "../../asstes/keich/riyongpin.png"
    }, {
      text: '社交',
      img: "../../asstes/keich/shejiao.png"
    }, {
      text: '烟酒',
      img: "../../asstes/keich/yanjiu.png"
    }, {
      text: '娱乐',
      img: "../../asstes/keich/yule.png"
    }],
    income: [{
      text: '工资',
      img: "../../asstes/keich/gongzi.png"
    }, {
      text: '理财',
      img: "../../asstes/keich/32.png"
    }, {
      text: '兼职',
      img: "../../asstes/keich/jianzhi.png"
    }, {
      text: '礼金',
      img: "../../asstes/keich/lijin.png"
    }, {
      text: '游戏',
      img: "../../asstes/keich/youxi.png"
    }, {
      text: '其他',
      img: "../../asstes/keich/qita.png"
    }],
    input: "",
    num:0,
    dot:'.',
    puls:'+',
    sub:'-',
    zero:'0',
    header_mm: new Date().getMonth() + 1,
    header_dd: new Date().getDate(),
    header_yy: new Date().getFullYear(),
    remark:'',
    live_index: null,
    income_index: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindchange: function (e) {
      const that = this;
      that.setData({
        content: e.detail.current
      })
    },
  //点击我显示底部弹出框
  clickme: function (e) {
    wx.hideTabBar({})
    this.showModal();
    wx.setStorageSync('live', this.data.live);
    wx.setStorageSync('income', this.data.income);
    if (this.data.content == 0)
     this.setData({
       live_index: e.currentTarget.dataset.index
     })
    if (this.data.content == 1)
    this.setData({
      income_index: e.currentTarget.dataset.index
    })
  },

  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  calculate (e) {
    this.data.input = e.currentTarget.dataset.index + 1
    if (this.data.result == true)this.data.num = ''
    this.setData({
      num: this.data.num + this.data.input.toString(),
      result : false
    })
  },
  taprest (e) {
    let i = parseInt(e.target.dataset.current)
    switch (i){
      case 1:
        this.setData({
        num: this.data.num + this.data.puls,
        result: false
        })
      break
      case 2:
        this.setData({
        num: this.data.num + this.data.sub,
        result : false
        })
      break
      case 3:
        this.setData({
        num: this.data.num + this.data.dot,
        result : false
        })
      break
      case 4:
        this.setData({
        num: this.data.num + this.data.zero,
        result : false
        })
      break
      default:
      console.log("===")
      break
    }
  },
  tapempty () {
    this.setData({
      num: ''
    })
  },
  bindKeyInput (e) {
    this.setData({
      remark: e.detail.value
    })
    
  },
  tapsum () {
    this.setData ({
      num: wx.binding.eval(this.data.num),
      result :true
    })
    wx.setStorageSync('remark', this.data.remark);
    wx.setStorageSync('num', this.data.num);
    wx.setStorageSync('header_yy', this.data.header_yy);
    wx.setStorageSync('header_mm', this.data.header_mm);
    wx.setStorageSync('header_dd', this.data.header_dd);
    wx.setStorageSync('income_index', this.data.income_index);
    wx.setStorageSync('live_index', this.data.live_index);
    wx.setStorageSync('content', this.data.content);
    //隐藏对话框
    wx.showTabBar({})
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  bindDateChange (e) {
    this.setData({
      header_mm: e.detail.value.substr(5, 2),
      header_dd: e.detail.value.substr(8, 2),
      header_yy: e.detail.value.substr(0,4)
    })
  }
}})
