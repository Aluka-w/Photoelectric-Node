<template>
  <div id="Configure">
    <div class="Configure_left">
      <el-collapse class="Configure_list" v-model="activeName" accordion>
        <el-collapse-item
          v-for="item in ConfigureList"
          :title="item.title"
          :name="item.id"
          :key="item.id">
          <router-link
            v-for="subItem in item.ConfigureItem"
            :class="activeLink === subItem.url ? 'Configure_item active' : 'Configure_item'"
            :to="subItem.url"
            :key="subItem.id">
            {{subItem.itemName}}
          </router-link>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="Configure_right">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { ConfigureList } from './RouterLink.js'
export default {
  data () {
    return {
      ConfigureList: null,
      activeName: '1',
      activeLink: ''
    }
  },
  created () {
    this.ConfigureList = ConfigureList
  },
  watch: {
    $route: function (val) {
      this.activeLink = val.path
    }
  },
  methods: {

  }
}
</script>

<style  lang='scss'>
  @import '../assets/css/utils.scss';
  #Configure {
    padding: 5px;
    overflow: hidden;
    height: 742px;
    .Configure_left {
      @include box(240px, 100%, '');
      float: left;
      .Configure_list {
        border: 0px solid #ccc;
        .el-collapse-item__header {
          padding: 0px 20px;
          background: url('../assets/image/chart_timeSearch_bg.png') no-repeat center center;
          background-size: 240px 49px;
          border: 0px solid #ccc;
          color: $mian_word_color;
        }
        .el-collapse-item__wrap {
          background: url('../assets/image/index_policeInfo_bg.png') no-repeat center center;
          background-size: 100% 100%;
          background-clip: content-box;
          border: 0px;
          padding: 5px;
          border-radius: 10px;
          .el-collapse-item__content {
            padding: 10px 0px;
            a {
              line-height: 30px;
            }
          }
          .Configure_item {
            color: $mian_word_color;
            display: block;
            padding-left: 40px;
            &.active {
              color: $mian_word_active_color;
            }
          }
        }
      }
    }
    .Configure_right {
      @include box_position_right(relative, 0, 0);
      @include box(82%, 94%, '');
      margin-left: 250px
    }
  }
</style>
