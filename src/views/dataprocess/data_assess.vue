<template>
  <div>
    <navHeader class="header"></navHeader>
    <hr>
    <div>
      <menuSide></menuSide>
      <!--<el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" class="login-form">-->
      <el-main style="background-color: #ffffff; height: 500px">
        <div class="title-container">
          <h3 class="title">数据质量综合量化指标维度编辑</h3>
        </div>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">一级指标</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">二级指标1</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">二级指标2</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">完备性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate()">数据文件完备性</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-button plain @click="handleUpdate()">数据值完备性</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">一致性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate()">引用一致性</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-button plain @click="handleUpdate()">格式一致性</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">准确性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate()">数据语法准确性</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-button plain @click="handleUpdate()">数据范围准确性</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">唯一性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate()">记录唯一性</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">现实性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate()">基于时间段的时效性</el-button>
            </div>
          </el-col>
          <el-col :span="8" @click="handleUpdate()">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">可访问性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate()">数据格式的可访问性</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">保密性</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <el-button plain @click="handleUpdate()">非脆弱性</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :offset="8">
            <div class="grid-content bg-purple">
              <el-button type="primary" plain @click="save_edit">保存</el-button>
            </div>
          </el-col>
        </el-row>

        <!--评估参数设置的模态框-->
        <el-dialog title="二级指标评估参数设置" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-row>
              <el-col :span="8">
                <el-form-item label="表名">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
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
                    v-model="value8"
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
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
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
          regular: ''
        },
        dialogFormVisible: false,
        dialogVisible: false,
        options: [{
          value: '选项1',
          label: '邮箱规则'
        }, {
          value: '选项2',
          label: '邮编规则'
        }, {
          value: '选项3',
          label: '电话规则'
        }],
        value8: ''
      }
    },
    methods: {
      handleLogin() {
        this.$router.push('/dataprocess/datapro');
      },
      handleUpdate() {
        // this.temp = Object.assign({}, row) // copy obj
        // this.temp.timestamp = new Date(this.temp.timestamp)

        this.dialogFormVisible = true
        // this.$nextTick(() => {
        //   this.$refs['dataForm'].clearValidate()
        // })
      },
      save_edit() {
        this.dialogVisible = true
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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

  .page-info {
    background: #252525;
    padding: 1% 0;
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
