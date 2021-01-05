import Vue from 'vue'
import Router from 'vue-router'
import First from "../components/First";
import Second from "../components/Second";
import Add from "../components/Add";
import Update from "../components/Update";
Vue.use(Router)

export default new Router({
    routes: [
        {path:'/first',component:First},
        {path:'/second',component:Second},
        {path:'/',component:Second},
        {path:'/add',component:Add},
        {path:'/update',component:Update},
    ]
})
