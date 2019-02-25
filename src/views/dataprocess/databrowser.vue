<template>
  <div>
<!--//不知道改什么？？-->
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin"></navHeader>
    <hr>

    <div>
      <menuSide :vlogin="this.vlogin"></menuSide>
      <!--<el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" class="login-form">-->
      <el-main style="background-color: #ffffff; height: 350px">
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
          :data="tableData"
          style="width: 100%"
          v-if="this.diag==true"
          :header-cell-style="{background:'#f5f7fa'}">
          <template v-for="col in cols">
          <el-table-column
            width="180"
            :prop="col.prop" :label="col.lable" >
          </el-table-column>
          </template>
        </el-table>

        <!--<el-button raw-type="button" @click="addCol">-->
          <!--添加一列-->
        <!--</el-button>-->

        <el-pagination v-if="this.diag==true"
          background
          layout="prev, pager, next"
          :total="1000"
          style="float: right"
        >
        </el-pagination>
      </el-main>
    </div>
  </div>

</template>

<script>
  import navHeader from '@/views/components/nav'
  import navFooter from '@/views/components/footer'
  import menuSide from '@/views/components/menuside'

  let moment = require("moment");

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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        cols: [
          {prop: 'date', lable: '日期'},
          {prop: 'name', lable: '姓名'},
        ]


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
        this.$ajax({
          method: 'post',
          url: 'http://localhost:8080/data/list',
          params: {
            tablename: tablename
          }
        }).then(response => {
         console.log(response.data);
         this.cols = response.data.result.clo;
         this.tableData = response.data.result.tableData;
         // this.cols = JSON.parse(this.cols)
         this.tableData = JSON.parse(this.tableData)

          for(var i=0;i<this.tableData.length;i++){
            if(this.tableData[i].hasOwnProperty('createtime')){
              this.tableData[i].createtime=moment(this.tableData[i].createtime).format('YYYY-MM-DD HH:mm:ss');
            }
            if(this.tableData[i].hasOwnProperty('updatetime')){
              this.tableData[i].updatetime=moment(this.tableData[i].updatetime).format('YYYY-MM-DD HH:mm:ss');
            }
          }
          console.log(this.cols);
          console.log(this.tableData);
        }).catch(function (err) {
          //console.log(err);
        })
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
