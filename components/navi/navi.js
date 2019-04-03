// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'...',
    },
    latest:{
      type:Boolean,
      value:false,
    },
    first:{
      type:Boolean,
      value:false,
    }
  },
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    highLeftSrc: 'images/triangle@left.png'
  },
  methods: {
    onLeft:function(){
      if(!this.properties.latest){
        this.triggerEvent('left', {}, {})
      }
    },
    onRight:function(){
      if(!this.properties.first){
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
