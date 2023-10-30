import { Model } from "mongoose"

export type IBlogs = {
  id: string
  title: string
  blogimg: string
  authorName: string
  authorImg: string
  authorDesignation: string
}
export type BlogsModel = Model<IBlogs>