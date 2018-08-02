<template>
  <div id="videoWrapper" :class="isFullScreen ? 'fullScreen' : ''">
    <div class="videoItem">
      <!--  autoplay="autoplay" -->
      <video width="100%" height="100%" ref="media" src="/static/demo.mp4">
        您的浏览器不支持当前的播放器, 请下载最新浏览器
      </video>
      <canvas ref="screenshot" id="screenshot" width="1000px" height="540px" v-show="isScreenshot"></canvas>
    </div>
    <div :class="isFullScreen ? 'optionWrapper fullscreen': 'optionWrapper'">
      <div class="video_left">
        <i class="iconfont" @click="handlePlayOrPause">{{isPlay ? '&#xe79f;' : '&#xe774;'}}</i>
        <i class="iconfont" @click="handleVoiceOrQuiet">{{isVoice ? '&#xe74b;' : '&#xe64a;'}}</i>
        <el-slider v-model="voice" vertical height="200px" :disabled="!isVoice"  class="voice"></el-slider>
      </div>
      <div class="video_right">
        <i class="iconfont" @click="handleScreenshot">&#xe6df;</i>
        <i class="iconfont">&#xe64d;</i>
        <i class="iconfont" @click="handleFullScreen">{{!isFullScreen ? '&#xe61f;' : '&#xe758;'}}</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPlay: false,
      isVoice: true,
      isScreenshot: false,
      isFullScreen: false,
      voice: 90,
      Media: null
    }
  },
  mounted () {
    this.createdVideo()
    // 可以做兼容, 懒得做
    document.addEventListener('webkitfullscreenchange', () => {
      if (this.isFullScreen) {
        this.leaveFullScreen()
        this.isFullScreen = false
      } else {
        this.isFullScreen = true
      }
    })
  },
  watch: {
    voice: function (volume) {
      let val = volume / 100
      if (val > 0) {
        this.Media.volume = val
        this.Media.muted = false
        this.isVoice = true
      } else {
        this.Media.volume = val
        this.Media.muted = true
        this.isVoice = false
      }
    }
  },
  methods: {
    createdVideo () {
      this.Media = this.$refs.media
      this.Media.addEventListener('playing', function (e) {
        console.log(e)
      }, false)
    },
    // 暂停/播放
    handlePlayOrPause () {
      if (this.isPlay) {
        this.Media.pause()
        this.isPlay = false
      } else {
        this.Media.play()
        this.isPlay = true
      }
    },
    // 外放/静音
    handleVoiceOrQuiet () {
      this.isVoice = !this.isVoice
      this.Media.muted = !this.Media.muted
    },
    // 全屏/退出全屏
    handleFullScreen () {
      if (!this.isFullScreen) {
        this.enterFullScreen()
      } else {
        this.leaveFullScreen()
      }
    },
    enterFullScreen () {
      let ele = document.getElementById('videoWrapper')
      // 各个浏览器全屏的兼容
      if (ele.requestFullscreen) {
        ele.requestFullscreen()
      } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen()
      } else if (ele.webkitRequestFullScreen) {
        ele.webkitRequestFullScreen()
      }
    },
    leaveFullScreen () {
      let docu = document
      if (docu.exitFullscreen) {
        docu.exitFullscreen()
      } else if (docu.mozCancelFullScreen) {
        docu.mozCancelFullScreen()
      } else if (docu.webkitCancelFullScreen) {
        docu.webkitCancelFullScreen()
      }
    },
    // 截图
    handleScreenshot () {
      this.isScreenshot = true
      let ctx = this.$refs.screenshot.getContext('2d')
      ctx.drawImage(this.Media, 0, 0, 1000, 540)
      setTimeout(() => {
        this.isScreenshot = false
      }, 1000)
      // let base64 = this.$refs.screenshot.toDataURL('images/png')
      // console.log(base64)
    }
  }
}
</script>

<style  lang='scss' scoped>
  @import '../assets/css/utils.scss';
  #videoWrapper {
    @include box(1150px, 100%, #f4f5f7);
    @include box_shadow;
    @include box_position(absolute, 0px, 0px);
    &.fullScreen {
      @include box(100%, 100%, '');
    }
    background: url('../assets/image/video_defaultPhoto.png') no-repeat center center;
    background-size: cover;
    .videoItem {
      @include box(100%, 100%, '');
      @include box_position(relative, 0px, 0px);
      video {
        object-fit: fill;
        &::-webkit-media-controls-enclosure {
          /*禁用播放器控制栏的样式*/
          display: none !important;
        }
      }
      #screenshot {
        background-color: #ccc;
        @include box_position(absolute, 50%, 50%);
        transform: translate(-50%, -50%);
      }
    }
    .optionWrapper {
      @include box(100%, 50px, rgba(51, 51, 51, 0.4));
      @include box_position_bottom(absolute, 0px, 0px);
      color: $mian_word_color;
      cursor: pointer;
      &.fullscreen {
        @include box_position_bottom(absolute, 0px, 0px);
      }
      i {
        font-weight: 500;
        font-size: 25px;
        line-height: 46px;
        margin-left: 20px;
      }
      .video_left {
        float: left;
        padding-left: 20px;
        position: relative;
        &:hover {
          .voice {
            display: block;
          }
        }
        .voice {
          display: none;
          @include box_position(absolute, 83px, -200px)
        }
      }
      .video_right {
        float: right;
        padding-right: 20px;
      }
    }
  }
</style>
