import { create } from "zustand";

interface StoreProps {
  isNavAbsolute: boolean;
}

interface Action {
  navTurnAbsolute: () => void;
  navNotTurnAbsolute: () => void;
}
const useStore = create<StoreProps & Action>((set) => ({
  isNavAbsolute: false,
  navNotTurnAbsolute: () => set({ isNavAbsolute: false }),
  navTurnAbsolute: () => set({ isNavAbsolute: true }),
}));
export default useStore;
