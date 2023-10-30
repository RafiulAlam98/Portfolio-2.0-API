import { Schema, model } from 'mongoose'
import { BlogsModel, IBlogs } from './blogs.interface'

export const blogSchema = new Schema<IBlogs, BlogsModel>(
  {
    id: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    blogimg: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorImg: {
      type: String,
      required: true,
    },
    authorDesignation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)
export const blogs = model<IBlogs>('blogs', blogSchema)
