const API_BASE_URL = typeof window !== "undefined" ? (window.API_URL || "") : "";
const isDevelopment = typeof window !== "undefined" ? (window.NODE_ENV === 'development') : false;

// Log warning instead of throwing error
if (!API_BASE_URL && isDevelopment) {
  console.warn('API_BASE_URL is not defined. Using mock data for development.');
}

export async function validateToken(token) {
  if (!API_BASE_URL) {
    // Return null in development to simulate an expired/invalid token
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/validate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Invalid token");
    }

    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error("Token validation failed:", error);
    return null;
  }
}

export async function loginUser(email, password) {
  if (!API_BASE_URL) {
    // Return mock data in development
    return {
      user: {
        id: 'mock-user-id',
        email: email,
        name: 'Test User',
        role: 'user',
        createdAt: new Date().toISOString()
      },
      token: 'mock-token'
    };
  }

  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}

export async function logoutUser() {
  if (!API_BASE_URL) {
    localStorage.removeItem("token");
    return;
  }

  const token = localStorage.getItem("token");
  if (token) {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } finally {
      localStorage.removeItem("token");
    }
  }
}
