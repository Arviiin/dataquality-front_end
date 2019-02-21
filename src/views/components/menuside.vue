<template>
  <div>
    <el-col :span="5">
      <h5>菜单栏</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo">
        <!--<el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          //设置菜单背景颜色
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">-->


        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span >账户管理</span>
          </template>
          <el-menu-item-group>
            <router-link :vlogin="this.vlogin" to="/user/update_password">
              <el-menu-item index="1-1" >修改密码</el-menu-item>
            </router-link>
            <router-link to="/user/update_profile" :vlogin="this.vlogin">
              <el-menu-item index="1-2" >修改资料</el-menu-item>
            </router-link>
            <router-link to="/user/xxx" :vlogin="this.vlogin">
              <el-menu-item index="1-3" >用户管理</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span >我的数据</span>
          </template>
          <el-menu-item-group>
            <router-link :vlogin="this.vlogin" to="/dataprocess/databrowser">
              <el-menu-item index="2-1" >数据一览</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>评价配置</span>
          </template>
          <el-menu-item-group>
            <router-link :vlogin="this.vlogin" to="/dataprocess/data_assess">
              <!--<router-link :to="{ name: '/dataprocess/data_assess', params: { vlogin: this.vlogin}}">-->
              <el-menu-item index="3-1" >指标设置</el-menu-item>
            </router-link>
            <router-link to="/dataprocess/weight_allo" :vlogin="this.vlogin">
              <el-menu-item index="3-2" >权重分配</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>结果一览</span>
          </template>
          <el-menu-item-group>
            <router-link :vlogin="this.vlogin" to="/dataprocess/data_visualization">
              <el-menu-item index="4-1" >图表展示</el-menu-item>
            </router-link>
            <router-link :vlogin="this.vlogin" to="/dataprocess/evaluation_report">
              <el-menu-item index="4-2" >评价报告</el-menu-item>
            </router-link>
            <!--<router-link to="/dataprocess/weight_allo" :vlogin="this.vlogin">
              <el-menu-item index="2-2">权重分配</el-menu-item>
            </router-link>-->
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: "menuside",
    props: [
      'vlogin'
    ],

  }
</script>

<!--lang="scss" 我这里没装-->
<style scoped>
  a {
    text-decoration: none;
  }
  .el-menu-item{
    float: right;
    text-align: left
  }
  span{
    font-weight:700;
  }

</style>
