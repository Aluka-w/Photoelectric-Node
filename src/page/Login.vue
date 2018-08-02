<template>
  <div id="login">
    <div class="loginWrapper">
      <div class="logo"></div>
      <div class="loginList">
        <el-form label-position="right" label-width="80px" :model="account">
          <el-form-item label="用户名 :">
            <el-input label-width="50px" placeholder="请输入用户名" v-model="account.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码 :">
            <el-input label-width="100px" placeholder="请输入密码" type="password" v-model="account.password"></el-input>
          </el-form-item>
          <el-form-item>
            <!-- <el-radio v-model="account.autoPlay" label="1">自动实况</el-radio> -->
            <el-checkbox v-model="account.autoPlay">自动实况</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
            <el-button @click="resetForm('numberValidateForm')" style="marginLeft: 100px">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: {
        userName: '',
        password: '',
        autoPlay: true
      }
    }
  },
  methods: {
    submitForm (res) {
      console.log(res)
    },
    resetForm (res) {
      console.log(res)
    }
  }
}
</script>

<style  lang='scss'>
  @import '../assets/css/utils.scss';
  #login {
    @include box(100%, 800px, #f4f5f7);
    overflow: hidden;
    .loginWrapper {
      @include box(550px, 337px, '');
      @include box_shadow ;
      @include box_position (relative, 0, 0);
      background: url('../assets/image/login_form_background.png');
      border-radius: 5px;
      position: relative;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      .logo {
        @include box(160px, 40px, red);
        @include box_position(relative, 50px, 22px);
        background: url('../assets/image/logo.png');
      }
      .loginList {
        @include box_position(relative, 80px, 80px);
        .el-form-item {
          margin-bottom: 10px;
          input {
            width: 250px;
          }
        }
      }
    }
  }
</style>
