import { IBlogs } from './blogs.interface'
import { blogs } from './blogs.model'

const addBlog = async (payload: IBlogs) => {
  const result = await blogs.create(payload)
  return result
}

const getAllBlogs = async () => {
  const result = await blogs.find()
  return result
}

const getSingleBlog = async (id: string) => {
  const result = await blogs.findById(id)
  return result
}

export const BlogService = {
  addBlog,
  getAllBlogs,
  getSingleBlog,
}
