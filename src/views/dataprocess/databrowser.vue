<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <menuSide :vlogin="this.vlogin"></menuSide>
      <!--<el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" class="login-form">-->
      <el-main style="background-color: #ffffff; height: 500px">
        <div class="title-container">
          <h3 class="title">数据一览</h3>
        </div>
      <el-input placeholder="请输入内容" v-model="input0">
        <template slot="prepend">请选择需要预览的数据（数据库+表名）</template>
        <el-button slot="append" icon="el-icon-search" @click="search(input0)"></el-button>
      </el-input>
        <br>
        <br>
        <el-table
          v-if="this.diag==true"
          :data="tableData"
          style="width: 100%"
          height="250">
          <el-table-column
            fixed
            prop="date"
            label="日期">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区">
          </el-table-column>
          <el-table-column
            prop="address"
            label="住址">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编">
          </el-table-column>
        </el-table>
      </el-main>
    </div>
  </div>

</template>

<script>
  import navHeader from '@/views/components/nav'
  import navFooter from '@/views/components/footer'
  import menuSide from '@/views/components/menuside'

  export default {
    name: "databrowser",
    components:{
      navHeader,
      navFooter,
      menuSide
    },
    data(){
      return {
        diag:false,
        userinfo :{
          name:'',
        },
        input0:'',
        vlogin:this.$route.params.vlogin?this.$route.params.vlogin:'true',
        tableData:
          [{
          date: '2016-05-03',
          name: '庄计龙',
          province: '上海',
          city: '长宁区',
          address: '东华大学',
          zip: 200333
        }, {
        date: '2016-05-02',
          name: '猪猪侠',
          province: '安徽',
          city: '合肥市',
          address: '合肥工业大学',
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
          name: '马云',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
      }, {
        date: '2016-05-08',
          name: '马化腾',
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
      }],
      }
    },
    mounted:function(){
      if(localStorage.getItem("User"))
      {
        this.userinfo.name=localStorage.getItem("User");
        this.vlogin=true;
      }
    },
    methods:{
      search(tablename){
        console.log(tablename);
        this.diag=true;
      }
    }
  }
</script>

<style scoped>
  .login-form {
    left: 0;
    right: 0;
    width: 500px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 15px auto;
  }
  .page-info{
    background:#252525;
    padding:1% 0;
  }
  .page-info a{
    color:#C6C6C6;
    font-size:1em;
    text-align: left;
    display:block;
    text-decoration:none;
  }
  .page-info h2{
    text-align: left;
    color:deepskyblue;
  }
  .page-info a:hover{
    color:#fff;
  }
  .page-overview{
    margin-bottom: 40px;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
