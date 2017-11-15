<template>
  <div class = "movie">
    <top @close = "showSearch"></top>
    <movie-list :dataList = "totalData"></movie-list>
    <div class = "find">
      <div class = "find-title title">
        <span>发现好电影</span>
        <span class = "more">更多</span>
      </div>
      <div class = "find-tag">
        <template v-for = "(item,index) in findData">
          <span class = "tag" :style = "{color:item.color}">{{item.tag}}</span>
          <br v-if = "index == 3"/>
        </template>
      </div>
    </div>
    <div class = "classify">
      <span class = "classify-title title">分类浏览</span>
      <ul>
        <template v-for = "item in classfiData">
          <li>
            <router-link to = "/" class = "classify-type">{{item}}</router-link>
          </li>
        </template>
      </ul>
    </div>
    <search v-if = "showSo" @show = "showSearch"></search>
  </div>
</template>
<script>
/**
    import LoadingComponent from './loading.vue'
    　　const Loading={
    　　　　install:function(Vue){
        //核心部分，在我们使用Vue.use()时，自动调用的是install，而install导出的必须是的组件
    　　　　Vue.component('loading',LoadingComponent);
          Vue.component("  ",{  })
    　　}
    };
    export default Loading;

    main.js中要使用：
　　import loading from './components/loading'
　　Vue.use(loading); //调用的是install里面的组件  就是 Vue.use("loading") 名字相同
 */
    import Net from "../../net/net"
    import MovieList from "./movieList"
    import Search from "../search/search"

    export default{
        components:{
          MovieList,
          Search
        },
        data(){
            return{
              totalData:[],
              findData:[
                {
                  "tag":"同时入选IMGB250和豆瓣电影250的电影",
                  "color":"rgb(255, 172, 45)"
                },
                {
                  "tag":"带你进入不正常的世界",
                  "color":"rgb(255, 64, 85)"
                },
                {
                  "tag":"用电【影】来祭奠逝去的岁月",
                  "color":"rgb(79, 157, 237)"
                },
                {
                  "tag":"女孩们的故事【电影】",
                  "color":"rgb(255, 196, 108)"
                },
                {
                  "tag":"科幻是未来的钥匙--科幻启示录【科幻题材】",
                  "color":"rgb(35, 132, 232)"
                },
                {
                  "tag":"美国生活面面观",
                  "color":"rgb(59, 169, 77)"
                },
                {
                  "tag":"2015终极期待",
                  "color":"rgb(66, 189, 86)"
                },
                {
                  "tag":"静电韩国电影--收集100部",
                  "color":"rgb(204, 51, 68)"
                }
              ],
              classfiData:["经典","冷门佳片","豆瓣高分","动作","喜剧","爱情","悬疑","恐怖","科幻","治愈","文艺","成长","动画","华语","欧美","韩国","日本"],
              showSo:false

            }
        },
        beforeMount(){
            this.totalData = [];
            var base = "https://api.douban.com";
            // 异步请求数据有时间延迟  造成数组里的数据不稳定
            this.fetchData( base + "/v2/movie/in_theaters");
            this.fetchData( base + "/v2/movie/coming_soon");
            this.fetchData( base + "/v2/movie/top250")
        },
        methods:{
            fetchData(url){
                var _this = this;
                var getData = {
                    "type":"Get",
                    "url":url
                }
                Net(getData,function(res){
                    if(res){
                      _this.totalData.push(res.body);
                    }
                })
            },
            showSearch:function(){
              this.showSo = !this.showSo;
            }
        }
    }
</script>
<style lang="scss" scoped>
  .movie{
    .title{
      height:4.8rem;
      line-height:4.8rem;
      font-size:1.6rem;
      padding:0 1.8rem;
    }
    .find{
      .find-title{
        display:flex;
        justify-content: space-between;
        .more{
          font-size:1.44rem;
          color:#42bd56;
          font-weight:bold;
        }
      }
      .find-tag{
        width:100%;
        height:12rem;
        overflow-x:auto;
        white-space: nowrap;
        .tag{
          height:5rem;
          line-height:5rem;
          padding:0 2.4rem;
          margin:0 0 0.8rem 1.6rem;
          text-align:center;
          border:0.1rem solid rgb(255, 172, 45);
          border-radius:0.4rem;
          font-weight: bold;
        }
      }
      span{
        font-size:1.68rem;
        display:inline-block;
      }
    }
    .classify{
      ul{
        li{
          width:50%;
          display:inline-block;
          box-sizing:border-box;
          padding-left:1.8rem;
          border-top:0.1rem solid #eee;
          border-right:0.1rem solid #eee;
          .classify-type{
            height:4.2rem;
            font-size:1.6rem;
            line-height:4.2rem;
            color:#42bd56;
          }
        }
      }
    }
  }
</style>
