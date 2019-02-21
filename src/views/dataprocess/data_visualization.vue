<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <menuSide></menuSide>
      <el-main style="background-color: #ffffff; height: 500px">
        <div style="display: flex;height: 500px;width: 100%;align-items: center;justify-content: center;">
          <chart ref="dschart" :options="polar" style="margin-top: 20px"></chart>
        </div>
      </el-main>
    </div>
  </div>

</template>

<script>
    // 导入vue-echarts插件
    import ECharts from 'vue-echarts/components/ECharts.vue'
    // 导入echarts的图形类型
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/polar'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import 'echarts/theme/dark'
    import 'echarts/lib/chart/bar'

    import navHeader from '@/views/components/nav'
    import menuSide from '@/views/components/menuside'

    //import {getRequest} from '@/utils/api'
    export default {
        name: "data_visualization",
        components: {
          navHeader,
          menuSide,
          'chart': ECharts//注册chart组件
      },
      mounted: function () {
        var _this = this;


        this.$ajax.get('http://localhost:8080/data/visualization')
          .then(response => {
            console.log(response.data)
            if (response.data.code == 200) {
              _this.$refs.dschart.options.xAxis.data = response.data.categories;
              _this.$refs.dschart.options.series[0].data = response.data.ds;
            } else {
              _this.$message({type: 'error', message: '数据加载失败!'});
            }
          });


        /*getRequest("/data/visualization").then(resp=> {
          if (resp.status == 200) {
            _this.$refs.dschart.options.xAxis.data = resp.data.categories;
            _this.$refs.dschart.options.series[0].data = resp.data.ds;
          } else {
            _this.$message({type: 'error', message: '数据加载失败!'});
          }
        }, resp=> {
          _this.$message({type: 'error', message: '数据加载失败!'});
        });*/
      },
      methods: {},
      data: function () {
        return {
          polar: {
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
            tooltip: {},
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
            animationDuration: 3000
          }
        }
      }

    }
</script>

<style scoped>

</style>
