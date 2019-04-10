<template>
  <div>
    <hr>
      <el-main style="background-color: #ffffff; height: 700px">
        <div class="title-container">
          <h3 class="title">用户管理</h3>
        </div>
        <el-button  @click="sysManage()">用户管理</el-button>
      </el-main>
    </div>
</template>

<script>

  export default {
    name: "user_manage",
    data(){
      return {

      }
    },
    mounted:function(){
      window.scrollTo(0,0);
      //this.scrollToRightTop();
    },
    methods:{
      sysManage(){
        this.$ajax({
          method: 'get',
          url: 'http://localhost:8080/data/user_manage',
          /*params: {
            // tablename: tablename
          }*/
        }).then(response => {
         console.log(response.data);

          if (this.result == 0) {
            this.$message({
              type: 'success',
              message: '管理成功'
            });
          } else if(this.result==1){
            this.$message({
              type: 'error',
              message: '管理失败'
            });
          }
        }).catch(function (err) {
          console.log(err);
        })
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
