<template>
  <div>

      <el-main style="background-color: #ffffff; height: 700px">
        <div class="title-container">
          <h3 class="title">修改资料</h3>
        </div>
        <el-form :model="userinfo" status-icon :rules="rules" ref="userinfo" label-width="100px" class="login-form">
          <el-form-item label="用户名" prop="name">
            <el-input v-model.number="userinfo.name" disabled></el-input>
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
            <el-button type="primary" @click="submitForm(userinfo)">提交</el-button>
            <el-button @click="resetForm('userinfo')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </div>
</template>

<script>
  export default {
    name: "update_profile",
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
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
          company: '',
          mail:'',
          phone:''
        },
        rules: {
          name: [
            { validator: checkName, trigger: 'blur' }
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

        console.log(formName)
        console.log(localStorage.getItem("User"));
        console.log(formName.company);
        console.log(formName.mail);
        console.log(formName.phone);
        this.$ajax({
          method: 'post',
          url: 'http://localhost:8080/user/update_profile',
          params: {
            username: localStorage.getItem("User"),
            company: formName.company,
            email:formName.mail,
            telephone:formName.phone
          }
        }).then(response => {
          console.log(response.data);
          if(response.data.result==0){
            this.$message({
              type: 'success',
              message: '修改成功'
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
