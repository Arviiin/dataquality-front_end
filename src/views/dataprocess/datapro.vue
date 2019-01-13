<template>
  <div>
    <navHeader class="header"></navHeader>
    <hr>
    <div>
      <div class="slider">
        <div class="container">
          <div class="callbacks_container">
            <ul class="rslides" id="slider">
              <li>
                <img alt="" src="../images/s1.jpg">
              </li>
              <li>
                <img alt="" src="../images/s2.jpg">
              </li>
              <li>
                <img alt="" src="../images/s3.jpg">
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div class="container">
        <div class="signin-section">
          <h3><span>大数据</span> 看见数据的本质</h3>
          <div>
            <router-link to="/dataprocess/databrowser">管理我的数据 </router-link>
          </div>
        </div>
      </div>

      <div class="app">
        <div class="container">
          <div class="app-grid">
            <div class="col-md-4 app-info">
              <h3>平台介绍</h3>
              <p>大数据可视化探索分析、可用性分析</p>

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
    name: 'datapro',
    components:{
      navHeader,
      navFooter
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        vlogin:false
      }
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
</style>
