<template>
 <div>
    <div class="main" v-for="(todo, index) in comments">
      <div style="margin-bottom: 15px">
        <div style="display: inline-block">
         <img :src="'/src/assets/'+header(index)" style="width:35px">
        </div>
        <div class="info" style="display: inline-block">
        <span style="font-size: 15px;color: #333;">{{todo.name}}</span><br/>
        <span style="font-size: 12px;color: #969696;">{{todo.id+"楼."}}{{todo.create_time|date}}</span>
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
      },
      header(index){
        switch(index%10){
          case 0:
            return '头像男孩.png';
          case 1:
            return '头像女孩.png';
          case 2:
            return '头像男孩(1).png';
          case 3:
            return '头像女孩(1).png';
          case 4:
            return '头像男孩(2).png';
          case 5:
            return '头像女孩(2).png';
          case 6:
            return '头像男孩(3).png';
          case 7:
            return '头像女孩(3).png';
          case 8:
            return '头像男孩(4).png';
          case 9:
            return '头像女孩(4).png';
        }
        
      }
    },
   beforeMount: function () {
      this.$http("http://www.bai3.xyz/api/getlist/?format=json")
          .then(response => {this.comments = response.data});
    },
    
    filters: {
      // 时间戳过滤器
      date: function (input){
        var d = new Date(Date.parse(input));
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
        var hour = d.getHours() <10 ? '0' + d.getHours() : '' + d.getHours();
        var minutes = d.getMinutes()<10 ? '0' + d.getMinutes() : '' + d.getMinutes();
        var seconds = d.getSeconds()<10 ? '0' + d.getSeconds() : '' + d.getSeconds();
        return year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
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

