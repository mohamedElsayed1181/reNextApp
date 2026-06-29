export type RegisterData = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type AuthMode = "login" | "register";
