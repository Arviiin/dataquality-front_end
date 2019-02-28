<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <menuSide :vlogin="this.vlogin"></menuSide>
      <el-main style="background-color: #ffffff; height: 1000px">
        <div class="title-container">
          <h3 class="title">修改密码</h3>
        </div>
        <el-form :model="userinfo" status-icon :rules="rules" ref="userinfo" label-width="100px" class="login-form">
          <el-form-item label="原始密码" prop="pass">
            <el-input type="password" clearable v-model="userinfo.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="更新密码" prop="pass">
            <el-input type="password" clearable v-model="userinfo.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码确认" prop="pass">
            <el-input type="password" clearable v-model="userinfo.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(userinfo)">提交</el-button>
            <el-button @click="resetForm('userinfo')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </div>
  </div>
</template>

<script>
  import navHeader from '@/views/components/nav'
  import menuSide from '@/views/components/menuside'
    export default {
      name: "update_password",
      components:{
        navHeader,
        menuSide
      },
      data() {
        var checkName = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('用户名不能为空'));
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          }
        };
        return {
          userinfo: {
            name:'',
            pass: '',
          },
          result: '',
          vlogin:false,
          rules: {
            name: [
              { validator: checkName, trigger: 'blur' }
            ],
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
          }
        }
      },
      methods:{
        updatePassword(tablename){
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
              if(this.tableData[i].hasOwnProperty('createtime') && this.tableData[i].createtime != null && this.tableData[i].createtime != ""){
                //this.tableData[i].createtime=moment(this.tableData[i].createtime).format('YYYY-MM-DD HH:mm:ss');
                this.tableData[i].createtime= formatDate(new Date(this.tableData[i].createtime), 'yyyy.MM.dd hh:mm:ss')

              }
              if(this.tableData[i].hasOwnProperty('updatetime') && this.tableData[i].updatetime != null && this.tableData[i].updatetime != ""){
                //this.tableData[i].updatetime=moment(this.tableData[i].updatetime).format('YYYY-MM-DD HH:mm:ss');
                this.tableData[i].updatetime= formatDate(new Date(this.tableData[i].updatetime), 'yyyy.MM.dd hh:mm:ss')

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
