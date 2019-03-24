<template>

    <div class="chart-container">
      <chart height="100%" width="100%"/>
    <!--</div>-->
  </div>
  <!--<div class="test">-->
    <!--测试-->
  <!--</div>-->
</template>

<script>
import Chart from '@/components/Charts/mixChart'

export default {
  name: 'mixChart',
  components: { Chart }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  /*height: calc(100vh - 84px);*/
  height: 100%;
  /*margin-top: 10px;*/
  margin-left: -20px;
  margin-right: 20px;
  /*padding-right: 50px;*/
}
  /*.test{*/
    /*height: 100%;*/
    /*width: 100%;*/
    /*background-color: red;*/
    /*margin-left: -20px;*/
  /*}*/
</style>

