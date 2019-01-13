<template>
  <div>
    <el-col :span="6">
      <h5>数据处理</h5>
      <!--<el-menu-->
      <!--default-active="2"-->
      <!--class="el-menu-vertical-demo"-->
      <!--@open="handleOpen"-->
      <!--@close="handleClose">-->
      <!--<el-submenu index="1">-->
      <!--<template slot="title">-->
      <!--<i class="el-icon-menu"></i>-->
      <!--<span>我的数据</span>-->
      <!--</template>-->
      <!--<el-menu-item-group>-->
      <!--<router-link to="/dataprocess/databrowser">-->
      <!--<el-menu-item index="1-1">数据一览</el-menu-item>-->
      <!--</router-link>-->
      <!--</el-menu-item-group>-->
      <!--</el-submenu>-->
      <!--<router-link to="/dataprocess/data_assess">-->
      <!--<el-menu-item index="2">-->
      <!--<i class="el-icon-menu"></i>-->
      <!--<span slot="title">数据评估</span>-->
      <!--</el-menu-item>-->
      <!--</router-link>-->
      <!--</el-menu>-->
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>我的数据</span>
          </template>
          <el-menu-item-group>
            <router-link to="/dataprocess/databrowser">
              <el-menu-item index="1-1">数据一览</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>数据评价</span>
          </template>
          <el-menu-item-group>
            <router-link to="/dataprocess/data_assess">
              <el-menu-item index="2-1">数据质量评估</el-menu-item>
            </router-link>
            <router-link to="/dataprocess/weight_allo">
              <el-menu-item index="2-2">权重分配</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: "menuside"
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

</style>
