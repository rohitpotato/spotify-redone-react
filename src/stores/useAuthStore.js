import create from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (state) => set({ isAuthenticated: state }),
  token: null,
  setToken: (token) => set({ token }),
}));

export default useAuthStore;
