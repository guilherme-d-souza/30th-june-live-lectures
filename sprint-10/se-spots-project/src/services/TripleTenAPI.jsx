const apiConfig = {
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "c4c228aa-5c4b-473b-949e-3dce2ec5deef",
    "Content-Type": "application/json",
  },
};

export async function getUserInfo() {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "GET",
      headers: apiConfig.headers,
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateUserInfo({ name, description }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "PATCH",
      headers: apiConfig.headers,
      body: JSON.stringify({
        name,
        about: description,
      }),
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// function getUserInfo() {
//   return fetch(`${apiConfig.baseUrl}/users/me`, {
//     method: "GET",
//     headers: apiConfig.headers,
//   }).then((res) => res.json());
// }
