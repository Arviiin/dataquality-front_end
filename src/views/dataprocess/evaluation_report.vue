<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <menuSide></menuSide>
      <el-main style="background-color: #ffffff; height: 700px">
        <h1>数据质量评价报告</h1>
          <table border="1" style="margin: 0 auto;">
            <tr >
              <th>名称</th>
              <td colspan="3"></td>
              <!--<td></td>-->
              <!--<td></td>-->
              <th>评价人员</th>
              <td colspan="2"></td>
              <!--<td></td>-->
            </tr>
            <tr>
              <th>编号</th>
              <td colspan="3"></td>
              <!--<td></td>-->
              <!--<td></td>-->
              <th>评价日期</th>
              <td colspan="2"></td>
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>一致性</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>依从性</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>准确性</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>唯一性</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td>现实性</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>7</td>
              <td>保密性</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <th>综合加权总分</th>
              <td colspan="5"></td>
            </tr>
            <tr>
              <td></td>
              <th>备注</th>
              <td colspan="5"></td>
            </tr>
          </table>
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
        },
      data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
        }
      },
      mounted:function () {
        window.scrollTo(0,0);
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
