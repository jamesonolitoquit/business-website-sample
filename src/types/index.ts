export interface ServicePlan {
  id: string
  name: string
  price: number
  speed: string
  features: string[]
  popular?: boolean
}

export interface User {
  uid: string
  email: string
  displayName?: string
  photoURL?: string
}