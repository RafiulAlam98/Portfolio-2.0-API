import { Schema, model } from 'mongoose'
import { IProject, ProjectModel } from './projects.interface'

export const projectSchema = new Schema<IProject, ProjectModel>(
  {
    id: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    technology: {
      type: [String],
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
    uiLink: {
      type: String,
      required: true,
    },
    apiLink: {
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
export const project = model<IProject>('project', projectSchema)
