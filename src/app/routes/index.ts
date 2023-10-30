import express from 'express'

import { ProjectRoutes } from '../modules/projects/project.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/projects/',
    route: ProjectRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
