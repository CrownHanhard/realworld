import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70226912 = () => interopDefault(import('..\\pages\\layouts' /* webpackChunkName: "" */))
const _a14caa14 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _3c13fc32 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _602c8832 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _36a48eba = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _39dfadc4 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _46f6cb7f = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _70226912,
    children: [{
      path: "",
      component: _a14caa14,
      name: "home"
    }, {
      path: "/login",
      component: _3c13fc32,
      name: "login"
    }, {
      path: "/register",
      component: _3c13fc32,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _602c8832,
      name: "profile"
    }, {
      path: "/settings",
      component: _36a48eba,
      name: "settings"
    }, {
      path: "/editor",
      component: _39dfadc4,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _46f6cb7f,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
