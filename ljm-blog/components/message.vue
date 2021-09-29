<template>
  <div class="bg">
    <button @click="show=!show" class="bt">{{btText}}</button>
    <div class="box" v-show="show" >
      <div class="leavewords">
      <textarea rows="3" cols="40" maxlength="200" v-model="message" placeholder="请输入留言(最多200字)" style="background-color:beige">
       </textarea>
      by:(<input type="text" style="width:20%" v-model="username" placeholder="留言人">)
       <button @click="leavewords" class="bt">留言</button>
      </div>
      <h2>留言列表<span style="font-size:20px;font-weight:normal">({{list.length}}条)</span></h2>
       <div class="box-list">
          <div v-for="(item,index) in list" :key="index" class="list-item">
            <div style="font-weight:600"><span>{{index+1}}.</span><span>{{item.time}}---</span><span style="font-weight:600;color:#2440B3">{{item.username}}</span></div>
            <div>{{item.message}}</div>
          </div>
     </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
function nowTime() {//获取当前时间
    let now= new Date();
    let _month = ( 10 > (now.getMonth()+1) ) ? '0' + (now.getMonth()+1) : now.getMonth()+1;
    let _day = ( 10 > now.getDate() ) ? '0' + now.getDate() : now.getDate();
    let _hour = ( 10 > now.getHours() ) ? '0' + now.getHours() : now.getHours();
    let _minute = ( 10 > now.getMinutes() ) ? '0' + now.getMinutes() : now.getMinutes();
    let _second = ( 10 > now.getSeconds() ) ? '0' + now.getSeconds() : now.getSeconds();
    return now.getFullYear() + '-' + _month + '-' + _day + ' ' + _hour + ':' + _minute + ':' + _second;
}

export default {
  data() {
    return {
      show: false,
      username:'',
      message:'',
      list:[]
    };
  },
  watch: {
    show:{
      handler(newVal,oldVal){
        if(!newVal){
          this.message=''
          this.username=''
        }
      }
    }
  },
  computed:{
     btText(){
         if(this.show == false){
             return '打开留言板'
         }else{
           return '关闭留言板'
         }
     }
  },
  mounted() {
       this.getData()
  },
  methods: {
        //留言
     leavewords(){
         let params={
           username:this.username?this.username:'匿名人士',
            message:this.message,
            time:nowTime()
         }
           axios({
          method: "post",
          timeout: 2000,
          url: "http://47.99.154.206:8000/homestays/addMessage",
          data:params
        
        })
          .then((response) => {
           this.getData()
          })
          .catch((error) => {
            console.log(error)
          })
     },
     //获取留言数据
     getData(){
        axios({
          method: "get",
          timeout: 2000,
          url: "http://47.99.154.206:8000/homestays/getMessagekInfo",
        
        })
          .then((res) => {
           this.list=res.data.data.reverse()
           this.message=''
           this.username=''
          })
     },
  },
};
</script>

<style scoped>
.bg {
  margin-right: 1rem;
  position: relative;
}
.bt {
  height: 2rem;
  background-color: rgb(52, 152, 219);
}
.box {
  min-width: 200px;
  min-height: 300px;
  border: 1px gray solid;
  position: absolute;
  top: 2.2rem;
  left: 0;
  background-color: white;
  background: url('../images/pic2.jpg') no-repeat;
  background-size: 100% 100%;
}
.box-list{
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 10px;
}
.leavewords{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.list-item{
  border-bottom: 2px solid #faa90e;
}
</style>