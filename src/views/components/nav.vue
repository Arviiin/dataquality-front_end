<template>
  <el-container class="content">

    <el-header style="text-align: right; font-size: 14px" >
      <template v-if="this.vlogin0==true">
        <el-dropdown @command="handleCommand">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="deal">管理数据</el-dropdown-item>
            <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{this.userinfo.name}}</span>
      </template>
      <template v-else>
        <router-link to="/login/login">
          <span style="color:rgb(0,55,120)">登陆</span></router-link>
        |
        <router-link to="/login/register">
          <span style="color:rgb(0,55,120)">注册</span></router-link>
      </template>

    </el-header>

    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content">
          <router-link to="/">
            <span style="font-size: 40px; color: rgb(0,54,108)">数据质量量化分析平台</span></router-link>
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
  </el-container>
</template>

<script>
  export default {
    name: "navHeader",
    props: [
      'userinfo','vlogin'
    ],
    data() {
      return {
        vlogin0: false,
      }
    },
    methods:{
      handleCommand(command){
        var _this = this;
        if (command == 'logout') {
          this.$confirm('注销登录吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(function () {
            // getRequest("/logout")
            _this.userinfo.name = null;
            // _this.vlogin = false; 这句话会报警告 因为 子组件不能修改父组件传过来的值
            _this.vlogin0 = false;
            localStorage.clear();
            console.log(localStorage.getItem("User"));
            _this.$router.replace({
                path: '/',
                params: {
                  vlogin11:false
                }
              },
              );
          }, function () {
            //取消
          })
        }
        if(command == 'deal'){
          this.$router.replace({path: '/dataprocess/databrowser'});
        }
      }
    },
    mounted:function () {
      if(localStorage.getItem("User"))
      {
        this.vlogin0=true;
      }
      else {
        this.vlogin0=false;
      }
    }
  }
</script>

<style scoped>
  .content {
    margin-top: -80px;
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
