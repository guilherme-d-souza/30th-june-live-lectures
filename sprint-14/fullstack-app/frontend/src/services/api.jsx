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
    if (!response.ok) {
      const data = await response.json();
      return data.bananasToken;
    }
  } catch (error) {
    console.error(error);
  }
}

const api = {
  login,
};

export default api;
