import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from "../components/movie/movie"
import Book from "../components/book/book"
import BroadCast from "../components/broadcast/broadcast"
import Group from "../components/group/group"
import MovieDetail from "../components/movie/movieDetail"
import Loading from "../components/loading/loading"
// import SearchPage from "../components/search/searchPage"

import Top from "../components/top/top"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/movie"
    },
    {
      path:"/movie",
      name:"Movie",
      component: Movie
    },
    {
      path:"/movieDetail/:id",
      name:"MovieDetail",
      component:MovieDetail
    },
    {
      path:"/book",
      name:"Book",
      component: Book
    },
    {
      path:"/broadcast",
      name:"BroadCast",
      component:BroadCast
    },
    {
      path:"/group",
      name:"Grop",
      component:Group
    },
    {
      path:"/searchPage/:tag",
      name:"SearchPage",
      component: resolve => require(["../components/search/searchPage.vue"],resolve)
    }
  ]
})

Vue.component("top",Top)
Vue.component('loading',Loading);
