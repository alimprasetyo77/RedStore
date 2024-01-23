export interface AdminGetUsers {
  message: string;
  data: Users[];
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
