<template>
  <div>
    <hr>
      <el-main style="background-color: #ffffff; height: 700px">
        <div class="title-container">
          <h3 class="title">邮件管理</h3>
        </div>
        <br/><br/>
        <template>
          <el-table
            :data="tableData"
            style="width: 100%"
            max-height="500">
            <el-table-column
              fixed
              prop="id"
              label="编号"
              width="80">
            </el-table-column>
            <el-table-column
              prop="fromname"
              label="发送方"
              width="200">
            </el-table-column>
            <el-table-column
              prop="fromemail"
              label="发送方邮箱"
              width="250">
            </el-table-column>
            <el-table-column
              prop="toname"
              label="接收方"
              width="120">
            </el-table-column>
            <el-table-column
              prop="toemail"
              label="接收方邮箱"
              width="200">
            </el-table-column>
            <el-table-column
              prop="sendtime"
              label="发送时间"
              width="180">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>

      </el-main>
    </div>
</template>

<script>

  export default {
    name: "email_record",
    data(){
      return {
        tableData: [{
          id: '2016-05-03',
          fromname: '王小虎',
          fromemail: '上海',
          toname: '普陀区',
          toemail: '上海市普陀区金沙江路 1518 弄',
          sendtime: 200333
        }, {
          id: '2016-05-02',
          fromname: '王小虎',
          fromemail: '上海',
          toname: '普陀区',
          toemail: '上海市普陀区金沙江路 1518 弄',
          sendtime: 200333
        }]
      }
    },
    mounted:function(){
      window.scrollTo(0,0);
    },
    created(){
      this.$ajax({
        method: 'get',
        url: 'http://localhost:8080/data/get_send_email_record',
      }).then(response => {
        console.log(response.data);
        if (response.data.status == "ok") {
          this.tableData=response.data.result;
        } else{
          this.$message({
            type: 'error',
            message: '数据获取失败'
          });
        }
      }).catch(function (err) {
        console.log(err);
      })

    },
    methods:{
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      sendEmail(){
        this.$ajax({
          method: 'post',
          url: 'http://localhost:8080/data/send_email',
          /*params: {
            // tablename: tablename
          }*/
        }).then(response => {
          console.log(response.data);
          if (response.data.result == 1) {
            this.$message({
              type: 'success',
              message: '发送成功'
            });
          } else{
            this.$message({
              type: 'error',
              message: '发送失败'
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
