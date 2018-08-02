<template>
  <div id="PlayBack">
    <div class="PlayBack_left">
      <VideoWrapper />
    </div>
    <div class="PlayBack_right">
      <el-date-picker
        v-model="selectDate"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
      <div class="video_download">录像下载</div>
      <div class="video_watch"></div>
    </div>
  </div>
</template>

<script>
import VideoWrapper from '../components/VideoWrapper'
export default {
  data () {
    return {
      selectDate: ''
    }
  },
  components: {
    VideoWrapper
  },
  methods: {

  }
}
</script>

<style  lang='scss'>
  @import '../assets/css/utils.scss';
  #PlayBack {
    @include box_position(relative, 0, 0);
    @include box(100%, 746px, '');
    .PlayBack_left {
      @include box(1150px, 100%, '');
      @include box_position(absolute, 0, 0);
      margin-left: 10px;
    }
    .PlayBack_right {
      @include box(220px, 100%, '');
      @include box_position_right(absolute, 20px, 0);
      .video_download{
        @include box(220px, 100%, '');
        @include box_position_right(absolute, 0px, 40px);
      }
      .video_watch {
        @include box(140px, 53px, '');
        @include box_position(absolute, 50%, 160px);
        transform: translateX(-50%);
        background: url('../assets/image/helmet-btn-readList.png');
        cursor: pointer;
      }
    }
}
</style>
