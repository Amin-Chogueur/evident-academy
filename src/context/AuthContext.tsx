"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { LoginFormData } from "@/app/(auth)/login/page";
import { RegisterFormData } from "@/app/(auth)/register/page";
import { toast } from "react-toastify";

type UserType = {
  message: string;
  role: string;
  userName: string;
};

type AuthContextType = {
  user: UserType | null | undefined;
  isMounted: boolean;
  loading: boolean;
  onLogin: (userData: LoginFormData) => void;
  onRegister: (userData: RegisterFormData) => void;
  onLogout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const res = await axios.post(`${base_url}/api/login`, userData);
      const data = res.data;

      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        console.log(data);
        toast.success(data.message);
        router.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong");
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  async function onRegister(userData: RegisterFormData) {
    try {
      const res = await axios.post(`${base_url}/api/register`, userData);
      const data = res.data;
      console.log(data);
      toast.success(data.message);

      router.push("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }

  async function onLogout() {
    try {
      await axios(`${base_url}/api/logout`);
      localStorage.removeItem("user");
      setUser(null);
      toast.success("Logout success");
      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error("Logout failed");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }
  return (
    <AuthContext.Provider
      value={{
        isMounted,
        user,
        loading,
        onLogin,
        onLogout,
        onRegister,
      }}
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
