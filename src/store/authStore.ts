import { create } from "zustand";
import { devtools } from "zustand/middleware";

type User = {
  _id: string;
  name: string;
  email: string;
};

type UserAuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout:()=>void;
};

const userAuthStore = create<UserAuthStore>()(
  devtools((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user) => set({ user, isAuthenticated: true }),
    logout: () => set({ user:null, isAuthenticated: false }),
  
  }))
);
export default userAuthStore;
