<template>
  <div>
    <navHeader class="header" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <!--<div class="page-info page-overview">-->
        <!--<div class="container">-->
          <!--<a href="HelloWorld.vue">Home/</a>-->
          <!--<h2>Login</h2>-->
        <!--</div>-->
      <!--</div>-->
      <el-form :model="userinfo" status-icon :rules="rules" ref="userinfo" class="login-form">
        <div class="title-container">
          <h3 class="title">登陆界面</h3>
        </div>
        <el-form-item>
          <el-input v-model="userinfo.name" label="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input type="password" v-model="userinfo.passwd" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click="handleLogin">登陆</el-button>
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
        return {
          userinfo: {
            name: 'admin',
            passwd: 'admin',
          },
          result: '',
          vlogin:false,
        }
      },
      methods: {
        handleLogin() {
          //后台接口
          // this.$ajax.get('http://localhost:8080/user/login/' + this.userinfo.name + '/' + this.userinfo.passwd)
          //   .then(response => {
          //     if (response.data === '') {
          //       this.result = 0;
          //     } else {
          //       this.result = response.data;
          //     }
          //   });
          if (this.userinfo.name == "admin" && this.userinfo.passwd == "admin") {
            this.vlogin=true;
            // this.$router.push('/')
            this.$router.push({
              path: '/',
              name: 'HelloWorld',
              params: {
                name: 'HelloWorld',
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
        //     if (this.userinfo.name == "admin" && this.userinfo.passwd == "admin") {
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
