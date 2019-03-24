<template>
  <div>
    <hr>
      <el-main style="background-color: #ffffff; height: 700px">

        <h1>数据质量评价报告</h1>
          <table border="1" style="margin: 0 auto;">
            <tr >
              <th>名称</th>
              <td colspan="3">{{this.tableData.evaluationName}}</td>
              <!--<td></td>-->
              <!--<td></td>-->
              <th>评价人员</th>
              <td colspan="2">{{this.tableData.evaluationRemarkUsername}}</td>
              <!--<td></td>-->
            </tr>
            <tr>
              <th>编号</th>
              <td colspan="3">{{this.tableData.evaluationNumber}}</td>
              <!--<td></td>-->
              <!--<td></td>-->
              <th>评价时间</th>
              <td colspan="2">{{this.dimensionDetailResultBean.updatetime}}</td>
              <!--<td></td>-->
            </tr>
            <tr>
              <th colspan="7" style="height: 60px; font-size: 16px;">评价内容</th>
            </tr>
            <tr>
              <th>序号</th>
              <th>质量维度指标</th>
              <th>指标权重</th>
              <th>合格数量</th>
              <th>总数</th>
              <th>良率</th>
              <th>分值</th>
            </tr>
            <tr>
              <td>1</td>
              <td>完备性</td>
              <td>{{this.weightResult.completeness}}</td>
              <td>{{this.dimensionDetailResultBean.CompletenessResult}}</td>
              <td>{{this.dimensionDetailResultBean.CompletenessTotalRecordAmount}}</td>
              <td>{{this.dimensionResultRatioBean.Completeness}}</td>
              <td>{{this.dimensionScore.dataCompletenessScore}}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>一致性</td>
              <td>{{this.weightResult.consistency}}</td>
              <td>{{this.dimensionDetailResultBean.ConsistencyResult}}</td>
              <td>{{this.dimensionDetailResultBean.ConsistencyTotalRecordAmount}}</td>
              <td>{{this.dimensionResultRatioBean.Consistency}}</td>
              <td>{{this.dimensionScore.dataConsistencyScore}}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>依从性</td>
              <td>{{this.weightResult.compliance}}</td>
              <td>{{this.dimensionDetailResultBean.dataRecordComplianceResult}}</td>
              <td>{{this.dimensionDetailResultBean.totalRecordAmountOfDataRecordCompliance}}</td>
              <td>{{this.dimensionResultRatioBean.Compliance}}</td>
              <td>{{this.dimensionScore.dataRecordComplianceScore}}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>准确性</td>
              <td>{{this.weightResult.accuracy}}</td>
              <td>{{this.dimensionDetailResultBean.rangeAccuracyResult}}</td>
              <td>{{this.dimensionDetailResultBean.totalRecordAmountOfRangeAccuracy}}</td>
              <td>{{this.dimensionResultRatioBean.Accuracy}}</td>
              <td>{{this.dimensionScore.rangeAccuracyScore}}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>唯一性</td>
              <td>{{this.weightResult.uniqueness}}</td>
              <td>{{this.dimensionDetailResultBean.recordUniquenessResult}}</td>
              <td>{{this.dimensionDetailResultBean.totalRecordAmountOfRecordUniqueness}}</td>
              <td>{{this.dimensionResultRatioBean.Uniqueness}}</td>
              <td>{{this.dimensionScore.recordUniquenessScore}}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>现实性</td>
              <td>{{this.weightResult.timeliness}}</td>
              <td>{{this.dimensionDetailResultBean.timeBasedTimelinessResult}}</td>
              <td>{{this.dimensionDetailResultBean.totalRecordAmountOfTimeBasedTimeliness}}</td>
              <td>{{this.dimensionResultRatioBean.Timeliness}}</td>
              <td>{{this.dimensionScore.timeBasedTimelinessScore}}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>保密性</td>
              <td>{{this.weightResult.vulnerability}}</td>
              <td>{{this.dimensionDetailResultBean.dataNonVulnerabilityResult}}</td>
              <td>{{this.dimensionDetailResultBean.totalRecordAmountOfTimeBasedTimeliness}}</td>
              <td>{{this.dimensionResultRatioBean.Confidentiality}}</td>
              <td>{{this.dimensionScore.dataNonVulnerabilityScore}}</td>
            </tr>
            <tr>
              <td></td>
              <th>综合加权总分</th>
              <td colspan="5">{{this.dimensionScore.totalDataQualityScore}}</td>
            </tr>
            <tr>
              <td></td>
              <th>备注</th>
              <td colspan="5">{{this.tableData.evaluationRemark}}</td>
            </tr>
          </table>
      </el-main>
    </div>
</template>

<script>
    export default {
      name: "evaluation_report",
      data() {
        return {
          vlogin:false,
          userinfo: {
            name:'',
            company: '',
            mail:'',
            phone:''
          },
          tableData:[],
          weightResult:{},
          dimensionDetailResultBean:{},
          dimensionResultRatioBean:{},
          dimensionScore:{}
        }
      },
      mounted:function () {
        window.scrollTo(0,0);
        if(localStorage.getItem("User"))
        {
          this.userinfo.name=localStorage.getItem("User");
          this.vlogin=true;
        }
        console.log(localStorage.getItem("User"));
        this.$ajax({
          method: 'post',
          url: 'http://localhost:8080/result/report',
          params: {
            username: localStorage.getItem("User"),
          }
        }).then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            this.tableData=response.data.result;
            this.weightResult = this.tableData.weightResult;
            this.dimensionDetailResultBean = this.tableData.dimensionDetailResultBean;
            this.dimensionResultRatioBean = this.tableData.dimensionResultRatioBean;
            this.dimensionScore = this.tableData.dimensionScore;
            this.dimensionDetailResultBean.CompletenessTotalRecordAmount= Math.round((this.dimensionDetailResultBean.expectedTotalRecordAmount+this.dimensionDetailResultBean.totalRecordAmountOfDataValueCompleteness)/2);
            this.dimensionDetailResultBean.CompletenessResult=Math.round((this.dimensionDetailResultBean.dataFileCompletenessResult+this.dimensionDetailResultBean.dataValueCompletenessResult)/2);

            this.dimensionDetailResultBean.ConsistencyTotalRecordAmount= Math.round((this.dimensionDetailResultBean.totalRecordAmountOfFormatConsistency+this.dimensionDetailResultBean.totalRecordAmountOfReferentialConsistency)/2);
            this.dimensionDetailResultBean.ConsistencyResult=Math.round((this.dimensionDetailResultBean.referentialConsistencyResult+this.dimensionDetailResultBean.formatConsistencyResult)/2);





            this.dimensionDetailResultBean.updatetime = new Date(+new Date(this.dimensionDetailResultBean.updatetime) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
          } else if(response.data.status == "error"){
            this.$message({type: 'error', message: '数据加载失败!'});
          }

        })
      }
    }
</script>

<style scoped>
tr{
  height: 40px;
}
td,th,tr{
  font-size: 12px;
}
table{
  border-collapse:collapse;
  border: 1px solid #000000;
}
td{
  border-collapse:collapse;
  border: 1px solid #000000;
  width: 75px;

}

</style>
