// components/classic/music/music.js
import {
  classBehavior,
} from '../classic-beh.js'

let mMgr = wx.getBackgroundAudioManager();

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classBehavior],

  properties: {
    src: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    waittingUrl: 'images/player@waitting.png',
    playingUrl: 'images/player@playing.png'
  },

  attached() {
    this._monitorSwitch();
  },

  detached() {
    // wx.pauseBackgroundAudio()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay() {
      if (!this.data.playing) {
        this.setData({
          playing: true,
        });
        // 处理 mMgr ....
      } else {
        this.setData({
          playing: false,
        });
        // 处理 mMgr ....
      }
    },

    _monitorSwitch() {
      mMgr.onPlay(() => {
        this.onPlay();
      });
      mMgr.onPause(() => {
        this.onPlay();
      });
      mMgr.onStop(() => {
        this.onPlay();
      });
      mMgr.onEnded(() => {
        this.onPlay();
      });
    }
  }
});
