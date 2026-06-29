import { create } from "zustand";
import { login, register } from "@/src/http/auth/auth";
import { LoginData, RegisterData } from "@/src/types/auth";
import Cookies from "js-cookie";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type AuthStore = {
  user: User | null;

  registerUser: (data: RegisterData) => Promise<void>;

  loginUser: (data: LoginData) => Promise<void>;

  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  registerUser: async (data) => {
    const res = await register(data);

    set({
      user: res.user,
    });
  },

  loginUser: async (data) => {
    const res = await login(data);

    Cookies.set("token", res.token, {
      expires: 7,
    });

    set({
      user: res.user,
    });
  },

  logout: () => {
    Cookies.remove("token");

    set({
      user: null,
    });
  },
}));
