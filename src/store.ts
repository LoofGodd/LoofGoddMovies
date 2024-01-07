import { create } from "zustand";

export interface UserProps {
  user: string;
  setUser: (user: string) => void;
}
const useUser = create<UserProps>((set) => ({
  user: "",
  setUser: (user) => set(() => ({ user })),
}));
export default useUser;
