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
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
        <br>
        <br>
        <!--<el-table-->
          <!--:data="tableData"-->
          <!--style="width: 100%">-->
          <!--<el-table-column-->
            <!--prop="date"-->
            <!--label="字段1"-->
            <!--width="180">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--prop="name"-->
            <!--label="字段2"-->
            <!--width="180">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--prop="address"-->
            <!--label="字段3">-->
          <!--</el-table-column>-->
        <!--</el-table>-->
      </el-main>
        <!--<el-form-item>-->
          <!--<el-input v-model="userinfo.name"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
          <!--<el-input type="password" v-model="userinfo.passwd" autocomplete="off"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
          <!--<el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click="handleLogin">登陆</el-button>-->
        <!--</el-form-item>-->
      <!--</el-form>-->

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
        userinfo :{
          name:'',
        },
        input0:'',
        vlogin:this.$route.params.vlogin?this.$route.params.vlogin:'true',
        // tableData:{
        //
        // },
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
