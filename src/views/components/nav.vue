<template>
  <div class="content">
    <el-header style="text-align: right; font-size: 14px" v-if="this.vlogin0==true">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{this.userinfo.name}}</span>
    </el-header>

    <el-header style="text-align: right; font-size: 14px;" v-if="this.vlogin0==false">
      <router-link to="/login/login">
        <span style="color:rgb(0,55,120)">登陆</span></router-link>
      |
      <router-link to="/login/register">
        <span style="color:rgb(0,55,120)">注册</span></router-link>
    </el-header>

    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content">
          <router-link to="/">
            <span style="font-size: 40px; color: rgb(0,54,108)">数据质量分析平台</span></router-link>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <router-link to="/">
            <span style="color:#888">首页</span></router-link>
          |
          <router-link to="/">
            <span style="color:#888">关于我们</span></router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "navHeader",
    props: [
      'userinfo','vlogin'
    ],
    data() {
      return {
        vlogin0: this.vlogin?this.vlogin:false,
      }
    },
    mounted:function () {
      console.log(this.vlogin);
      console.log(this.vlogin0);
      console.log(this.userinfo);
    }
  }
</script>

<style scoped>
  .content {
    margin-top: -60px;
  }

  .el-header {
    color: #333;
    line-height: 60px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  /deep/ a {
    text-decoration: none;
  }

  /deep/ a:hover {
    text-decoration: underline;
  }
</style>
