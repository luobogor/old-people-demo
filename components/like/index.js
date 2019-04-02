import { LikeModel } from '../../models/like.js';

const likeModel = new LikeModel();

Component({
  properties: {
    like: Boolean,
    count: Number,
    readOnly: Boolean,
  },

  data: {
    yesUrl: 'images/like.png',
    noUrl: 'images/like@dis.png'
  },

  methods: {
    onLike(event) {
      if (this.properties.readOnly) {
        return;
      }
      let { count } = this.properties;
      count = this.properties.like ? count - 1 : count + 1;
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
