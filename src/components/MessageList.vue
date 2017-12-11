<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>留言列表</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item" style="text-align: left">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</template>
<script>
export default {}
</script>   
<style>
 .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
