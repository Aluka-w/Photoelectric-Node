<template>
  <div id="home">
    <header>
      <div class="home_left">
        <h1></h1>
        <router-link
          :class="active === item.navItem ? 'home_nav active' : 'home_nav' "
          v-for="item in navList"
          :to="item.navItem"
          :key="item.id"
        >
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.navTitle}}</span>
        </router-link>
      </div>
      <div class="home_right">
        <span>退出</span>
      </div>
    </header>
    <div class="home_content">
      <transition name="slide" mode="in-out">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import { navList } from './RouterLink.js'
export default {
  data () {
    return {
      navList: null,
      active: '/Live'
    }
  },
  created () {
    this.navList = navList
  },
  watch: {
    $route: function (val) {
      let newVal = val.fullPath.split('/')
      newVal = newVal[1]
      if (newVal === 'Live' || newVal === 'PlayBack' || newVal === 'Picture' || newVal === 'Configure') {
        this.active = `/${newVal}`
      }
    }
  }
}
</script>

<style  lang='scss' scoped>
  @import '../assets/css/utils.scss';
  #home {
    background: url('../assets/image/right_bg.png');
    height: 100%;
    width: 100%;
    header {
      height: 56px;
      border-bottom: 1px solid rgb(111, 164, 188);
      position: relative;
      color: $mian_word_color;
      .home_left {
        line-height: 56px;
        position: absolute;
        left: 220px;
        h1 {
          @include box(160px, 40px, '');
          @include box_position(absolute, -200px, 7px);
          background: url('../assets/image/logo.png');
          background-size: 160px 40px;
        }
        .home_nav {
          font-size: 14px;
          font-weight: 500;
          padding: 0 20px;
          color: $mian_word_color;
          &.active{
            color: $mian_word_active_color;
          }
        }
      }
      .home_right {
        position: absolute;
        right: 50px;
        line-height: 56px;
      }
    }
    .home_content {
      margin-top: 10px;
      .slide-enter-active {
        transition: all .3s ease;
      }
      .slide-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }
      .slide-enter, .slide-leave-to
      /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
      }
    }
  }
</style>
