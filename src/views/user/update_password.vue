<template>
  <div>
    <hr>
    <el-main style="background-color: #ffffff; height: 700px">
      <div class="title-container">
        <h3 class="title">修改密码</h3>
      </div>
      <el-form :model="userinfo" status-icon :rules="rules" ref="userinfo" label-width="100px" class="login-form">
        <el-form-item label="原始密码" prop="pass">
          <el-input type="password" clearable v-model="userinfo.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="更新密码" prop="newpass">
          <el-input type="password" clearable v-model="userinfo.newpass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码确认" prop="checkPass">
          <el-input type="password" clearable v-model="userinfo.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updatePassword(userinfo)">提交</el-button>
          <el-button @click="resetForm('userinfo')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script>
    export default {
      name: "update_password",
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          }
        };
        var validatePass1 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.userinfo.checkPass !== '') {
              this.$refs.userinfo.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.userinfo.newpass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          userinfo: {
            pass: '',
            newpass:'',
            checkPass:''
          },
          result: '',
          vlogin:false,
          rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            newpass: [
              { validator: validatePass1, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
          }
        }
      },
      methods:{
        updatePassword(tablename){
          console.log(tablename);
          this.$ajax({
            method: 'post',
            url: 'http://localhost:8080/user/update_password',
            params: {
              username: localStorage.getItem("User"),
              password: tablename.pass,
              new_password:tablename.newpass
            }
          }).then(response => {
            console.log(response.data);
            if(response.data.result==0){
              this.$message({
                type: 'success',
                message: '修改成功'
              });
            }
            else if (response.data.result==1){
              this.$message({
                type: 'error',
                message: '原密码错误'
              });
            }
            else {
              this.$message({
                type: 'error',
                message: '修改失败'
              });
            }
          }).catch(function (err) {
            console.log(err);
          })
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      mounted:function () {
        window.scrollTo(0,0);
        if(localStorage.getItem("User"))
        {
          this.userinfo.name=localStorage.getItem("User");
          this.vlogin=true;
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
