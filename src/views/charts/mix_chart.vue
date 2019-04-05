<template>
  <div>
    <hr>
    <div class="title-container">
      <h2 class="title">数据质量评价混合图表</h2>
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
  import resize from '@/components/Charts/mixins/resize'
  export default {
    name: "mix_chart",
    mixins: [resize],
    components:{
      'v-chart':ECharts
    },
    mounted:function() {
      this.$ajax.get('http://localhost:8080/chart/mixChart')
        .then(response => {
          console.log(response.data);
          if (response.data.code == 200) {

              const yS1Data = [];
              const yS2Data = [];
              const yS3Data = [];
              yS1Data.push(response.data.resultData.dataFileCompletenessResult);
              yS1Data.push(response.data.resultData.dataValueCompletenessResult);
              yS1Data.push(response.data.resultData.referentialConsistencyResult);
              yS1Data.push(response.data.resultData.formatConsistencyResult);
              yS1Data.push(response.data.resultData.dataRecordComplianceResult);
              yS1Data.push(response.data.resultData.rangeAccuracyResult);
              yS1Data.push(response.data.resultData.recordUniquenessResult);
              yS1Data.push(response.data.resultData.timeBasedTimelinessResult);
              yS1Data.push(response.data.resultData.dataNonVulnerabilityResult);
              yS2Data.push( response.data.resultData.expectedTotalRecordAmount - response.data.resultData.dataFileCompletenessResult);
              yS2Data.push( response.data.resultData.totalRecordAmountOfDataValueCompleteness - response.data.resultData.dataValueCompletenessResult);
              yS2Data.push( response.data.resultData.totalRecordAmountOfReferentialConsistency - response.data.resultData.referentialConsistencyResult);
              yS2Data.push( response.data.resultData.totalRecordAmountOfFormatConsistency - response.data.resultData.formatConsistencyResult);
              yS2Data.push( response.data.resultData.totalRecordAmountOfDataRecordCompliance - response.data.resultData.dataRecordComplianceResult);
              yS2Data.push( response.data.resultData.totalRecordAmountOfRangeAccuracy - response.data.resultData.rangeAccuracyResult);
              yS2Data.push( response.data.resultData.totalRecordAmountOfRecordUniqueness - response.data.resultData.recordUniquenessResult);
              yS2Data.push( response.data.resultData.totalRecordAmountOfTimeBasedTimeliness - response.data.resultData.timeBasedTimelinessResult);
              yS2Data.push( 100 - response.data.resultData.dataNonVulnerabilityResult);

              yS3Data.push( response.data.resultData.expectedTotalRecordAmount);
              yS3Data.push( response.data.resultData.totalRecordAmountOfDataValueCompleteness);
              yS3Data.push( response.data.resultData.totalRecordAmountOfReferentialConsistency);
              yS3Data.push( response.data.resultData.totalRecordAmountOfFormatConsistency);
              yS3Data.push( response.data.resultData.totalRecordAmountOfDataRecordCompliance);
              yS3Data.push( response.data.resultData.totalRecordAmountOfRangeAccuracy);
              yS3Data.push( response.data.resultData.totalRecordAmountOfRecordUniqueness);
              yS3Data.push( response.data.resultData.totalRecordAmountOfTimeBasedTimeliness);
              yS3Data.push( 100);
              console.log(yS1Data);
              console.log(yS2Data);
              console.log(yS3Data);
              this.$refs.dschart.options.xAxis.data = ["数据文件完备性","数据值完备性","数据引用一致性","数据格式一致性","数据记录依从性","数据范围准确性","数据记录唯一性","基于时间段的时效性","数据保密性"];
              this.$refs.dschart.options.series[0].data = yS1Data;
              this.$refs.dschart.options.series[1].data = yS2Data;
              this.$refs.dschart.options.series[2].data = yS3Data;
            console.log(yS1Data);
            console.log(yS2Data);
            console.log(yS3Data);
          } else {
                  this.$message({type: 'error', message: '数据加载失败!'});
                }
              });
    },
    methods: {},
    data:function() {
      return {
        optionsData: {
          backgroundColor: '#344b58',
          title: {
            //text: '数据质量评价混合图表',
            //subtext: "BY Zhuang JiLong",
            x: '20',//离左边的距离，默认px也可以使用百分比
            top: '30',//离上边的距离，默认px
            textStyle: {
              color: '#fff',
              fontSize: '22'
            },
            subtextStyle: {
              color: '#90979c',
              fontSize: '16'
            }
          },
          /*竖杠*/
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          grid: {//直角坐标系内绘图网格
            left: '11%',
            right: '10%',
            borderWidth: 0,
            top: 130,//表格离容器顶层距离
            bottom: 145,//表格离容器底层距离
            textStyle: {
              color: '#fff'
            }
          },
          /*上方控制按钮*/
          legend: {
            x: '55%',
            top: '11%',
            textStyle: {
              color: '#90979c'
            },
            data: ['合格数量', '不合格数', '数据总数']
          },
          calculable: true,
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#90979c'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0,
              rotate:40
            },
            data: []
          },
          yAxis: [{
            type: 'value',
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#90979c'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            }
          }],
          dataZoom: [{
            show: true,
            height: 30,
            xAxisIndex: [
              0
            ],
            bottom: 30,
            start: 10,
            end: 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: '#d3dee5'

            },
            textStyle: {
              color: '#fff'
            },
            borderColor: '#90979c'

          }, {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
          }],
          series: [{
            name: '合格数量',
            type: 'bar',
            stack: 'total',
            barMaxWidth: 35,
            barGap: '10%',
            itemStyle: {
              normal: {
                color: 'rgba(255,144,128,1)',
                label: {
                  show: true,
                  textStyle: {
                    color: '#fff'
                  },
                  position: 'insideTop',
                  formatter(p) {
                    return p.value > 0 ? p.value : ''
                  }
                }
              }
            },
            data: []
          },

            {
              name: '不合格数',
              type: 'bar',
              stack: 'total',//stack---数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。
              itemStyle: {
                normal: {
                  color: 'rgba(0,191,183,1)',
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: 'left',
                    formatter(p) {
                      return p.value > 0 ? p.value : ''
                    }
                  }
                }
              },
              data: []

            }, {
              name: '数据总数',
              type: 'line',
              stack: 'total2',
              symbolSize: 10,
              symbol: 'circle',
              itemStyle: {
                normal: {
                  color: 'rgba(252,230,48,1)',
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: 'top',
                    formatter(p) {
                      return p.value > 0 ? p.value : ''
                    }
                  }
                }
              },
              data: []
            }]
        }
      }
    }
  }
</script>
<style scoped>
  .echarts {
    width: 900px;
    height: 500px;
  }
</style>
