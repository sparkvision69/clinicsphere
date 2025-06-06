// api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export async function login(payload: LoginPayload) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Login failed');
    }
    const data = await res.json();
    return data // Returns { access_token, user: { id, name, email, role } }
  } catch (error: any) {
    throw new Error(error.message || 'Network error during login');
  }
}

export async function register(payload: RegisterPayload) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Registration failed');
    }
    return res.json(); // Returns { access_token, user: { id, name, email, role } }
  } catch (error: any) {
    throw new Error(error.message || 'Network error during registration');
  }
}

export async function fetchUserProfile(token: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to fetch user profile');
    }
    return res.json(); // Returns { id, name, email, role }
  } catch (error: any) {
    throw new Error(error.message || 'Network error during profile fetch');
  }
}