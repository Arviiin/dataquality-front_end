<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <menuSide></menuSide>
      <el-main style="background-color: #ffffff; height: 1000px">
        <!--<div style="display: flex;height: 500px;width: 100%;align-items: center;justify-content: center;">-->
          <el-table
            :header-cell-style="{background:'#ccc'}"
            :data="tableData"
            style="width: 100%"
            height="1000">
            <el-table-column
              fixed
              prop="date"
              label="评估模板标识">
            </el-table-column>
            <el-table-column
              prop="name"
              label="规则系列标识">
            </el-table-column>
            <el-table-column
              prop="province"
              label="总数量">
            </el-table-column>
            <el-table-column
              prop="city"
              label="合格数量">
            </el-table-column>
            <el-table-column
              prop="address"
              label="不符数量">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="评估权重">
            </el-table-column>
            <el-table-column
              prop="zip1"
              label="评估得分">
            </el-table-column>
            <el-table-column
              prop="date"
              label="评估时间">
            </el-table-column>
          </el-table>
        <!--</div>-->
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
      }

    }
</script>

<style scoped>

</style>
