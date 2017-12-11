<template>
 <el-container>
   <el-header>
     <h1>小白留言板</h1>
     <span>
    在这里你可以畅所欲言
     </span>
   </el-header>
   <el-main>
     <el-form :model="form" ref="form" label-width="80px"> 
       <el-form-item label="留言姓名" prop="name"  :rules="{ required: true, message: '请输入你的名字', trigger: 'blur' }">
         <el-input placeholder="请填写标题" v-model="form.name">

         </el-input>
       </el-form-item>
       <el-form-item label="留言内容" prop="content" :rules="[{ required: true, message: '请输入内容', trigger: 'blur' }, { required: true, message: '请输入内容', trigger: 'blur' },
         { min: 10, max: 100, message: '长度在 10 到 100 个字符', trigger: 'blur,change' }]">
         <el-input type="textarea" placeholder="请填写内容" v-model="form.content">
         </el-input>
       </el-form-item>
       <!-- <el-form-item label="打分">
          <el-rate
            v-model="form.star"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
       </el-form-item> -->
       <el-form-item size="large" >
         <el-button type="primary" @click="add('form')">提交</el-button>
         <el-button type="warning" @click="resetForm('form')">重置</el-button>
       </el-form-item>
     </el-form>
   </el-main>
 </el-container>
</template>
<script>
  export default {
    /* eslint-disable */
    data() {
      return {
        form: {
          name: '',
          content: '',
          rules: '',
          // star: '3'
        }
      }
    },
    
    methods: {
      // eslint-disable
      add(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid){
            console.log(this.form.content+','+this.form.name+","+Date.parse(new Date())/1000);
            let _self = this;
            this.$message({
              message: '留言成功，请去留言列表查看',
              type: 'success',
              onClose: function(){
                _self.form.name = "";
                _self.form.content = "";
              }
            })
          }else {
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped lang="less">
  .el-header{
    margin-bottom: 30px;
    h1{
      font-size: 20px;
      font-weight: bold;
    }
    span{
      font-size: 15px;
    }
  }
  .el-form-item{
    text-align: left;
  } 
 
</style>