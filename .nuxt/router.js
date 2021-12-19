import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0067a459 = () => interopDefault(import('..\\pages\\layouts' /* webpackChunkName: "" */))
const _269c8d0f = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _a5a5458e = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _1f1c790e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _a1f2875a = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _281b24c6 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _5187f274 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _0067a459,
    children: [{
      path: "",
      component: _269c8d0f,
      name: "home"
    }, {
      path: "/login",
      component: _a5a5458e,
      name: "login"
    }, {
      path: "/register",
      component: _a5a5458e,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _1f1c790e,
      name: "profile"
    }, {
      path: "/settings",
      component: _a1f2875a,
      name: "settings"
    }, {
      path: "/editor",
      component: _281b24c6,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _5187f274,
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
