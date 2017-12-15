<template>
 <div>
    <div class="main" v-for="todo in comments">
      <div style="margin-bottom: 15px">
        <div style="display: inline-block">
         <img src="../assets/head.svg" style="width:35px">
        </div>
        <div class="info" style="display: inline-block">
        <span style="font-size: 15px;color: #333;">{{todo.name}}</span><br/>
        <span style="font-size: 12px;color: #969696;">{{todo.id+"楼."}}{{todo.create_time|data}}</span>
        </div>
      </div>
      {{todo.content}}
    </div>
    <!-- <div class="block" style="margin-top:30px">
      <el-pagination
        layout="prev, pager, next"
        :total="comments.length/.5"
        @current-change="changePage"
        :current-page="current">
      </el-pagination> -->
    </div>
 </div>
</template>
<script>
export default {
   /* eslint-disable */
    data() {
      let comments = [];
      let result = [];
      return {
        comments,
        current: 1,
        result
      }
    },
    methods: {
      changePage(val){
        console.log(`当前页: ${val}`);
        this.current = val;
      },
      getlist(){
        alert('6666')
      }
    },
   beforeMount: function () {
      this.$http("http://www.bai3.xyz/api/getlist/?format=json")
          .then(response => {this.comments = response.data.reverse()});
            this.$http("http://www.bai3.xyz/api/users/?format=json")
          .then(response => {this.result = response.data})
    },
    
    filters: {
      // 时间戳过滤器
      data: function (input){
        var d = new Date(input*1000);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
        var hour = d.getHours() <10 ? '0' + d.getHours() : '' + d.getHours();
        var minutes = d.getMinutes()<10 ? '0' + d.getMinutes() : '' + d.getMinutes();
        var seconds = d.getSeconds()<10 ? '0' + d.getSeconds() : '' + d.getSeconds();
        return year+ '.' + month + '.' + day + ' ' + hour + ':' + minutes + ':' + seconds;
      }
    }
}
</script>   
<style lang="less" scoped>
    .main{
        text-align: left;
        margin: 10px 15px 0 10px;
        font-size: .8em;
        padding-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
      
    }
</style>

