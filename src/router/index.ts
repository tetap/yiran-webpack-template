import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = []
const routeRequire = require.context('./libs', true, /\.ts$/)
routeRequire.keys().forEach((route) => {
  routes.push(...routeRequire(route).default)
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
