import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dangan from '@/views/modules/dangan/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import menu from '@/views/modules/menu/list'
    import qiandao from '@/views/modules/qiandao/list'
    import xinzi from '@/views/modules/xinzi/list'
    import yuangong from '@/views/modules/yuangong/list'
    import yuangongchuchai from '@/views/modules/yuangongchuchai/list'
    import yuangongqingjia from '@/views/modules/yuangongqingjia/list'
    import dictionaryBumen from '@/views/modules/dictionaryBumen/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionaryQiandaoShangban from '@/views/modules/dictionaryQiandaoShangban/list'
    import dictionaryQiandaoXiaban from '@/views/modules/dictionaryQiandaoXiaban/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryYuangongchuchai from '@/views/modules/dictionaryYuangongchuchai/list'
    import dictionaryYuangongchuchaiJiaotonggongju from '@/views/modules/dictionaryYuangongchuchaiJiaotonggongju/list'
    import dictionaryYuangongchuchaiYesno from '@/views/modules/dictionaryYuangongchuchaiYesno/list'
    import dictionaryYuangongqingjia from '@/views/modules/dictionaryYuangongqingjia/list'
    import dictionaryYuangongqingjiaYesno from '@/views/modules/dictionaryYuangongqingjiaYesno/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBumen',
        name: '部门',
        component: dictionaryBumen
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionaryQiandaoShangban',
        name: '上班签到状态',
        component: dictionaryQiandaoShangban
    }
    ,{
        path: '/dictionaryQiandaoXiaban',
        name: '下班签到类型',
        component: dictionaryQiandaoXiaban
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryYuangongchuchai',
        name: '出差类型',
        component: dictionaryYuangongchuchai
    }
    ,{
        path: '/dictionaryYuangongchuchaiJiaotonggongju',
        name: '交通工具',
        component: dictionaryYuangongchuchaiJiaotonggongju
    }
    ,{
        path: '/dictionaryYuangongchuchaiYesno',
        name: '申请状态',
        component: dictionaryYuangongchuchaiYesno
    }
    ,{
        path: '/dictionaryYuangongqingjia',
        name: '请假类型',
        component: dictionaryYuangongqingjia
    }
    ,{
        path: '/dictionaryYuangongqingjiaYesno',
        name: '申请状态',
        component: dictionaryYuangongqingjiaYesno
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '性别类型',
        component: dictionaryZhiwei
    }


    ,{
        path: '/dangan',
        name: '档案',
        component: dangan
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/menu',
        name: '菜单',
        component: menu
      }
    ,{
        path: '/qiandao',
        name: '员工签到',
        component: qiandao
      }
    ,{
        path: '/xinzi',
        name: '薪资',
        component: xinzi
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }
    ,{
        path: '/yuangongchuchai',
        name: '员工出差',
        component: yuangongchuchai
      }
    ,{
        path: '/yuangongqingjia',
        name: '员工请假',
        component: yuangongqingjia
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
