<template lang="html">
  <div class = "star">
    <template>

    </template>
  </div>
</template>

<script>
export default {
  props:["star"],
  data(){
    return{
      num:""
    }
  },
  mounted(){
    // 下取整
    this.num = Math.floor(this.stars / 10 );
  }
}
</script>

<style lang="scss" scoped>
  .star{

  }
</style>
