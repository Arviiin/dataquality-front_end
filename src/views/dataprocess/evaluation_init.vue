<template>
  <div>
    <hr>
      <el-main style="background-color: #ffffff; height: 700px">
        <div class="title-container">
          <h3 class="title">数据质量评价初始配置</h3>
        </div>
        <el-form :model="userinfo" status-icon :rules="rules" ref="userinfo" label-width="100px" class="login-form">
          <el-form-item label="评价人员" prop="name">
            <el-input v-model="userinfo.name" disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址" prop="email">
            <el-input v-model="userinfo.email" placeholder="请输入邮箱地址，默认则把评价报告发送到当前用户邮箱" clearable></el-input>
          </el-form-item>
          <el-form-item label="评价名称" prop="evaluation_name">
            <el-input v-model="userinfo.evaluation_name" clearable></el-input>
          </el-form-item>
          <el-form-item label="评价备注" prop="evaluation_remark">
            <el-input v-model="userinfo.evaluation_remark" clearable></el-input>
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
    name: "evaluation_init",
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('评价人员姓名不能为空'));
        }
      };
      //允许不输入，但不允许输错
      var checkEmail = (rule, value, callback) => {
        if (value === '') {
          callback();
        } else {
          if (value !== '') {
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的邮箱'));
            }
          }
          callback();
        }
      };
      var checkEvaluationName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('评价名称不能为空'));
        }else {
          callback();
        }
      };
      return {
        vlogin:false,
        userinfo: {
          name:'',
          email:'',
          evaluation_name: '',
          evaluation_remark:''
        },
        rules: {
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          evaluation_name: [
            { validator: checkEvaluationName, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        console.log(formName)
        console.log(localStorage.getItem("User"));
        console.log(formName.email);
        console.log(formName.evaluation_name);
        console.log(formName.evaluation_remark);

        this.$ajax({
          method: 'post',
          url: 'http://localhost:8080/data/evaluation_init',
          params: {
            username: localStorage.getItem("User"),
            email:formName.email,
            evaluation_name: formName.evaluation_name,
            evaluation_remark:formName.evaluation_remark
          }
        }).then(response => {
          console.log(response.data);
          if(response.data.result==1){
            this.$message({
              type: 'success',
              message: '提交成功'
            });
          } else {
            this.$message({
              type: 'error',
              message: '提交失败'
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
      if(localStorage.getItem("User")){
        this.userinfo.name=localStorage.getItem("User");
        //this.userinfo.email=22
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
