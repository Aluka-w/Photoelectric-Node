<template>
  <div id="ConfigCard">
    <el-card class="box-card" style="width:480px" shadow="always">
      <div slot="header" class="clearfix card-header">
        <span>{{ConfigList.title}}</span>
      </div>
      <div v-for="item in ConfigList.ConfigItems" :key="item.id" class="text item">
        <span class="ConfigItemName">{{item.ConfigItemName}}</span>
        <span class="ConfigItemData">{{item.ConfigItemData}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: ''
    }
  },
  props: ['ConfigList'],
  methods: {

  }
}
</script>

<style  lang='scss'>
  @import '../assets/css/utils.scss';
  #ConfigCard {
    .box-card {
      background: transparent url('../assets/image/readRecard-contentBg-focus.png') no-repeat left top;
      background-size: 100% 100%;
      border: 0px;
      .el-card__header {
        border-bottom: 0px;
        padding-bottom: 0px;
        .card-header {
          span {
            color: $mian_word_active_color;
          }
        }
      }
      .text {
        font-size: 14px;
        color: $mian_word_color;
      }
      .item {
        margin-bottom: 18px;
        .ConfigItemName {
          display: inline-block;
          width: 120px;
          margin-left: 30px;
        }
        .ConfigItemData {
          margin-left: 30px;
        }
      }
      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both
      }
    }
  }
</style>
