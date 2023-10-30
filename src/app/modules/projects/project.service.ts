import { IProject } from './projects.interface'
import { project } from './projects.model'

const addProjects = async (payload: IProject) => {
  const result = await project.create(payload)
  return result
}

const getAllProjects = async () => {
  const result = await project.find()
  return result
}

const getSingleProject = async (id: string) => {
  const result = await project.findById(id)
  return result
}

export const ProjectService = {
  addProjects,
  getAllProjects,
  getSingleProject,
}
