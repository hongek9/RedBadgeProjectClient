export interface User {
  user: {
    email: string;
    password: string;
    admin: boolean;
  };
  message: string;
  sessionToken: string;
}
