import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      needsVerification: false,
      tempUser: null,

      login: (userData) =>
        set({
          tempUser: userData,
          needsVerification: true,
          isAuthenticated: false,
        }),

      setSession: (user, token) => {
        set({
          user: user,
          token: token.accessToken,
          isAuthenticated: true,
          needsVerification: false,
          tempUser: null,
        });
      },

      logout: async () => {
        const { token } = get();
        try {
          if (token) {
            const authModule = await import("../apis/auth/auth");
            await authModule.default.logoutUser(token);
          }
        } catch (error) {
          console.error("Error logging out:", error);
        } finally {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            needsVerification: false,
            tempUser: null,
          });
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
