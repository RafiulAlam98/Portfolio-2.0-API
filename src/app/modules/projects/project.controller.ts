import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'

import sendResponse from '../../../shared/sendResponse'
import { ProjectService } from './project.service'

const addProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.addProjects(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is crerated  successfully',
    data: result,
  })
})

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getAllProjects()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrieved  successfully',
    data: result,
  })
})

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ProjectService.getSingleProject(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is retrieved  successfully',
    data: result,
  })
})

export const ProjectController = {
  getAllProjects,
  addProjects,
  getSingleProject,
}
