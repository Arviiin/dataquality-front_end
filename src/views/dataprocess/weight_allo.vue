<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <menuSide></menuSide>
      <!--<el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" class="login-form">-->
      <el-main style="background-color: #ffffff; height: 700px">
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
            <div class="grid-content bg-purple">依从性</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">准确性</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">唯一性</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light">现实性</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">保密性</div>
          </el-col>
        </el-row>

        <el-row v-if="editall==false">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                @change="change"
                v-model="weightValue.completeness"
                size="small"
                minlength="4"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item"
                  :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                @change="change"
                v-model="weightValue.consistency"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item"
                  :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                @change="change"
                v-model="weightValue.compliance"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options3"
                  :key="item"
                  :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                @change="change"
                v-model="weightValue.accuracy"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options4"
                  :key="item"
                  :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                @change="change"
                v-model="weightValue.uniqueness"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options5"
                  :key="item"
                  :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light">
              <el-select
                @change="change"
                v-model="weightValue.timeliness"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options6"
                  :key="item"
                  :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-select
                @change="change"
                v-model="weightValue.vulnerability"
                size="small"
                filterable
                allow-create
                default-first-option
                placeholder="请选择">
                <el-option
                  v-for="item in options7"
                  :key="item"
                  :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>

        <el-row v-if="editall==true">
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.weightValue.completeness}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.weightValue.consistency}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.weightValue.compliance}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.weightValue.accuracy}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.weightValue.uniqueness}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light">{{this.weightValue.timeliness}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">{{this.weightValue.vulnerability}}</div>
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
        options1: [0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],
        options2: [0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],
        options3: [0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],
        options4: [0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],
        options5: [0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],
        options6: [0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],
        options7: [0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],

        // options1: [{
        //   value: 0.1,
        //   label: 0.1
        // }, {
        //   value: 0.2,
        //   label: 0.2
        // }, {
        //   value: 0.3,
        //   label: 0.3
        // }, {
        //   value: 0.4,
        //   label: 0.4
        // }, {
        //   value: 0.5,
        //   label: 0.5
        // }, {
        //   value: 0.6,
        //   label: 0.6
        // }, {
        //   value: 0.7,
        //   label: 0.7
        // }, {
        //   value: 0.8,
        //   label: 0.8
        // }, {
        //   value: 0.9,
        //   label: 0.9
        // }, {
        //   value: 1.0,
        //   label: 1.0
        // }],
        // options2: [{
        //   value: 0.1,
        //   label: 0.1
        // }, {
        //   value: 0.2,
        //   label: 0.2
        // }, {
        //   value: 0.3,
        //   label: 0.3
        // }, {
        //   value: 0.4,
        //   label: 0.4
        // }, {
        //   value: 0.5,
        //   label: 0.5
        // }, {
        //   value: 0.6,
        //   label: 0.6
        // }, {
        //   value: 0.7,
        //   label: 0.7
        // }, {
        //   value: 0.8,
        //   label: 0.8
        // }, {
        //   value: 0.9,
        //   label: 0.9
        // }, {
        //   value: 1.0,
        //   label: 1.0
        // }],
        // options3: [{
        //   value: 0.1,
        //   label: 0.1
        // }, {
        //   value: 0.2,
        //   label: 0.2
        // }, {
        //   value: 0.3,
        //   label: 0.3
        // }, {
        //   value: 0.4,
        //   label: 0.4
        // }, {
        //   value: 0.5,
        //   label: 0.5
        // }, {
        //   value: 0.6,
        //   label: 0.6
        // }, {
        //   value: 0.7,
        //   label: 0.7
        // }, {
        //   value: 0.8,
        //   label: 0.8
        // }, {
        //   value: 0.9,
        //   label: 0.9
        // }, {
        //   value: 1.0,
        //   label: 1.0
        // }],
        // options4: [{
        //   value: 0.1,
        //   label: 0.1
        // }, {
        //   value: 0.2,
        //   label: 0.2
        // }, {
        //   value: 0.3,
        //   label: 0.3
        // }, {
        //   value: 0.4,
        //   label: 0.4
        // }, {
        //   value: 0.5,
        //   label: 0.5
        // }, {
        //   value: 0.6,
        //   label: 0.6
        // }, {
        //   value: 0.7,
        //   label: 0.7
        // }, {
        //   value: 0.8,
        //   label: 0.8
        // }, {
        //   value: 0.9,
        //   label: 0.9
        // }, {
        //   value: 1.0,
        //   label: 1.0
        // }],
        // options5: [{
        //   value: 0.1,
        //   label: 0.1
        // }, {
        //   value: 0.2,
        //   label: 0.2
        // }, {
        //   value: 0.3,
        //   label: 0.3
        // }, {
        //   value: 0.4,
        //   label: 0.4
        // }, {
        //   value: 0.5,
        //   label: 0.5
        // }, {
        //   value: 0.6,
        //   label: 0.6
        // }, {
        //   value: 0.7,
        //   label: 0.7
        // }, {
        //   value: 0.8,
        //   label: 0.8
        // }, {
        //   value: 0.9,
        //   label: 0.9
        // }, {
        //   value: 1.0,
        //   label: 1.0
        // }],
        // options6: [{
        //   value: 0.1,
        //   label: 0.1
        // }, {
        //   value: 0.2,
        //   label: 0.2
        // }, {
        //   value: 0.3,
        //   label: 0.3
        // }, {
        //   value: 0.4,
        //   label: 0.4
        // }, {
        //   value: 0.5,
        //   label: 0.5
        // }, {
        //   value: 0.6,
        //   label: 0.6
        // }, {
        //   value: 0.7,
        //   label: 0.7
        // }, {
        //   value: 0.8,
        //   label: 0.8
        // }, {
        //   value: 0.9,
        //   label: 0.9
        // }, {
        //   value: 1.0,
        //   label: 1.0
        // }],
        // options7: [{
        //   value: 0.1,
        //   label: 0.1
        // }, {
        //   value: 0.2,
        //   label: 0.2
        // }, {
        //   value: 0.3,
        //   label: 0.3
        // }, {
        //   value: 0.4,
        //   label: 0.4
        // }, {
        //   value: 0.5,
        //   label: 0.5
        // }, {
        //   value: 0.6,
        //   label: 0.6
        // }, {
        //   value: 0.7,
        //   label: 0.7
        // }, {
        //   value: 0.8,
        //   label: 0.8
        // }, {
        //   value: 0.9,
        //   label: 0.9
        // }, {
        //   value: 1.0,
        //   label: 1.0
        // }],
      weightValue: {
          completeness: null,
          consistency: null,
          compliance: null,
          accuracy: null,
          uniqueness: null,
          timeliness: null,
          vulnerability: null
      },
        editall:false,
        vlogin:'',
      }
    },
    methods: {
      change(){
        if(this.weightValue.completeness*1000 %1 !== 0 &&this.weightValue.completeness!=null){
          this.weightValue.completeness=Math.round(this.weightValue.completeness*1000)/1000;
        }
        if(this.weightValue.consistency*1000 %1 !== 0 &&this.weightValue.consistency!=null){
          this.weightValue.consistency=Math.round(this.weightValue.consistency*1000)/1000;
        }
        if(this.weightValue.compliance*1000 %1 !== 0 &&this.weightValue.compliance!=null){
          this.weightValue.compliance=Math.round(this.weightValue.compliance*1000)/1000;
        }
        if(this.weightValue.accuracy*1000 %1 !== 0 &&this.weightValue.accuracy!=null){
          this.weightValue.accuracy=Math.round(this.weightValue.accuracy*1000)/1000;
        }
        if(this.weightValue.uniqueness*1000 %1 !== 0 &&this.weightValue.uniqueness!=null){
          this.weightValue.uniqueness=Math.round(this.weightValue.uniqueness*1000)/1000;
        }
        if(this.weightValue.timeliness*1000 %1 !== 0 &&this.weightValue.timeliness!=null){
          this.weightValue.timeliness=Math.round(this.weightValue.timeliness*1000)/1000;
        }
        if(this.weightValue.vulnerability*1000 %1 !== 0 &&this.weightValue.vulnerability!=null){
          this.weightValue.vulnerability=Math.round(this.weightValue.vulnerability*1000)/1000;
        }

        let sum = this.weightValue.completeness
                + this.weightValue.consistency
                + this.weightValue.compliance
                + this.weightValue.accuracy
                + this.weightValue.uniqueness
                + this.weightValue.timeliness
                + this.weightValue.vulnerability;
        let r = Math.round((10 - sum*10) + 1 );
        this.options1=this.options1.slice(0,r) ;
        this.options2=this.options2.slice(0,r) ;
        this.options3=this.options3.slice(0,r) ;
        this.options4=this.options4.slice(0,r) ;
        this.options5=this.options5.slice(0,r) ;
        this.options6=this.options6.slice(0,r) ;
        this.options7=this.options7.slice(0,r) ;
      },
      saveall(){
        if(this.weightValue.accuracy==null)
          this.weightValue.accuracy=0.0
        if(this.weightValue.completeness==null)
          this.weightValue.completeness=0.0
        if(this.weightValue.compliance==null)
          this.weightValue.compliance=0.0
        if(this.weightValue.consistency==null)
          this.weightValue.consistency=0.0
        if(this.weightValue.timeliness==null)
          this.weightValue.timeliness=0.0
        if(this.weightValue.uniqueness==null)
          this.weightValue.uniqueness=0.0
        if(this.weightValue.vulnerability==null)
          this.weightValue.vulnerability=0.0
        let sum = parseFloat(this.weightValue.completeness)
          + parseFloat(this.weightValue.consistency)
          + parseFloat(this.weightValue.compliance)
          + parseFloat(this.weightValue.accuracy)
          + parseFloat(this.weightValue.uniqueness)
          + parseFloat(this.weightValue.timeliness)
          + parseFloat(this.weightValue.vulnerability)
        console.log(sum);
        sum=Math.round(sum*1000)/1000
        if(sum!=1)
        {
          this.$alert('指标权重之和必须为1', '警告', {
            confirmButtonText: '确定',
          });
        }
        else{
          this.editall=true;
          console.log(this.weightValue)

          console.log(JSON.stringify(this.weightValue));
          this.$ajax.post('http://localhost:8080/data/weight',
            JSON.stringify(this.weightValue),
            {headers: {'Content-Type': 'application/json;charset=UTF-8'}}
          ).then(response => {
            console.log(response.data);
          }).catch(function (err) {
            console.log(err);
          })
        }
      },
      clearall(){
        this.editall=false;
        this.weightValue.completeness=null;
        this.weightValue.consistency=null;
        this.weightValue.compliance=null;
        this.weightValue.accuracy=null;
        this.weightValue.uniqueness=null;
        this.weightValue.timeliness=null;
        this.weightValue.vulnerability=null;

        this.options1=[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];
        this.options2=[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];
        this.options3=[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];
        this.options4=[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];
        this.options5=[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];
        this.options6=[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];
        this.options7=[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];

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
