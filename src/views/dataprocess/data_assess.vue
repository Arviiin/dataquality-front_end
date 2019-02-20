<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin0"></navHeader>
    <hr>
    <div>
      <menuSide></menuSide>
      <!--<el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" class="login-form">-->
      <el-main style="background-color: #ffffff; height: 500px">
        <div class="title-container">
          <h2 class="title">数据质量综合量化指标维度编辑</h2>
        </div>
        <br>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple" style="font-size: 18px;font-weight:700">一级指标</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple" style="font-size: 18px;font-weight:700">二级指标1</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple" style="font-size: 18px;font-weight:700">二级指标2</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">完备性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate('数据文件完备性')">数据文件完备性</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-button plain @click="handleUpdate('数据值完备性')">数据值完备性</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">一致性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate('数据引用一致性')">数据引用一致性</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-button plain @click="handleUpdate('数据格式一致性')">数据格式一致性</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">依从性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate('数据记录依从性')">数据记录依从性</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">准确性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate('数据范围准确性')">数据范围准确性</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">唯一性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate('数据记录唯一性')">数据记录唯一性</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">现实性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate('基于时间段的时效性')">基于时间段的时效性</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">保密性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate('数据非脆弱性')">数据非脆弱性</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="tableVisible==true">
          <el-col :offset="10">
            <div class="grid-content bg-purple">
              <el-button type="primary" plain @click="dialogVisible = true">提交</el-button>
            </div>
          </el-col>
        </el-row>

        <!--评估参数设置的模态框-->
        <el-dialog title="二级指标评估参数设置" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-row>
              <el-col :span="8">
                <el-form-item label="表名">
                  <el-input v-model="form.tablename" autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :offset="6">
                <el-form-item label="字段名">
                  <el-input v-model="form.columnname" autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="规则约束">
                  <el-select
                    v-model="form.rule"
                    filterable
                    allow-create
                    default-first-option
                    placeholder="请选择规则约束">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="save_edit">确 定</el-button>
          </div>
        </el-dialog>

        <!--保存弹出来的提醒-->
        <el-dialog
          title="提醒"
          :visible.sync="dialogVisible"
          width="30%"
          center
          :before-close="handleClose">
          <span>是否保存已编辑信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="save_all">确 定</el-button>
          </span>
        </el-dialog>
<hr v-if="tableVisible==true"/>
        <el-table v-if="tableVisible==true"
          :data="dimensions"
          style="width: 100%">
          <el-table-column
            prop="dimensionname"
            label="指标名"
            >
          </el-table-column>
          <el-table-column
            prop="tablename"
            label="表名"
           >
          </el-table-column>
          <el-table-column
          prop="columnname"
          label="字段名">
        </el-table-column>
          <el-table-column
            prop="rule"
            label="规则约束">
          </el-table-column>
          <!--<el-table-column-->
            <!--label="删除">-->
            <!--<i class="el-icon-delete"></i>-->
          <!--</el-table-column>-->
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="deleterow(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>

      </el-main>
    </div>
  </div>

</template>

<script>
  import navHeader from '@/views/components/nav'
  import navFooter from '@/views/components/footer'
  import menuSide from '@/views/components/menuside'

  export default {
    name: "data_assess",
    components: {
      navHeader,
      navFooter,
      menuSide
    },
    data() {
      return {
        userinfo: {
          name: '',
          passwd: '',
        },
        form: {
          tablename: '',
          columnname: '',
          rule: '',
          dimensionname:''
        },
        tableVisible:'false',
        newForm:{},
        dimensions:[],
        dialogFormVisible: false,
        dialogVisible: false,
        options: [{
          value: '邮箱规则',
          label: '邮箱规则'
        }, {
          value: '邮编规则',
          label: '邮编规则'
        }, {
          value: '电话规则',
          label: '电话规则'
        }],
        value8: '',
        vlogin0:''
      }
    },
    methods: {
      handleUpdate(target) {
        console.log(target)
        this.form.dimensionname = target
        this.dialogFormVisible = true
      },
      deleterow(row) {
        console.log(row);
        this.dimensions.pop(row)
      },
      save_edit() {
        console.log(this.form)
        this.newForm = Object.assign({}, this.form)
        this.form={}
        this.dialogFormVisible = false
        this.dimensions.push(this.newForm)
        console.log(this.dimensions)
        this.tableVisible = true
      },
      save_all() {
        this.dialogVisible = false
        console.log(this.dimensions)
        this.$ajax.post('http://localhost:8080/data/dimension',
          JSON.stringify(this.dimensions),
          {headers: {'Content-Type': 'application/json;charset=UTF-8'}}
        ).then(response => {
          console.log(response.data);
          // if(response.data.status=="success"){
          //   console.log("注册成功");
          //   this.$message({
          //     type: 'success',
          //     message: '注册成功'
          //   });
          //   let hopRouter
          //     = '/login/login'
          //   this.$router.replace(hopRouter);
          // }
          // else{
          //   console.log("注册失败");
          //   this.$message({
          //     type: 'error',
          //     message: response.data.msg
          //   });
          // }
        }).catch(function (err) {
          console.log(err);
        })
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
    mounted:function () {
      if(localStorage.getItem("User"))
      {
        this.userinfo.name=localStorage.getItem("User");
        this.vlogin0=true;
      }
    }
  }
</script>

<style scoped>
  .el-button{
    margin-top: -100px;
  }
  .page-info a {
    color: #C6C6C6;
    font-size: 1em;
    text-align: left;
    display: block;
    text-decoration: none;
  }
  .page-info h2 {
    text-align: left;
    color: deepskyblue;
  }
  .page-info a:hover {
    color: #fff;
  }
  .page-overview {
    margin-bottom: 40px;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
