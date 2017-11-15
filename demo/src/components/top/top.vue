<template>
      <div class = "top">
          <router-link to = "/movie" class = "movie btn">电影</router-link>
          <router-link to = "/book" class = "book btn">图书</router-link>
          <router-link to = "/broadcast" class = "broadcast btn">广播</router-link>
          <router-link to = "/group" class = "group btn">小组</router-link>
          <span class = "btn" @click = "showSearch">soso</span>
      </div>
</template>
<script>
    export default{
      methods:{
        showSearch:function(){
          console.log("show");
          this.$router.push("/movie");
          this.$emit("close")
        }
      }
    }
</script>
<style lang="scss" scoped>
    .top{
        height:4.8rem;
        padding:0 1.8rem;
        box-sizing:border-box;
        bottom:0.1rem solid #ccc;
        position:fixed;
        top:0;
        left:0;
        right:0;
        padding-left:10%;
        box-sizing:border-box;
        border-bottom:0.1rem solid #ccc;
        background:#fff;
       .btn{
           height:4.8rem;
           padding:0 1rem;
           font-size:1.6rem;
           line-height:4.8rem;
           font-weight:bold;
       }
       .movie{
           color:rgb(35, 132, 232);
       }
       .book{
           color:rgb(159, 120, 96)
       }
       .broadcast{
           color:rgb(228, 168, 19);
       }
       .group{
           color:rgb(42, 184, 204);
       }
    }
</style>
