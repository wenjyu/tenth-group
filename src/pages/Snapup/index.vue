<template>
   <div class="topnav">
      <div class="tabnav clearfix">
        <div class="logo">
            <img src="./../../../public/images/logo.c8999c02.png" alt="loading...">
        </div>
        <div class="tab">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="首页" name="first">首页</el-tab-pane>
                <el-tab-pane label="全部商品" name="second">全部商品</el-tab-pane>
                <el-tab-pane label="秒杀" name="third">秒杀</el-tab-pane>
              </el-tabs>
        </div>
        <div class="search"></div>
      </div>
      <div class="page">
          <div class="pointer">
            <span>首页</span>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
            <span>秒杀</span>
          </div>
        <div class="Commodity-display">

        </div>

      </div>
   
  </div>
</template>

<script >
export default {
    name:"Snapup"
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.topnav{
          width: 100%;
          height: 60px;
      .tabnav{
          width: 80%;
          margin: 0 auto;
          border-bottom: 1px solid #E6E6E6;
          padding-top: 1px;
          .logo,.search,.tab{
            float: left;
          }
          .search{
            
          }
          .tab{

          }
      }
      }

</style>