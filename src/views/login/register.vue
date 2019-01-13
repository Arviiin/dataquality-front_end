<template>
  <div>
    <navHeader class="header" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <div class="page-info">
        <div class="container">
          <a href="home.vue">home/</a>
          <h2>Register</h2>
        </div>
      </div>
      <h1>注册新账户</h1>
      <el-form :model="userinfo" status-icon :rules="rules" ref="userinfo" label-width="100px" class="login-form">
        <!--<div class="title-container">-->
          <!--<h3 class="title">注册界面</h3>-->
        <!--</div>-->
        <el-form-item label="用户名" prop="name">
          <el-input v-model.number="userinfo.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" clearable v-model="userinfo.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" clearable v-model="userinfo.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司" prop="company">
          <el-input v-model.number="userinfo.company" clearable></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="mail">
          <el-input v-model.number="userinfo.mail" clearable></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model.number="userinfo.phone" clearable></el-input>
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
    name: "register",
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
        } else if (value !== this.userinfo.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkCompany = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('公司名不能为空'));
        }
      };
      var checkMail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }
      };
      return {
        vlogin:false,
        userinfo: {
          name:'',
          pass: '',
          checkPass: '',
          company: '',
          mail:'',
          phone:''
        },
        rules: {
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          company: [
            { validator: checkCompany, trigger: 'blur' }
          ],
          mail: [
            { validator: checkMail, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            //审核通过
              this.$confirm('是否确认注册?', '确认注册', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                //审核通过改状态变为1
                this.$ajax({
                  method: 'post',
                  url: 'http://localhost:8080/reg',
                  data: {
                    "username": this.userinfo.name,
                    "password": this.userinfo.pass,
                    "company": this.userinfo.company,
                    "email": this.userinfo.mail,
                    "telephone": this.userinfo.phone
                  }
                }).then(response => {
                  this.$message({
                    type: 'success',
                    message: '注册成功'
                  });
                  let hopRouter
                    = '/login/login'
                  this.$router.replace(hopRouter);
                }).catch(function (err) {
                  console.log(err);
                })
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '取消'
                });
              });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
