<template>
  <el-container class="home_container">
    <el-header class="el-h">
      <div class="home_title">数据质量分析平台</div>
      <div class="home_userinfoContainer">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link home_userinfo">
              {{this.name}}<i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="deal">管理数据</el-dropdown-item>
            <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
            <el-dropdown-item command="sysMsg">系统消息</el-dropdown-item>
            <el-dropdown-item command="MyHome">个人主页</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!--default-active="2" 进入单页面应用看到第二个页面    router很关键，点击侧边栏就可以跳转页面-->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo" style="background-color: #ECECEC;text-align: left;" router>
          <template v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="item.children.length>1" :key="index">
              <template slot="title">
                <!--<i :class="item.iconCls"></i> 这里侧边栏图标遍历，我先不搞，写死-->
                <i class="el-icon-setting"></i>
                <span>{{item.name}}</span>
              </template>
              <!--删去了<el-menu-item-group>-->
              <el-menu-item v-for="child in item.children" v-if="!child.hidden" :index="child.path" :key="child.path">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
            <template v-else>
              <el-menu-item :index="item.children[0].path">
                <i class="el-icon-setting"></i>
                <span slot="title">{{item.children[0].name}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <!--面包屑导航-->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
          </el-breadcrumb>

          <keep-alive>
            <router-view v-if="this.$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!this.$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "single_page_home",
    data() {
      return {
        vlogin0: false,
        name:'zjl'
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
            _this.name = null;
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
        this.name=localStorage.getItem("User")
        this.vlogin0=true;
      }
      else {
        this.vlogin0=false;
      }
    }
  }
</script>

<style>
  .home_container {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }

  .el-h {
    background-color: #20a0ff;
    color: #333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .el-aside {
    background-color: #ECECEC;
  }

  .el-main {
    background-color: #fff;
    color: #000;
    text-align: center;
  }

  .home_title {
    color: #fff;
    font-size: 22px;
    display: inline;
  }

  .home_userinfo {
    color: #fff;
    cursor: pointer;
  }

  .home_userinfoContainer {
    display: inline;
    margin-right: 20px;
  }
</style>
