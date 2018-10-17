/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import $ from 'jquery';
import App from './app.vue';
import iView from '../src/index';
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN';
//懒加载lazyload
import VueLazyload from 'vue-lazyload';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView, {locale});

//懒加载lazyload use
Vue.use(VueLazyload, {
    error: 'http://www.atrip.com/resources/images/hotelDetailerrorpic.png',
    loading: 'http://www.atrip.com/resources/images/hotelDetailerrorpic.png',
    try: 3 // default 1
})

//const变量
Vue.prototype.$api = "http://116.62.71.76:8001/api/GetServiceApiResult" //api地址
Vue.prototype.$youapp_api = 'http://app.ursoffice.com/';//幼狮app的api地址
Vue.prototype.$api_jtimg = "http://omc.urskongjian.com:81/guangwan/" //api地址
//Vue.prototype.$api = "http://localhost:8001/api/GetServiceApiResult" //api地址
Vue.prototype.$resouceUrl = "http://192.168.1.80:8081/"  //资源文件地址
//测试
Vue.prototype.$api_ysapi = "http://116.62.68.26:8080" //yhcms
Vue.prototype.$api_ysapi_zs = "http://116.62.68.26:8080" //api地址
Vue.prototype.$api_img_url = 'http://116.62.68.26/';//图片的地址
//正式
//Vue.prototype.$api_ysapi = "http://omc.urskongjian.com"; //yhcms
//Vue.prototype.$api_ysapi_zs = "http://app.ursoffice.com";//app后台正式服域名(Mr.long /yskjApp/)
//Vue.prototype.$api_img_url = 'http://omc.urskongjian.com:81/';//图片的地址


// 开启debug模式
Vue.config.debug = true;

// 路由配置
var router = new VueRouter({
    mode: "history",
    hashbang: false,
    routes: [
        {
            path: '/index',
            component: require('./routers/index.vue')
        },
        {
            path: '/gxls',//关于亮狮的页面
            component: require('./routers/gxls.vue')
        },
        {
            path: '/yezhuweit',//关于亮狮的页面
            component: require('./routers/yezhuweit.vue')
        },
        {
            path: '/qyhl',//企业互联的页面
            component: require('./routers/qyhl.vue')
        },
        {
            path: '/gjfw',//管家服务的页面
            component: require('./routers/gjfw.vue')
        },
        {
            path: '/blanks',//空白的页面
            component: require('./routers/blanks.vue')
        },
        {
            path: '/office',
            component: require('./routers/office.vue')
        },
        {
            path: '/update',

            component: require('./routers/update.vue')
        },
        {
            path: '/collect',
            component: require('./routers/collect.vue')
        },
        {
            path: '/invest',
            component: require('./routers/invest.vue')
        },
        {
            path: '/about',
            component: require('./routers/about.vue')
        },
        {
            path: '/register',
            component: require('./routers/register.vue')
        },
        {
            path: '/login',
            component: require('./routers/login.vue')
        },
        {
            path: '/find_pass',
            component: require('./routers/find_pass.vue')
        },
        {
            path: '/list',
            component: require('./routers/list.vue')
        },
        {
            path: '/detail',
            component: require('./routers/detail.vue')
        },
        {
            path: '/admin',
            component: require('./routers/admin/main.vue'),
            children: [
                 {
                    path: '/delegateOrder',
                    name:"业主委托",
                    component: resolve => require(['./routers/admin/delegateOrder.vue'], resolve)
                 },
                 {
                    path: '/requestOrder',
                    name:"帮我找楼",
                    component: resolve => require(['./routers/admin/requestOrder.vue'], resolve)
                 },
                 {
                    path: '/form',
                    component: resolve => require(['./routers/admin/form.vue'], resolve)
                 }



              ]
        },
        {
            path: '/admin',
            component: require('./routers/admin/main.vue')
        },
        {
            path: '/love',
            component: require('./routers/love_power.vue')
        },
        {
            path: '/room_sale',
            component: require('./routers/room_sale.vue')
        },
        {
            path: '/sport',
            component: require('./routers/sport.vue')
        },
        {
            path: '/sport_pre',
            component: require('./routers/sport_pre.vue')
        },
        {
            path: '/annual_meeting',
            component: require('./routers/annual_meeting.vue')
        },
        {
            path: '/map_search',
            component: require('./routers/map_search.vue')
        },
        {
            path: '/house_det',
            component: require('./routers/house_detail.vue')
        },
        {
            path: '*',
            redirect: '/index'
        }

    ]
});

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

new Vue({
    el: '#app',
    router: router,
    render: function (h) {
        return h(App)
    }
});
