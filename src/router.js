import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/authentication/Login.vue'
import Register from './views/authentication/Register.vue'
import TaskAll from './views/tasks/TaskAll.vue'
import TaskCreate from './views/tasks/TaskCreate.vue'
import TaskEdit from './views/tasks/TaskEdit.vue'


Vue.use(Router)

const isLoggedIn = false;

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'tasks-all',
      component: TaskAll,
      beforeEnter: (toolbar, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/tasks/new',
      name: 'tasks-create',
      component: TaskCreate,
      beforeEnter: (toolbar, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/tasks/:id',
      name: 'tasks-edit',
      component: TaskEdit,
      beforeEnter: (toolbar, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: (toolbar, from, next) => {
        if (!isLoggedIn) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (toolbar, from, next) => {
        if (!isLoggedIn) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: '*',
      redirect: '/'
    }

  ],
  linkActiveClass: 'active'
})


export default routes;
