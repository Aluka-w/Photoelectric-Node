<template>
  <div id="live">
    <div class="live_left">
      <div class="live_header">
        <div class="live_header_left">
          <span :class="bitStream ? 'bitStream' : ''">{{ bitStream ? '主码流: ' : '辅码流: '}}</span>
          <el-switch
            v-model="bitStream"
            active-color="#409EFF"
            inactive-color="#ccc">
          </el-switch>
        </div>
        <div class="live_header_right">
          <!-- <el-button type="primary" size="medium" plain>图像调节</el-button> -->
          <router-link to="/Configure/Image/manageImage"></router-link>
        </div>
      </div>
      <VideoWrapper />
    </div>
    <div class="live_right">

    </div>
  </div>
</template>

<script>
import VideoWrapper from '../components/VideoWrapper'
export default {
  data () {
    return {
      bitStream: true
    }
  },
  components: {
    VideoWrapper
  },
  methods: {

  }
}
</script>

<style  lang='scss' scoped>
  @import '../assets/css/utils.scss';
  #live {
    width: 100%;
    height: 746px;
    overflow: hidden;
    .live_left {
      @include box(1150px, 100%, '');
      @include box_position(relative, 0, 0);
      float: left;
      margin-left: 10px;
      .live_header {
        overflow: hidden;
        @include box_position(relative, 0, 0);
        padding: 0px 10px 0px 20px;
        z-index: 1;
        .live_header_left {
          float: left;
          margin-top: 10px;
          color: $mian_word_color;
          .bitStream {
            color: $mian_word_active_color;
          }
        }
        .live_header_right {
          float: right;
            @include box_position(relative, 0px, 0px);
          a {
            color: $mian_word_active_color;
            @include box(155px, 54px, '');
            // @include box_position(absolute, -155px, 0px);
            display: block;
            background: url('../assets/image/changeView.png');
            background-size: cover;
            text-align: center;
          }
        }
      }
    }
    .live_right {
      float: right;
      @include box(200px, 100%, '')
    }
}
</style>
