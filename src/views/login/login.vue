<template>
  <div>
    <navHeader class="header" :vlogin="this.vlogin"></navHeader>
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
          <el-button type="primary" @click="submitForm('userinfo')">提交</el-button>
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
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
              // this.$confirm('是否确认登陆?', '确认登陆', {
              //   confirmButtonText: '确认',
              //   cancelButtonText: '取消',
              //   type: 'warning'
              // }).then(() => {
              //   this.$ajax({
              //     method: 'post',
              //     url: 'http://localhost:8080/orderAudit/saveSupplierAudit',
              //     data: {
              //       "username": this.userinfo.name,
              //       "password": this.userinfo.pass,
              //
              //     }
              //   }).then(response => {
              //     this.$message({
              //       type: 'success',
              //       message: '注册成功'
              //     });
              //     let hopRouter
              //       = '/'
              //     this.$router.replace(hopRouter);
              //   }).catch(function (err) {
              //     console.log(err);
              //   })
              // }).catch(() => {
              //   this.$message({
              //     type: 'info',
              //     message: '取消'
              //   });
              // });

            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },


        handleLogin() {
          //后台接口
          // this.$ajax.get('http://localhost:8080/user/login/' + this.userinfo.name + '/' + this.userinfo.pass)
          //   .then(response => {
          //     if (response.data === '') {
          //       this.result = 0;
          //     } else {
          //       this.result = response.data;
          //     }
          //   });
          if (this.userinfo.name == "admin" && this.userinfo.pass == "admin") {
            this.vlogin=true;
            // this.$router.push('/')
            this.$router.push({
              path: '/',
              name: 'home',
              params: {
                name: 'home',
                dataObj: this.userinfo,
                vlogin:this.vlogin
              }
            })

          }
        },
        // watch: {
        //   result: function () {
        //     //     console.log(this.result);
        //     //     if (this.result !== null && this.result !== -1 && this.result) {
        //     //       localStorage.setItem('User', this.userName);
        //     //       localStorage.setItem('MenuId', this.result.menuId);
        //     //       if (this.result.company !== null) {
        //     //         localStorage.setItem('Company', this.result.company);
        //     //       }else {
        //     //         localStorage.setItem('Company', '海王');
        //     //       }
        //     //     } else {
        //     //       this.$message.error('用户名密码错误');
        //     //       this.userName = '';
        //     //       this.password = '';
        //     //       this.result = -1;
        //     //     }
        //     //     this.$router.push('/home');
        //     //   }
        //     // }
        //     console.log(this.result);
        //     if (this.userinfo.name == "admin" && this.userinfo.pass == "admin") {
        //       this.$router.push('/dataprocess/datapro');
        //     }
        //     else if (this.result !== null && this.result !== -1 && this.result) {
        //
        //     }
        //     else {
        //
        //     }
        //   }
        // }
      }
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
