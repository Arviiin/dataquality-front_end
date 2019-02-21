<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <menuSide :vlogin="this.vlogin"></menuSide>
      <el-main style="background-color: #ffffff; height: 500px">
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
      methods: {
        submitForm(formName) {
          //后台接口
          this.$ajax.get('http://localhost:8080/login/'
            + this.userinfo.name + '/' + this.userinfo.pass)
            .then(response => {
              console.log(response.data)
              if (response.data == 0) {
                this.result = 0;
                // this.$message({
                //   type: 'success',
                //   message: '登陆成功'
                // });
                // this.vlogin=true;
                // this.$router.push({
                //   path: '/login/loginsuc',
                //   name: 'loginsucess',
                //   params: {
                //     name: 'loginsucess',
                //     dataObj: this.userinfo.name,
                //     vlogin:this.vlogin
                //   }
                // })

              } else if(response.data == 1){
                this.result = 1;
                // this.$message({
                //   type: 'error',
                //   message: '用户名不存在'
                // });
              }
              else{
                this.result = 2;
                // this.$message({
                //   type: 'error',
                //   message: '密码错误'
                // });
              }
            });
          // if (this.userinfo.name == "admin" && this.userinfo.pass == "admin") {
          //   this.vlogin=true;
          //   // this.$router.push('/')
          //   this.$router.push({
          //     path: '/',
          //     name: 'home',
          //     params: {
          //       name: 'home',
          //       dataObj: this.userinfo,
          //       vlogin:this.vlogin
          //     }
          //   })
          //
          // }

        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },

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
