<template>
  <div>
    <hr>
    <el-main style="background-color: #ffffff; height: 700px">
      <div class="title-container">
        <h3 class="title">数据质量综合量化指标维度编辑</h3>
      </div>
      <br><br>
      <!--<div class="box">-->
      <!--<div class="left">-->

      <!--<el-row>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple" style="font-size: 18px;font-weight:700">一级指标</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple" style="font-size: 18px;font-weight:700">二级指标</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple" style="font-size: 18px;font-weight:700">操作</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <!--<el-row>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">完备性</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">-->
            <!--<el-button plain @click="handleUpdate('数据文件完备性')">数据文件完备性</el-button>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple">-->
            <!--<el-button plain @click="handleUpdate('数据值完备性')">数据值完备性</el-button>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <!--<el-row>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">一致性</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">-->
            <!--<el-button plain @click="handleUpdate('数据引用一致性')">数据引用一致性</el-button>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple">-->
            <!--<el-button plain @click="handleUpdate('数据格式一致性')">数据格式一致性</el-button>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <!--<el-row>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">依从性</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">-->
            <!--<el-button plain @click="handleUpdate('数据记录依从性')">数据记录依从性</el-button>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <!--<el-row>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">准确性</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">-->
            <!--<el-button plain @click="handleUpdate('数据范围准确性')">数据范围准确性</el-button>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <!--<el-row>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">唯一性</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">-->
            <!--<el-button plain @click="handleUpdate('数据记录唯一性')">数据记录唯一性</el-button>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <!--<el-row>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">现实性</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">-->
            <!--<el-button plain @click="handleUpdate('基于时间段的时效性')">基于时间段的时效性</el-button>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <!--<el-row>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">保密性</div>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<div class="grid-content bg-purple-light">-->
            <!--<el-button plain @click="handleUpdate('数据非脆弱性')">数据非脆弱性</el-button>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->


          <el-table
            :data="tableData"
            align="center"
            style="width: 100%"
          >
            <el-table-column
              label="序号"
              align="center"
              width="250px"
              type="index">
            </el-table-column>
            <el-table-column
              label="一级指标"
              width="250px"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.one }}</el-tag>
                </div>
                </el-popover>
                <!--<span style="margin-left: 10px">{{ scope.row.one }}</span>-->
              </template>
            </el-table-column>
            <el-table-column
              label="二级指标"
              width="250px"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top">
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.two }}</el-tag>
                  </div>
                </el-popover>
                <!--<span style="margin-left: 10px">{{ scope.row.two }}</span>-->
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              width="250px"
              align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleUpdate(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
      <br>
      <el-row >
        <!--<el-col :offset="8">-->
        <!--<div class="grid-content bg-purple">-->
        <!--<el-button type="primary" plain @click="addzb = true">添加指标</el-button>-->
        <!--</div>-->
        <!--</el-col>-->
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <el-button type="primary" plain @click="dialogVisible = true">提交</el-button>
            <el-button type="primary" plain @click="dialogVisible = true">取消</el-button>
          </div>
        </el-col>
      </el-row>

      <br><br>
      <hr><br>
        <el-table v-if="tableVisible==true"
          :data="dimensions"
          >
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
            label="字段名"
         >
          </el-table-column>
          <el-table-column
            prop="rule"
            label="规则约束"
           >
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="deleterow(scope.$index)" type="danger" icon="el-icon-delete" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>



      <!--评估参数设置的模态框-->
      <el-dialog title="二级指标评估参数设置" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-row>
            <el-col :span="8">
              <el-form-item label="指标名">
                <el-input v-model="form.dimensionname" autocomplete="off" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="2">
              <el-form-item label="规则约束">
                <!--其他情况-->
                <el-select
                  class="xlk"
                  v-if="form.dimensionname!='数据非脆弱性' && form.dimensionname!='基于时间段的时效性'"
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
                <!--数据非脆弱性的情况-->
                <el-cascader
                  v-if="form.dimensionname=='数据非脆弱性'"
                  :options="options2"
                  v-model="form.rule"
                  :show-all-levels="false"
                ></el-cascader>
                <!--基于时间段的时效性-->
                <el-date-picker
                  v-if="form.dimensionname=='基于时间段的时效性'"
                  v-model="form.rule"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="表名" v-if="form.dimensionname!='数据引用一致性'">
                <el-input v-model="form.tablename"></el-input>
              </el-form-item>
              <el-form-item label="引用表:被引用表" v-if="form.dimensionname=='数据引用一致性'">
                <el-input v-model="form.tablename"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="2">
              <el-form-item label="字段名" v-if="form.dimensionname!='数据引用一致性'">
                <el-input v-model="form.columnname"></el-input>
              </el-form-item>
              <el-form-item label="引用字段:被引用字段" v-if="form.dimensionname=='数据引用一致性'">
                <el-input v-model="form.columnname"></el-input>
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
    </el-main>
    </div>
</template>

<script>

  export default {
    name: "data_assess",
    data() {
      return {
        tableData: [{
          one: '完备性',
          two: '数据文件完备性'
        }, {
          one: '完备性',
          two: '数据值完备性'
        }, {
          one: '一致性',
          two: '数据引用一致性'
        }, {
          one: '一致性',
          two: '数据格式一致性'
        }, {
          one: '依从性',
          two: '数据记录依从性'
        }, {
          one: '准确性',
          two: '数据范围准确性'
        }, {
          one: '唯一性',
          two: '数据记录唯一性'
        }, {
          one: '现实性',
          two: '基于时间段的时效性'
        }, {
          one: '保密性',
          two: '数据非脆弱性'
        }],

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
        options2: [{
          value: '密码强度',
          label: '密码强度',
          children: [{
              value: '明文',
              label: '明文'
            }, {
              value: '哈希/加盐',
              label: '哈希/加盐'
            }, {
              value: 'MD5等加密算法',
              label: 'MD5等加密算法'
            }, {
            value: '复合加密',
            label: '复合加密'
          }, {
            value: '方式不明',
            label: '方式不明'
          }]
        }],

        options: [{
          value: '邮箱规则',
          label: '邮箱规则'
        }, {
          value: '邮编规则',
          label: '邮编规则'
        }, {
          value: '电话规则',
          label: '电话规则'
        }, {
          value: '忽略规则',
          label: '忽略规则'
        }],
        value8: '',
        vlogin0:'',
        result:''
      }
    },
    methods: {
      handleUpdate(target) {
        console.log(target)
        this.form.dimensionname = target.two
        // this.form.rule=''
        // this.form.tablename=''
        // this.form.columnname=''
        this.dialogFormVisible = true
      },
      deleterow(index) {
        console.log(index);
        this.dimensions.splice(index,1);
      },
      save_edit() {
        console.log(this.form)
        if(typeof this.form.rule == "object" && this.form.rule[0]!='密码强度'){
          this.form.rule = this.form.rule[0] + ':' + this.form.rule[1]
        }
        if(this.form.rule[0]=='密码强度'){
          this.form.rule = this.form.rule[1]
        }
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
      window.scrollTo(0,0);
      if(localStorage.getItem("User"))
      {
        this.userinfo.name=localStorage.getItem("User");
        this.vlogin0=true;
      }
    },
  }
</script>

<style scoped>

  .el-select{
    display: inline;
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
  /deep/ .el-input__icon:after {
     height: 0;
  }

</style>
