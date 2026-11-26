import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "hershield_demo_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  // Phase 1 Mock Login (Phase 2 will use Firebase Authentication)
  const login = async ({ email }) => {
    const demoUser = {
      uid: "demo-user-001",
      name: email.split("@")[0].replace(/[^a-zA-Z ]/g, " ") || "Maya Lin",
      email,
      safetyStatus: "Safe",
      lastCheckIn: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser));
    setUser(demoUser);
    return demoUser;
  };

  // Phase 1 Mock Registration (Phase 2 will use Firebase Authentication)
  const register = async ({ name, email }) => {
    const newUser = {
      uid: "demo-user-" + Date.now(),
      name,
      email,
      safetyStatus: "Safe",
      lastCheckIn: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);
    return newUser;
  };

  const loginAsDemo = () =>
    login({ email: "maya.lin@hershield.demo" }).then(() => {
      const updated = {
        uid: "demo-user-001",
        name: "Maya Lin",
        email: "maya.lin@hershield.demo",
        safetyStatus: "Safe",
        lastCheckIn: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setUser(updated);
    });

  const updateSafetyStatus = (status) => {
    if (!user) return;
    const updated = {
      ...user,
      safetyStatus: status,
      lastCheckIn: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setUser(updated);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        loginAsDemo,
        updateSafetyStatus,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
