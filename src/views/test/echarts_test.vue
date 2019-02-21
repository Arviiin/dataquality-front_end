<template>
  <div class="hello">
    <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
    hello world
  </div>
</template>

<script>
  // 导入vue-echarts插件
  import ECharts from 'vue-echarts/components/ECharts.vue'
  // 导入echarts的图形类型
   import 'echarts/lib/chart/line'
   //Vue.component('chart', ECharts)  这样写不行，报错

    export default {
      name: "echarts_test",
      components: {
        'chart':ECharts
      },

      data () {
        return {
          orgOptions: {},
        }
      },
      mounted() {
        this.orgOptions = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }]
        }
      }
    }
</script>

<style scoped>

</style>
