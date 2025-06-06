// AuthContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { login as apiLogin, register as apiRegister, fetchUserProfile } from '@/app/lib/api/api';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
  refreshUserProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load token from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // Refresh user profile when token is available
  useEffect(() => {
    if (token && !user) {
      refreshUserProfile();
    }
  }, [token]);

  const refreshUserProfile = async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const profile = await fetchUserProfile(token);
      console.log('Fetched Profile:', profile);
      setUser({
        id: profile.id,
        name: profile.name,
        email: profile.email,
        role: profile.role || 'patient', // Fallback role
      });
      localStorage.setItem('userId', profile.id); // Store userId for consistency
    } catch (e: any) {
      setError(e.message || 'Failed to load user profile');
      setUser(null);
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiLogin({ email, password });
      console.log('Login Response:', data);
      setToken(data.access_token);
      setUser({
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        role: data.user.role,
      });
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('userId', data.user.id);
      refreshUserProfile()
    } catch (e: any) {
      setError(e.message || 'Login failed');
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, role: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRegister({ name, email, password, role });
      console.log('Register Response:', data);
      setToken(data.access_token);
      setUser({
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        role: data.user.role || role, // Use provided role if API doesn't return one
      });
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('userId', data.user.id);
    } catch (e: any) {
      setError(e.message || 'Registration failed');
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, error, login, register, logout, refreshUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useUserData() {
  const { user } = useAuth();
  return user;
}