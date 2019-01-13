<template>
  <div>
    <navHeader class="header"></navHeader>
    <hr>
    <div>
      <menuSide></menuSide>
      <!--<el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" class="login-form">-->
      <el-main style="background-color: #ffffff; height: 500px">
        <div class="title-container">
          <h3 class="title">数据质量综合评价指标权重</h3>
        </div>
        <el-row>
          <el-col :span="3">
            <div class="grid-content bg-purple">完备性</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">一致性</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">准确性</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">唯一性</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">现实性</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light">可访问性</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">保密性</div>
          </el-col>
        </el-row>

        <el-row v-if="editall==false">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                v-model="value1"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                v-model="value2"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                v-model="value3"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                v-model="value4"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                v-model="value5"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options5"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light">
              <el-select
                v-model="value6"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options6"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                v-model="value7"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options7"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>

        <el-row v-if="editall==true">
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.value1}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.value2}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.value3}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.value4}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.value5}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light">{{this.value6}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.value7}}</div>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="3" :offset="14">
            <div class="grid-content bg-purple">
              <el-button type="primary" plain @click="saveall">确定</el-button>
            </div>
          </el-col>

          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button type="primary" plain @click="clearall">恢复默认</el-button>
            </div>
          </el-col>
        </el-row>


      </el-main>

    </div>

    <!--<hr>-->
    <!--<navFooter class="footer"></navFooter>-->
  </div>

</template>

<script>
  import navHeader from '@/views/components/nav'
  import navFooter from '@/views/components/footer'
  import menuSide from '@/views/components/menuside'

  export default {
    name: "weight_allo",
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
        options1: [{
          value: '0.1',
          label: '0.1'
        }, {
          value: '0.2',
          label: '0.2'
        }, {
          value: '0.3',
          label: '0.3'
        }, {
          value: '0.4',
          label: '0.4'
        }, {
          value: '0.5',
          label: '0.5'
        }, {
          value: '0.6',
          label: '0.6'
        }, {
          value: '0.7',
          label: '0.7'
        }, {
          value: '0.8',
          label: '0.8'
        }, {
          value: '0.9',
          label: '0.9'
        }, {
          value: '1.0',
          label: '1.0'
        }],
        options2: [{
          value: '0.1',
          label: '0.1'
        }, {
          value: '0.2',
          label: '0.2'
        }, {
          value: '0.3',
          label: '0.3'
        }, {
          value: '0.4',
          label: '0.4'
        }, {
          value: '0.5',
          label: '0.5'
        }, {
          value: '0.6',
          label: '0.6'
        }, {
          value: '0.7',
          label: '0.7'
        }, {
          value: '0.8',
          label: '0.8'
        }, {
          value: '0.9',
          label: '0.9'
        }, {
          value: '1.0',
          label: '1.0'
        }],
        options3: [{
          value: '0.1',
          label: '0.1'
        }, {
          value: '0.2',
          label: '0.2'
        }, {
          value: '0.3',
          label: '0.3'
        }, {
          value: '0.4',
          label: '0.4'
        }, {
          value: '0.5',
          label: '0.5'
        }, {
          value: '0.6',
          label: '0.6'
        }, {
          value: '0.7',
          label: '0.7'
        }, {
          value: '0.8',
          label: '0.8'
        }, {
          value: '0.9',
          label: '0.9'
        }, {
          value: '1.0',
          label: '1.0'
        }],
        options4: [{
          value: '0.1',
          label: '0.1'
        }, {
          value: '0.2',
          label: '0.2'
        }, {
          value: '0.3',
          label: '0.3'
        }, {
          value: '0.4',
          label: '0.4'
        }, {
          value: '0.5',
          label: '0.5'
        }, {
          value: '0.6',
          label: '0.6'
        }, {
          value: '0.7',
          label: '0.7'
        }, {
          value: '0.8',
          label: '0.8'
        }, {
          value: '0.9',
          label: '0.9'
        }, {
          value: '1.0',
          label: '1.0'
        }],
        options5: [{
          value: '0.1',
          label: '0.1'
        }, {
          value: '0.2',
          label: '0.2'
        }, {
          value: '0.3',
          label: '0.3'
        }, {
          value: '0.4',
          label: '0.4'
        }, {
          value: '0.5',
          label: '0.5'
        }, {
          value: '0.6',
          label: '0.6'
        }, {
          value: '0.7',
          label: '0.7'
        }, {
          value: '0.8',
          label: '0.8'
        }, {
          value: '0.9',
          label: '0.9'
        }, {
          value: '1.0',
          label: '1.0'
        }],
        options6: [{
          value: '0.1',
          label: '0.1'
        }, {
          value: '0.2',
          label: '0.2'
        }, {
          value: '0.3',
          label: '0.3'
        }, {
          value: '0.4',
          label: '0.4'
        }, {
          value: '0.5',
          label: '0.5'
        }, {
          value: '0.6',
          label: '0.6'
        }, {
          value: '0.7',
          label: '0.7'
        }, {
          value: '0.8',
          label: '0.8'
        }, {
          value: '0.9',
          label: '0.9'
        }, {
          value: '1.0',
          label: '1.0'
        }],
        options7: [{
          value: '0.1',
          label: '0.1'
        }, {
          value: '0.2',
          label: '0.2'
        }, {
          value: '0.3',
          label: '0.3'
        }, {
          value: '0.4',
          label: '0.4'
        }, {
          value: '0.5',
          label: '0.5'
        }, {
          value: '0.6',
          label: '0.6'
        }, {
          value: '0.7',
          label: '0.7'
        }, {
          value: '0.8',
          label: '0.8'
        }, {
          value: '0.9',
          label: '0.9'
        }, {
          value: '1.0',
          label: '1.0'
        }],
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        editall:false
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
      saveall(){
        this.editall=true;
      },
      clearall(){
        this.editall=false;
        // this.editall='false';
        this.value1='';
        this.value2='';
        this.value3='';
        this.value4='';
        this.value5='';
        this.value6='';
        this.value7='';
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
