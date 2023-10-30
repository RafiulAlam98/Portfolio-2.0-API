import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'

import sendResponse from '../../../shared/sendResponse'
import { BlogService } from './blogs.service'

const addBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.addBlog(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is crerated  successfully',
    data: result,
  })
})

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogs()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs retrieved  successfully',
    data: result,
  })
})

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BlogService.getSingleBlog(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is retrieved  successfully',
    data: result,
  })
})

export const BlogsController = {
  getAllBlogs,
  addBlog,
  getSingleBlog,
}
