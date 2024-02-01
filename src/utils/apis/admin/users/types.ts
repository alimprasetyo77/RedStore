export interface ResponseAdminOrders {
  data : Users[]
  message : string
  total_page : number
}

export interface Users {
  id: number;
  name: string;
  user_name: string;
  email: string;
  role: string;
  photo_profile: string;
  created_at: string;
  deleted_at?: string;
  status_user: string;
}
