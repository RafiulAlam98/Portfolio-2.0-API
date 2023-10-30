import { Model } from 'mongoose'

export type IProject = {
  id: string
  title: string
  img: string[]
    description: ''
  details:""
  technology: string[]
  liveLink: string
  uiLink: string
  apiLink: string
}

export type ProjectModel = Model<IProject>
