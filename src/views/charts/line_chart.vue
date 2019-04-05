<template>
  <div>
    <hr>
    <div class="title-container">
      <h2 class="title">数据质量评价line图</h2>
    </div>
    <div
      style="display: flex;height: 500px;width: 100%;align-items: center;justify-content: center;">
      <v-chart ref="dschart" :options="optionsData" style="margin-top: 20px"></v-chart>
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
  import echarts from 'echarts'
  export default {
    name: "line_chart",
    components:{
      'v-chart':ECharts
    },
    mounted:function() {
      this.$ajax.get('http://localhost:8080/chart/mixChart')
        .then(response => {
          console.log(response.data);
          if (response.data.code == 200) {
            const actually = [];
            const expectedData = [];
            actually.push(response.data.resultData.dataFileCompletenessResult);
            actually.push(response.data.resultData.dataValueCompletenessResult);
            actually.push(response.data.resultData.referentialConsistencyResult);
            actually.push(response.data.resultData.formatConsistencyResult);
            actually.push(response.data.resultData.dataRecordComplianceResult);
            actually.push(response.data.resultData.rangeAccuracyResult);
            actually.push(response.data.resultData.recordUniquenessResult);
            actually.push(response.data.resultData.timeBasedTimelinessResult);
            actually.push(response.data.resultData.dataNonVulnerabilityResult);

            expectedData.push( response.data.resultData.expectedTotalRecordAmount);
            expectedData.push( response.data.resultData.totalRecordAmountOfDataValueCompleteness);
            expectedData.push( response.data.resultData.totalRecordAmountOfReferentialConsistency);
            expectedData.push( response.data.resultData.totalRecordAmountOfFormatConsistency);
            expectedData.push( response.data.resultData.totalRecordAmountOfDataRecordCompliance);
            expectedData.push( response.data.resultData.totalRecordAmountOfRangeAccuracy);
            expectedData.push( response.data.resultData.totalRecordAmountOfRecordUniqueness);
            expectedData.push( response.data.resultData.totalRecordAmountOfTimeBasedTimeliness);
            expectedData.push( 100);
            console.log(actually);
            console.log(expectedData);
            this.$refs.dschart.options.xAxis.data = ["数据文件完备性","数据值完备性","数据引用一致性","数据格式一致性","数据记录依从性","数据范围准确性","数据记录唯一性","基于时间段的时效性","数据保密性"];
            this.$refs.dschart.options.series[0].data = expectedData;
            this.$refs.dschart.options.series[1].data = actually;
            console.log(actually);
            console.log(expectedData);
          } else {
                  this.$message({type: 'error', message: '数据加载失败!'});
                }
              });
    },
    methods: {},
    data:function() {
      return {
        optionsData: {
          xAxis: {
            // data: ['数据完备性', '数据一致性', '数据依从性', '数据准确性', '数据唯一性', '数据现实性', '数据保密性'],
            data: [],
            boundaryGap: true,
            axisTick: {
              show: false
            },
            axisLabel: {
              interval:0,
              rotate:40
            }

          },
          grid: {
            left: 10,
            right: 10,
            bottom: 20,
            top: 30,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10]
          },
          yAxis: {
            axisTick: {
              show: false
            }
          },
          legend: {
            data: ['expected', 'actually']
          },
          series: [{
            name: 'expected', itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            // data: [10000, 12000, 16100, 13400, 10500, 14000, 14500],//expectedData  expectedData: [100, 120, 161, 134, 105, 160, 165],
            data: [],
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
            {
              name: 'actually',
              smooth: true,
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#3888fa',
                  lineStyle: {
                    color: '#3888fa',
                    width: 2
                  },
                  areaStyle: {
                    color: '#f3f8ff'
                  }
                }
              },
              // data: [12000, 8000, 11000, 15400, 16200, 12000, 12500],//actualData,  actualData: [120, 82, 91, 154, 162, 140, 145]
              data: [],
              animationDuration: 2800,
              animationEasing: 'quadraticOut'
            }]
        }
      }
    }
  }
</script>
<style scoped>
  .echarts {
    width: 1000px;
    height: 400px;
  }
</style>
