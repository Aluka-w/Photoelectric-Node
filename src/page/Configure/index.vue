<template>
  <div id="ConfigWrapper">
    <router-view id="ConfigLists"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: ''
    }
  },
  methods: {

  }
}
</script>

<style  lang='scss'>
  @import '../../assets/css/utils.scss';
  #ConfigWrapper {
    width: 100%;
    height: 100%;
    #ConfigLists {
      @include box(100%, 100%, transparent);
      .el-tabs {
        @include box(100%, 100%, transparent);
        background: url('../../assets/image/chart_part1_bg.png') no-repeat center center;
        background-size: 100% 100%;
        border: 0;
        padding: 20px 0px;
        .el-tabs__header {
          background: transparent;
          border: 0;
        }
        .el-tabs__nav-wrap {
          .el-tabs__item {
            background: transparent;
            border: 0;
          }
        }
      }
    }
  }
</style>
