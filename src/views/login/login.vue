<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin0"></navHeader>
    <hr>
    <div>
      <div class="page-info">
        <div class="container">
          <a href="home.vue">home/</a>
          <h2>Login</h2>
        </div>
      </div>
      <h1>登陆你的账户</h1>
      <el-form :model="userinfo" status-icon :rules="rules" ref="userinfo" label-width="100px" class="login-form">
        <!--<div class="title-container">-->
          <!--<h3 class="title">登陆界面</h3>-->
        <!--</div>-->
        <el-form-item label="用户名" prop="name">
          <el-input v-model.number="userinfo.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" clearable v-model="userinfo.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(userinfo)">登陆</el-button>
          <el-button @click="resetForm('userinfo')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <hr>
    <navFooter class="footer"></navFooter>
  </div>

</template>

<script>
import navHeader from '@/views/components/nav'
import navFooter from '@/views/components/footer'

    export default {
      name: "login",
      components: {
        navHeader,
        navFooter
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
          vlogin0:false,
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
      methods: {
        submitForm(formName) {
          //后台接口
          this.$ajax.get('http://localhost:8080/login/'
            + this.userinfo.name + '/' + this.userinfo.pass)
            .then(response => {
              console.log(response.data)
              if (response.data == 0) {
                this.result = 0;

              } else if(response.data == 1){
                this.result = 1;
              }
              else{
                this.result = 2;
              }
            });

        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },

      },//method结束

      watch: {
        result: function () {
          {
            if (this.result == 0) {
              localStorage.setItem('User', this.userinfo.name);
              this.$message({
                type: 'success',
                message: '登陆成功'
              });
              this.vlogin0=true;
              this.$router.push({
                path: '/login/loginsuc',
                name: 'loginsucess',
                params: {
                  name: 'loginsucess',
                  dataObj: this.userinfo.name,
                  vlogin:this.vlogin0
                }
              })
            }
            else if(this.result==1){
              this.$message({
                type: 'error',
                message: '用户名不存在'
              });
            }
            else{
              this.$message({
                type: 'error',
                message: '密码错误'
              });
            }
          }
        }
      }//watch结束
    }
</script>

<style scoped>
  .login-form {
    left: 0;
    right: 0;
    width: 500px;
    max-width: 100%;
    padding: 35px 35px;
    margin: 15px auto;
  }
  .page-info{
    background:#292929;
    padding:1% 0;
    margin: 0 -15px;
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

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin:0 30px;

  }
</style>
