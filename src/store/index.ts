import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthStateType } from './store-types/auth-state-type';

const useAuthStore = create<AuthStateType>()(
  persist(
    (set) => ({
      user: null,
      setUser: (userData) => set({ user: userData }),
      logout: () => set({ user: null })
    }),
    {
      name: 'user-data'
    }
  )
);

export default useAuthStore;
