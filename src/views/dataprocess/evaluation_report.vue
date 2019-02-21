<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <menuSide></menuSide>
      <el-main style="background-color: #ffffff; height: 500px">
        <div style="display: flex;height: 500px;width: 100%;align-items: center;justify-content: center;">
            hhhh
        </div>
      </el-main>
    </div>
  </div>
</template>

<script>
  import navHeader from '@/views/components/nav'
  import menuSide from '@/views/components/menuside'
    export default {
        name: "evaluation_report",
        components: {
          navHeader,
          menuSide,
        }
    }
</script>

<style scoped>

</style>
