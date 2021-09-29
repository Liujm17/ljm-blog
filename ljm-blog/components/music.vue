<template>
  <div class="bg">
    <button @click="show=!show" class="bt">{{btText}}</button>
    <div class="box" v-show="show" >
      <h2>歌曲：{{ songname }}</h2>
      <p>歌手：{{songuser }}</p>
      <h3>歌曲列表</h3>
     <div class="box-songlist">
          <ul v-for="(item,index) in songsList" :key="index" class="list">
        <li @click="playMusic(item)">{{ item.name }}</li>
      </ul>
     </div>
      <audio ref="audio" :src="songs" controls autoplay="false" id="music" @ended="handleNext()"></audio>
    </div>
  </div>
</template>

<script>
import rap1 from "../music/梦然-少年.mp3";
import rap2 from "../music/刘三岁-是你的声音啊 (BGM完整版).mp3";
import rap3 from "../music/July Tun-清新的小女孩（For Ma）.mp3";
import rap4 from "../music/蒋雪儿-莫问归期.mp3";
import rap5 from "../music/ILLENIUM,Phoebe Ryan - Mine (Illenium Remix).mp3";
import rap6 from "../music/周深 - 起风了.mp3";
import rap7 from "../music/夏日入侵企画 - 想去海边.mp3";
import rap8 from "../music/帆布小镇（Canvas Townlet） - 汽水天空下的海（Sea Under the Soda Sky).mp3";
import rap9 from "../music/帆布小镇（Canvas Townlet） - 海边.mp3";
import rap10 from "../music/红白色乐队 - 海浪.mp3";
import rap11 from "../music/隔壁团乐队 - 夏天海边.mp3";
import rap12 from "../music/霓虹花园 - 无人的海边.mp3";




export default {
  data() {
    return {
      show: false,
      songs: "",
      songname: "",
      songuser: "",
      songsList: [
        { id: 0, name: "少年", singer: "梦然", src: rap1, next: 1 },
        { id: 1, name: "是你的声音啊", singer: "刘三岁", src: rap2, next: 2 },
        { id: 2, name: "清新的小女孩", singer: "july", src: rap3, next: 3 },
        { id: 3, name: "莫问归期", singer: "蒋雪儿", src: rap4, next: 4 },
        { id: 4, name: "Mine", singer: "Illenium Remix", src: rap5, next: 5 },
        { id: 5, name: "起风了", singer: "周深", src: rap6, next: 6 },
        { id: 6, name: "想去海边", singer: "夏日入侵企画", src: rap7, next: 7 },
        { id: 7, name: "汽水天空下的海（Sea", singer: "帆布小镇（Canvas Townlet）", src: rap8, next: 8 },
        { id: 8, name: "海边", singer: "帆布小镇（Canvas Townlet）", src: rap9, next: 9 },
        { id: 9, name: "海浪", singer: "红白色乐队", src: rap10, next: 10 },
        { id: 10, name: "夏天海边", singer: "隔壁团乐队", src: rap11, next: 11 },
        { id: 11, name: "霓虹花园", singer: "无人的海边", src: rap12, next: 0 },
      ],
      //当前索引
      currentIndex: "",
      //下首歌的索引
      nextIndex: "",
    };
  },
  watch: {},
  computed:{
     btText(){
         if(this.show == false && this.songname){
            //  return '正在播放:'+this.songname
            return '打开音乐盒'
         }else if(this.show == false &&!this.songname){
             return '打开音乐盒'
         }else if(this.show == true){
             return '关闭音乐盒'
         }
     }
  },
  mounted() {
      this.getVideo()
  },
  methods: {
      //控制音量，获取audio实例后，控制他的volume音量
      getVideo(){
          var m =this.$refs.audio
          m.volume=0.3
    },
    //监听音乐播放结束
    handleNext() {
      this.playMusic(this.songsList[this.nextIndex]);
    },
    //列表播放音乐
    playMusic(val) {
      //防止点击一首一直重复播放
      if (this.currentIndex !== val.id) {
        this.currentIndex = val.id;
        this.nextIndex = val.next;
        this.songs = val.src;
        this.songname = val.name;
        this.songuser = val.singer;
      } else {
        return;
      }
    },
     handleClose(e) {
            this.show = false;
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
  background-color: rgb(251, 155, 95);
}
.box {
  min-width: 200px;
  min-height: 300px;
  border: 1px gray solid;
  position: absolute;
  top: 2.2rem;
  left: 0;
  background-color: white;
  background: url('../images/pic1.jpg') no-repeat;
  background-size: 100% 100%;
}
.box-songlist{
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 10px;
}
.list {
  cursor: pointer;
  /* 去掉·符号 */
  list-style-type: none;
  width: 100%;
  padding: 3px;
  box-sizing: border-box;
  /* border: 1px solid white; */
}
.list:hover {
  box-shadow: 0 0 0 1px #787be8;
  /* border: 1px dashed #787be8; */
  color: #787be8;
}
</style>