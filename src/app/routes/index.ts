import express from 'express'

import { ProjectRoutes } from '../modules/projects/project.routes'
import { BlogRoutes } from '../modules/blogs/blogs.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/projects/',
    route: ProjectRoutes.router,
  },
  {
    path: '/blogs/',
    route: BlogRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
