import express from 'express'
import { ProjectController } from './project.controller'

const router = express.Router()

router.post('/', ProjectController.addProjects)
router.get('/', ProjectController.getAllProjects)
router.get(
  '/:id',

  ProjectController.getSingleProject,
)

export const ProjectRoutes = {
  router,
}
