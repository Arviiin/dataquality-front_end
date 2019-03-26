<template>
  <div>
  <hr>
    <div class="title-container">
      <h2 class="title">数据质量综合评价维度比值</h2>
    </div>
    <div
      style="display: flex;height: 500px;width: 100%;align-items: center;justify-content: center;">
      <chart ref="dschart" :options="optionsData" style="margin-top: 20px"></chart>
    </div>
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

    export default {
        name: "data_visualization",
        components: {
          'chart': ECharts//注册chart组件
      },
      mounted: function () {
        var _this = this;

        this.$ajax.get('http://localhost:8080/data/visualization')
          .then(response => {
            console.log(response.data)
            if (response.data.code == 200) {
              _this.$refs.dschart.options.xAxis.data = response.data.categories;
              console.log(response.data.ds);
              _this.$refs.dschart.options.series[0].data = response.data.ds;
            } else {
              _this.$message({type: 'error', message: '数据加载失败!'});
            }
          });
      },
      methods: {},
      data: function () {
        return {
          //实际上就只有这一个变量optionsData将其与options双向绑定，options就是我们图表的关键。
          optionsData: {
            title: {
              text: ''
            },
            toolbox: {
              show: true,
              feature: {
                dataZoom: {
                  yAxisIndex: 'none'
                },
                dataView: {
                  readOnly: false
                },
                magicType: {
                  type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
              }
            },
            /*tooltip: {},*/
            /*竖杠*/
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            legend: {
              data: ['dq']
            },
            xAxis: {
              data: []
            },
            yAxis: {},
            series: [{
              name: 'dq',
              type: 'line',
              data: []
            }],
            animationDuration: 3000//动画完成的时间
          }
        }
      }

    }
</script>

<style scoped>
  .echarts {
    width: 800px;
    height: 500px;
  }
</style>
