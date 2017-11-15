<template lang="html">
  <div class = "searchPage">
    <top></top>
    <div class = "search">
      <input type = "search" @keyup.enter = "handleSearch" v-model = "searchCon"/>搜索
    </div>
    <div class = "search-list">
      <ul>
        <template v-for = "item in dataList">
          <li>
            <router-link :to = "'/movieDetail/'+item.id" class = "item">
              <div class = "left">
                <img :src = "item.images.small" alt = ""/>
              </div>
              <div class = "right">
                <span>{{item.title}}</span>
                <span>{{item.rating.average}}</span>
              </div>
           </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import Net from '../../net/net'

export default {
  data(){
    return{
      searchCon:"",
      dataList:[]
    }
  },
  created(){
    this.searchCon = this.$router.history.current.params.tag;
    this.handleSearch();
  },
  methods:{
    handleSearch(){
      var _this = this;
      var base = 'https://api.douban.com';
      var postData = {
        type:"Get",
        url:base + "/v2/movie/search?tag=" + this.searchCon
      }
      Net(postData,function(res){
        if(res){
          console.log(res);
          _this.dataList = res.body.subjects;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .searchPage{
    .search{
        padding:0 1.8rem;
        height:4.8rem;
        box-sizing:border-box;
        border-bottom:0.1rem solid #ccc;
        line-height:4.8rem;
        font-size:1.6rem;
        font-weight:normal;
        input{
          height:3.2rem;
          border:0;
          width:80%;
          background:#f3f3f3;
          border-radius:0.3rem;
          font-size:1.4rem;
          margin-right:1.5rem;
          outline:none;
        }
    }
    .search-list{
      ul{
        li{
          border-bottom:0.1rem solid #f2f2f2;
          .item{
            display:flex;
            align-items:center;
            padding:1.5rem 1.8rem 1.5rem 0;
            .left{
              width:4rem;
              img{
                width:100%;
              }
            }
            .right{
              padding:0 1rem;
              flex:1;
              font-size:1.8rem;
              color:#111;
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;
            }
          }
        }
      }
    }
  }
</style>
