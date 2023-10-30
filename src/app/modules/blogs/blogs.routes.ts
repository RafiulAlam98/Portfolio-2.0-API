import express from 'express'
import { BlogsController } from './blogs.controller'

const router = express.Router()

router.post('/', BlogsController.addBlog)
router.get('/', BlogsController.getAllBlogs)
router.get(
  '/:id',

  BlogsController.getSingleBlog,
)

export const BlogRoutes = {
  router,
}
