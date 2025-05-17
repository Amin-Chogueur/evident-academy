"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LoginFormData } from "@/app/(auth)/login/page";
import { RegisterFormData } from "@/app/(auth)/register/page";

type UserType = {
  message: string;
  role: string;
  userName: string;
};

type AuthContextType = {
  user: UserType | null | undefined;
  isMounted: boolean;
  onLogin: (userData: LoginFormData) => void;
  onRegister: (userData: RegisterFormData) => void;
  onLogout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsMounted(true);
  }, []);
  async function onLogin(userData: LoginFormData) {
    try {
      const res = await axios.post("http://localhost:3000/api/login", userData);
      const data = res.data;

      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        console.log(data);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onRegister(userData: RegisterFormData) {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/register",
        userData
      );
      const data = res.data;
      console.log(data);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  async function onLogout() {
    try {
      await axios("http://localhost:3000/api/logout");
      localStorage.removeItem("user");
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ isMounted, user, onLogin, onLogout, onRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
