import { setToken } from "../utils/storage";

const baseURL = "http://localhost:3001";

async function login(userData) {
  try {
    const response = await fetch(`${baseURL}/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setToken(data.bananasToken);
      return data.bananasToken;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}

// THIS IS VALIDATING THE TOKEN THROUGH THE BACKEND
// COULD I INSTALL THE JWT AND REPLICATE THE JWT SECRET IN FRONTEND?
// NO, IS DANGEOURS AND DOESNT MAKE SENSE
async function isValidToken(token) {
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    return response.ok;
  } catch (error) {
    console.error(error);
  }
  return false;
}

const api = {
  login,
  isValidToken,
};

export default api;
