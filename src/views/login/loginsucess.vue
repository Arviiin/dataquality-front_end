<template>
  <div>
    <navHeader class="header" :userinfo="this.userinfo" :vlogin="this.vlogin"></navHeader>
    <hr>
    <div>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in imgList" :key="item">
          <h1><img :src="item" alt=""></h1>
        </el-carousel-item>
      </el-carousel>

      <div class="container">
        <div class="signin-section">
          <h3><span>数据质量</span> 看见数据的本质</h3>

          <div>
            <router-link to="/dataprocess/databrowser">
              <el-button type="primary">管理我的数据</el-button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="app">
        <div class="container">
          <div class="app-grid">
            <div class="col-md-4 app-info">
              <h3>平台介绍</h3>
              <p>数据质量评价、数据可视化分析</p>
            </div>
            <div class="col-md-8 app-pic">
              <img src="../images/testing.jpg" alt="Software Testing"/>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <navFooter class="footer"></navFooter>
  </div>
</template>

<script>
  import navHeader from '@/views/components/nav'
  import navFooter from '@/views/components/footer'
  export default {
    name: 'loginsucess',
    components:{
      navHeader,
      navFooter
    },
    data () {
      return {
        vlogin:true,
        userinfo:{
          name:'',
        },
        imgList:[
          require('../images/s1.jpg'),
          require('../images/s2.jpg'),
          require('../images/s3.jpg')
        ],

      }
    },
    mounted:function(){
      console.log(this.vlogin);
      console.log(this.$route.params);
      this.vlogin=this.$route.params.vlogin;
      this.userinfo.name=this.$route.params.dataObj;
    },
    methods: {

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /deep/ a{
    text-decoration:none;
  }
  /deep/ a:hover{
    text-decoration: underline;
  }
  .header{
    height: 120px;
  }
  .footer{
    height: 120px;
  }
  .app-pic img{
    margin:1em 2em 0 3em;
  }
  .app-info h3{
    color:#7c7c7c;
    margin-bottom:0.5em;
    font-size:2.5em;
    font-weight:300;
  }
  .app-info p{
    color:#7c7c7c;
    margin-bottom:2em;
    font-size:1.2em;
    line-height:1.8em;
    font-weight:100;
    width:100%;
  }
  .app-info a {
    display:inline-block;
  }
  .app-info a img:hover{
    opacity:0.6;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
    -moz-transition: 0.5s all;
  }
  .app-info p span{
    font-weight:600;
  }
  .app-pic img {
    margin: 0;
  }
  .app-info h3 {
    font-size: 2.2em;
  }
  .app-info p {
    font-size: 1.1em;
  }
  .app-pic img {
    width: 100%;
    background-size: 100%;
  }
  .app-info h3 {
    font-size: 1.75em;
  }
  .app-info p {
    font-size: 1em;
    margin-bottom: 1.5em;
  }
  .app-info a img {
    background-size: 100%;
    width: 65%;
  }
  .app-info {
    width: 43%;
    float: left;
  }
  .app-pic {
    width: 57%;
    float: left;
  }

  .signin-section {
    padding:7% 0;
    text-align:center;
    border-bottom:1px solid #e2e2e2;
  }
  .signin-section h3{
    font-size:2.7em;
    font-weight:300;
    color:#747474;
    margin-bottom:1em;
  }
  .signin-section h3 span{
    font-weight:600;
  }
</style>
