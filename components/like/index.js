// components/like/index.js
Component({
  properties: {
    like: Boolean,
    count: Number,
    readOnly: Boolean,
  },

  data: {
    yes_url: 'images/like.png',
    no_url: 'images/like@dis.png'
  },

  methods: {
    onLike(event) {
      if (this.properties.readOnly) {
        return;
      }
      let count = this.properties.count;
      count = this.properties.count;
      this.setData({
        count,
        like: !this.properties.like,
      });

      const behavior = this.properties.like ? 'like' : 'cancel';
      // 指定事件名、detail对象和事件选项
      this.triggerEvent('like', { behavior }, {});
    }
  }
});
