<template>
  <div>
    <hr>
    <div class="title-container">
      <h2 class="title">数据质量评价各个质量特性饼图</h2>
    </div>
    <!--<el-row :gutter="0">&lt;!&ndash;gutter 属性来指定每一栏之间的间隔，默认间隔为 0。&ndash;&gt;-->
      <!--<el-col :span="12">-->
        <div
          style="display: flex;height: 500px;width: 100%;align-items: center;justify-content: center;">
          <v-chart ref="dschart" :options="optionsData" style="margin-top: 20px"></v-chart>
        </div>
      <!--</el-col>-->
      <!--<el-col :span="12">-->
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div
          style="display: flex;height: 500px;width: 100%;align-items: center;justify-content: center;">
          <v-chart ref="dschart_weight" :options="optionsWeightData" style="margin-top: 20px"></v-chart>
        </div>
      <!--</el-col>-->
    <!--</el-row>-->


  </div>
</template>

<script>
  // 导入vue-echarts插件
  import ECharts from 'vue-echarts/components/ECharts.vue'
  // 导入echarts的图形类型
  import 'echarts/lib/chart/line'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/polar'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/title'
  import 'echarts/theme/dark'
  import echarts from 'echarts'
  export default {
    name: "line_chart",
    components:{
      'v-chart':ECharts
    },
    mounted:function() {
      this.$ajax.get('http://localhost:8080/data/score')
        .then(response => {
          console.log(response.data);
          if (response.data.code == 200) {
            console.log(response.data.resultData);
            this.$refs.dschart.options.legend.data = ["数据完备性","数据一致性","数据依从性","数据准确性","数据唯一性","数据现实性","数据保密性"];
            this.$refs.dschart.options.series[0].data = response.data.resultData;

          } else {
            this.$message({type: 'error', message: '数据加载失败!'});
                }
        });

      this.$ajax.get('http://localhost:8080/data/weight')
        .then(response => {
          console.log(response.data);
          if (response.data.code == 200) {
            console.log(response.data.resultData);
            this.$refs.dschart_weight.options.legend.data = ["数据完备性","数据一致性","数据依从性","数据准确性","数据唯一性","数据现实性","数据保密性"];
            this.$refs.dschart_weight.options.series[0].data = response.data.resultData;

          } else {
            this.$message({type: 'error', message: '数据加载失败!'});
          }
        });
    },
    methods: {},
    data:function() {
      return {
        optionsData: {
          title : {
            text: '各指标分数',
            subtext: '玫瑰图',
            x:'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            bottom: '50',
            data: []
          },
          calculable: true,
          series: [
            {
              name: '指标分数',
              type: 'pie',
              roseType: 'radius',
              radius: [15, 95],
              center: ['50%', '38%'],
              data: [
                /*{ value: 320, name: 'Industries' },
                { value: 240, name: 'Technology' },
                { value: 149, name: 'Forex' },
                { value: 100, name: 'Gold' },
                { value: 59, name: 'Forecasts' }*/
              ],
              animationEasing: 'cubicInOut',
              animationDuration: 2600
            }
          ]
        },

        optionsWeightData: {
          title : {
            text: '各指标权重',
            subtext: '玫瑰图',
            x:'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            bottom: '50',
            data: []
          },
          calculable: true,
          series: [
            {
              name: '指标权重',
              type: 'pie',
              roseType: 'radius',
              radius: [15, 95],
              center: ['50%', '38%'],
              data: [
                /*{ value: 320, name: 'Industries' },
                { value: 240, name: 'Technology' },
                { value: 149, name: 'Forex' },
                { value: 100, name: 'Gold' },
                { value: 59, name: 'Forecasts' }*/
              ],
              animationEasing: 'cubicInOut',
              animationDuration: 2600
            }
          ]
        }
      }
    }
  }
</script>
<style scoped>
  .echarts {
    width: 1200px;
    height: 500px;
  }
</style>
