import { createContext, useContext, useState, useEffect, useMemo } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      setUser(user);
      setToken(user.token);
    }
  }, []);
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      token,
      setToken,
      login: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setToken(user.token);
      },
      logout: () => {
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
      },
    }),
    [user, token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext not found");
  return context;
}
