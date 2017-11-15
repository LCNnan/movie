<template>
  <div class = "movieDetail">
    <top></top>
    <div class = "abstract">
      <div class = "left">
        <div class = "name">{{totalData.title}}</div>
        <div class = "comment">
          <span>{{totalData.rating.average == 0 ? "暂无评分"  : totalData.rating.average}}</span>
          <span>{{totalData.ratings_count}}人评价</span>
        </div>
        <div class = "main">
          <span>{{totalData.year}}</span>
          <template v-for = "item in totalData.genres">
            <span>/{{item}} </span>
          </template>
          <template v-for = "item in totalData.casts">
            <span>/ {{item.name}} </span>
          </template>
          <template v-for = "item in totalData.directors">
            <span>/ {{item.name}} </span>
          </template>
          <span>/ {{totalData.countries[0]}} </span>
        </div>
        <div class = "app">
          用App查看影人资料
        </div>
      </div>
      <div class = "right">
        <img :src = "totalData.images.small" alt = ""/>
      </div>
    </div>
    <div class = "btns mar-b">
      <router-link to = "/" class = "btn">想看</router-link>
      <router-link  to = "/" class = "btn">看过</router-link >
    </div>
    <div class = "info mar-b">
      <div class = "info-title title">{{totalData.title}}的简介</div>
      <span class = "info-con">{{totalData.summary}}</span>
      <span>展开</span>
    </div>
    <div class = "kind mar-b pad">
      <div class = "title">查看更多分类</div>
      <template v-for = "item in totalData.genres">
        <span>{{item}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import Net from "../../net/net"
export default {
  data(){
    return{
      id:null,
      totalData:[]
    }
  },
  created(){
    this.id = this.$route.params.id
    // console.log(this.$route.params.id)
    this.fetchData();
  },
  methods:{
    fetchData(){
      var _this = this;
      if(this.id){
        Net({"type":"Get","url":"https://api.douban.com/v2/movie/subject/"+ _this.id},function(res){
          if(res){
            _this.totalData = res.body;
            console.log(_this.totalData);
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .movieDetail{
    .pad{
      padding:0 1.8rem;
    }
    .mar-b{
      margin-bottom:2rem;
    }
    .title{
      margin:0 0 1.5rem;
      color:#aaa;
      font-size:1.5rem;
    }
    .abstract{
      padding:0 1.8rem;
      display:flex;
      justify-content:space-between;
      margin-bottom:3rem;
      .left{
        flex:1;
        .name{
          font-size:2rem;
          margin:2rem 0 0;
        }
        .comment{
          font-size:1.4rem;
          color:#aaa;
        }
        .main{
          margin-top:1.5rem;
          padding-right:2.4rem;
          line-height:1.6rem;
          font-size:1.4rem;
          color:#494949;
        }
        .app{
          font-size:1.4rem;
          color:#42bd56;
          line-height:1;
          margin-top:1rem;

        }
      }
      .right{
        width:10rem;
        padding-top:4rem;
        img{
          max-width:10rem;
          width:100%;
        }
      }
    }
    .btns{
      padding:0 1.8rem;
      display:flex;
      justify-content:space-between;
      .btn{
        width:45%;
        height:3rem;
        display:block;
        color:#ffb712;
        text-align:center;
        border-radius:0.3rem;
        border:0.1rem solid #ffb712;
        line-height:3rem;
        font-size:1.5rem;
      }
    }
    .info{
      padding:0 1.8rem;
      font-size:1.5rem;
      .info-con{
        color:#494949;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:6;
        overflow:hidden;
        line-height:1.5rem;
        margin-after:1rem;
      }
    }
    .kind{
      span{
        display:inline-block;
        font-size:1.5rem;
        line-height:2.8rem;
        padding:0 1.2rem;
        border-radius:2.8rem;
        text-align:center;
        background:#f5f5f5;
        color:#494949;
        margin:1rem 1rem 0 0 ;
      }
    }
  }
</style>
