<template>
  <el-container class="home_container">
    <el-aside width="210px" style="background-color:#374355; text-align:left" >
      <!--default-active="2" 进入单页面应用看到第二个页面    router很关键，点击侧边栏就可以跳转页面-->
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#374355"
        text-color="rgb(191, 203, 217)"
        active-text-color="rgb(64, 158, 255)"
        router>
        <template v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden">
          <div style="background-color: #1c2738">
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
            <div style="background-color: #011327">
            <el-menu-item :index="item.children[0].path">
              <i class="el-icon-setting"></i>
              <span slot="title">{{item.children[0].name}}</span>
            </el-menu-item></div>
          </template>
          </div>
        </template>
      </el-menu>
    </el-aside>

    <el-container>
    <el-header class="el-h">
      <div class="home_title">
        <div style="margin-top:20px; margin-bottom:20px;">
          <span class="title0">数据质量分析平台</span>
        </div>
      </div>
      <div class="home_userinfoContainer">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link home_userinfo">
              {{this.name}}<i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="myhome">回到首页</el-dropdown-item>
            <el-dropdown-item command="revise">修改资料</el-dropdown-item>
            <el-dropdown-item command="pswd">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>

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
          if(command == 'revise'){
            this.$router.replace({path: '/user/update_profile'});
          }
          if(command == 'pswd'){
            this.$router.replace({path: '/user/update_password'});
          }
          if(command == 'myhome'){
            this.$router.replace({path: '/'});
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
    color: #000;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  }


  .home_title {
    color: #000;
    font-size: 18px;
    display: inline;
    font-weight: bold;
  }

  .home_userinfo {
    color: #000;
    cursor: pointer;
  }

  .home_userinfoContainer {
    display: inline;
    margin-right: 20px;
  }
  /*.title0 {*/
    /*position: relative;*/
    /*padding-left: 2rem;*/
    /*padding-right: 16px;*/
    /*vertical-align: middle;*/
    /*letter-spacing: 0.29px;*/
    /*text-transform: uppercase;*/
    /*!*font-weight: bold;*!*/
    /*font-size: 16px;*/
    /*border-radius: 0px;*/
    /*color: #000;*/
    /*background-color: transparent;*/
    /*width: 100%;*/
    /*height: 48px;*/
  /*}*/
</style>
