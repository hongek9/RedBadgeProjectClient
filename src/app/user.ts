export interface User {
  user: {
    id?: number;
    email: string;
    password: string;
    admin: boolean;
  };
  message?: string;
  sessionToken?: string;
}
