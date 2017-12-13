<template>
    <div class = "movie-list">
      <loading v-if = "showLoading"></loading>
      <template v-for = "item in dataList">
        <div class = "title">
            <span class = "movie-type">{{item.title}}</span>
            <router-link to = "/" class = "more">更多</router-link>
        </div>
        <div class = "scroll">
              <div class = "slide" v-for = "obj in item.subjects">
                <router-link :to = "'/movieDetail/' + obj.id">
                  <img :src = "obj.images.small" alt = ""/>
                </router-link>
                <span class = "slide-title">{{obj.title}}</span>
                <span class = "slide-rate">{{obj.rating.average}}</span>
              </div>
        </div>
      </template>
    </div>
</template>
<script>
    export default{
      props:["dataList"],
      data(){
        return{
          showLoading:true
        }
      },
      mounted(){
        console.log(this.dataList.length);
        if(!this.dataList.length){
          this.showLoading = false;
        }
      },
      methods:{

      }
    }
</script>
<style lang="scss" scoped>
    .movie-list{
        .title{
            height:4.8rem;
            padding:0 1.8rem;
            display:flex;
            justify-content:space-between;
            line-height:4.8rem;
            .movie-type{
                font-size:1.68rem;
            }
            .more{
                font-size:1.6rem;
                font-weight:bold;
                color:#42bd56;
            }
        }
        .scroll{
          overflow-x:auto;
          width:100%;
          padding:0.8rem 0 0.8rem 1rem;
          box-sizing:border-box;
          white-space: nowrap;
          text-align: center;
          .slide{
            padding-left:0.8rem;
            width:10rem;
            display:inline-block;
            img{
              height:15rem;
              width:100%;
            }
            span{
              display:block;
              font-size:1.6rem;
              line-height:1.6rem;
              width:100%;
              overflow:hidden;
              white-space:nowrap;
              text-overflow: ellipsis;
              word-warp:normal;
              color:#111;
            }
            .slide-title{
              margin:1rem 0;
            }
          }
        }
    }
</style>
