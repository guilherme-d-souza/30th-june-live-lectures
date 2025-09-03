class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // other methods for working with the API
}

fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
  headers: {
    authorization: "c4e06c23-afec-4190-b96e-d48bb31937a1", // Replace with your actual token
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
