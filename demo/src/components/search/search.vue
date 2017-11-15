<template lang="html">
  <div class = "search">
    <div class = "search-title">
      <span @click = "handleClose">关闭</span>
      <input type = "search" placeholder = "请输入电影类型（喜剧等)" v-model = "tag" @keyup.enter = "handleSearch"/>
    </div>
    <div class = "search-list">
      <ul>
        <template v-for = "item in searchList">
          <li class = "list-type">
            <template v-for = "obj in item.con">
              <div class = "search-item">
                <a :style = "{color:obj.color}">{{obj.title}}</a>
                <span>{{obj.dec}}</span>
              </div>
            </template>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      searchList:[
        {
          con:[
            {
              title:"电影",
              dec:"影院热映",
              color:"rgb(35, 132, 232)"
            },
            {
              title:"同城",
              dec:"周末活动",
              color:"rgb(230, 70, 126)"
            },
            {
              title:"阅读",
              dec:"电子书",
              color:"rgb(159, 120, 96)"
            },
            {
              title:"东西",
              dec:"心爱之物",
              color:"rgb(225, 100, 77)"
            }
          ]
        },
        {
          con:[
            {
              title:"电视",
              dec:"正在热播",
              color:"rgb(122, 106, 219)"
            },
            {
              title:"小组",
              dec:"志趣相投",
              color:"rgb(42, 184, 204)"
            },
            {
              title:"游戏",
              dec:"虚拟世界",
              color:"rgb(87, 116, 197)"
            },
            {
              title:"FM",
              dec:"红心歌单",
              color:"rgb(64, 207, 169)"
            }
          ]
          },
        {
          con:[
            {
              title:"图书",
              dec:"畅销排行",
              color:"rgb(159, 120, 96)"
            },
            {
              title:"音乐",
              dec:"新碟榜",
              color:"rgb(244, 143, 46)"
            },
            {
              title:"应用",
              dec:"玩手机",
              color:"rgb(89, 108, 221)"
            },
            {
              title:"市集",
              dec:"购买原创",
              color:"rgb(66, 189, 86)"
            }
          ]

        }

      ],
      tag:""
    }
  },
  methods:{
    handleClose:function(){
      this.$emit("show")
    },
    handleSearch:function(e){
      this.$router.push("/searchPage/" + this.tag);
    }
  }
}
</script>

<style lang="scss" scoped>
  .search{
    position:fixed;
    background:#fff;
    width:100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    z-index:111111111111111;
    .search-title{
      height:4.8rem;
      box-sizing:border-box;
      border-bottom:0.1rem solid #ccc;
      padding:0 1.8rem;
      line-height:4.8rem;
      span{
        color:#42bd56;
        font-size:1.6rem;
        margin-right:1rem;
      }
      input{
        height:3.2rem;
        border:0;
        width:80%;
        background:#f3f3f3;
        border-radius:0.3rem;
        font-size:1.4rem;
      }
    }
    .search-list{
        ul{
          padding-top:2.5rem;
          display:flex;
          justify-content:space-between;
          width:100%;
          padding-left:0;
          .list-type{
              width:33.33%;
              text-align:center;
            .search-item{
              margin-bottom:2.5rem;
              a{
                font-size:2.4rem;
                line-height:2.8rem;
                font-weight:400;
              }
              span{
                display:block;
                font-size:1.2rem;
                color:#999;
                height:1.7rem;
                letter-spacing:0.1rem;
              }
            }
          }
        }
    }
  }
</style>
