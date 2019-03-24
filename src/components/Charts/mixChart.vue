<template>
    <div :class="className" :id="id" :style="{height:height,width:width}"/>
</template>

<script>
  import echarts from 'echarts'
  import resize from './mixins/resize'

  export default {
    mixins: [resize],
    props: {//别的组件引用它的时候传给给他的。
      className: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '200px'
      }
    },
    data() {
      return {
        chart: null,
        /*xData:[1,2,3,4,5,6,7,8,9],//先在这里定义，后面用到用this.xxx来赋值
        yS1Data:[11,22,33,44,55,66,77,88,99],
        yS2Data:[111,222,333,444,555,666,777],
        yS3Data:[111,222,333,444,555,666,777]*/
        xData:["数据文件完备性","数据值完备性","数据引用一致性","数据格式一致性","数据记录依从性","数据范围准确性","数据记录唯一性","基于时间段的时效性","数据保密性"],
        yS1Data: [],
        yS2Data: [],
        yS3Data: []
      }
    },
    mounted() {
      this.$ajax.get('http://localhost:8080/chart/mixChart')
        .then(response => {
          console.log(response.data.resultData.dataFileCompletenessResult)
          console.log(response.data);
          if (response.data.code == 200) {

              this.yS1Data.push(response.data.resultData.dataFileCompletenessResult);
              this.yS1Data.push(response.data.resultData.dataValueCompletenessResult);
              this.yS1Data.push(response.data.resultData.referentialConsistencyResult);
              this.yS1Data.push(response.data.resultData.formatConsistencyResult);
              this.yS1Data.push(response.data.resultData.dataRecordComplianceResult);
              this.yS1Data.push(response.data.resultData.rangeAccuracyResult);
              this.yS1Data.push(response.data.resultData.recordUniquenessResult);
              this.yS1Data.push(response.data.resultData.timeBasedTimelinessResult);
              this.yS1Data.push(response.data.resultData.dataNonVulnerabilityResult);

              this.yS2Data.push( response.data.resultData.expectedTotalRecordAmount - response.data.resultData.dataFileCompletenessResult);
              this.yS2Data.push( response.data.resultData.totalRecordAmountOfDataValueCompleteness - response.data.resultData.dataValueCompletenessResult);
              this.yS2Data.push( response.data.resultData.totalRecordAmountOfReferentialConsistency - response.data.resultData.referentialConsistencyResult);
              this.yS2Data.push( response.data.resultData.totalRecordAmountOfFormatConsistency - response.data.resultData.formatConsistencyResult);
              this.yS2Data.push( response.data.resultData.totalRecordAmountOfDataRecordCompliance - response.data.resultData.dataRecordComplianceResult);
              this.yS2Data.push( response.data.resultData.totalRecordAmountOfRangeAccuracy - response.data.resultData.rangeAccuracyResult);
              this.yS2Data.push( response.data.resultData.totalRecordAmountOfRecordUniqueness - response.data.resultData.recordUniquenessResult);
              this.yS2Data.push( response.data.resultData.totalRecordAmountOfTimeBasedTimeliness - response.data.resultData.timeBasedTimelinessResult);
              this.yS2Data.push( 100 - response.data.resultData.dataNonVulnerabilityResult);

              this.yS3Data.push( response.data.resultData.expectedTotalRecordAmount);
              this.yS3Data.push( response.data.resultData.totalRecordAmountOfDataValueCompleteness);
              this.yS3Data.push( response.data.resultData.totalRecordAmountOfReferentialConsistency);
              this.yS3Data.push( response.data.resultData.totalRecordAmountOfFormatConsistency);
              this.yS3Data.push( response.data.resultData.totalRecordAmountOfDataRecordCompliance);
              this.yS3Data.push( response.data.resultData.totalRecordAmountOfRangeAccuracy);
              this.yS3Data.push( response.data.resultData.totalRecordAmountOfRecordUniqueness);
              this.yS3Data.push( response.data.resultData.totalRecordAmountOfTimeBasedTimeliness);
              this.yS3Data.push( 100);
              // console.log(xData);
              console.log(this.yS1Data);
              console.log(this.yS2Data);
              console.log(this.yS3Data);

              this.initChart()
          } else {
                  _this.$message({type: 'error', message: '数据加载失败!'});
                }
              });
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {

      initChart() {
        this.chart = echarts.init(document.getElementById(this.id));
        // const xData = (function() {
        //    const data = [];
        //    for (let i = 1; i < 13; i++) {
        //      data.push(i)
        //    }
        //    return data
        //  }());

        // const xData = [];
        // for (let i = 1; i < 13; i++) {
        //   xData.push(i)
        // }
        this.chart.setOption({
          backgroundColor: '#344b58',
          title: {
            text: '数据质量评价混合图表',
            subtext: "BY Zhuang JiLong",
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
          grid: {
            left: '5%',
            right: '5%',
            borderWidth: 0,
            top: 150,
            bottom: 95,
            textStyle: {
              color: '#fff'
            }
          },
          /*上方控制按钮*/
          legend: {
            x: '5%',
            top: '13%',
            textStyle: {
              color: '#90979c'
            },
            data: ['合格数', '不合格数', '数据总数']
          },
          calculable: true,
          xAxis: [{
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
              interval: 0

            },
            data: this.xData
          }],
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
            name: '合格数',
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
            data: this.yS1Data
            //   [
            //   709,
            //   1917,
            //   2455,
            //   2610,
            //   1719,
            //   1433,
            //   1544,
            //   3285,
            //   5208,
            //   3372,
            //   2484,
            //   4078
            // ]
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
              data: this.yS2Data
              //   [
              //   327,
              //   1776,
              //   507,
              //   1200,
              //   800,
              //   482,
              //   204,
              //   1390,
              //   1001,
              //   951,
              //   381,
              //   220
              // ]
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
              data: this.yS3Data
              /*[
              1036,
              3693,
              2962,
              3810,
              2519,
              1915,
              1748,
              4675,
              6209,
              4323,
              2865,
              4298
            ]*/
            }
          ]
        })
      }
    }
  }
</script>
