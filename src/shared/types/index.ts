export interface Project {
  id: string
  title: string
  description: string
  url?: string
  github?: string
  tags: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}