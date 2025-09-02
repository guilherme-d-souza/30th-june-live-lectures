// fetch -> JS method/function

// fetch()
//  MAKING A HTTP REQUEST
// parameters -> URL
// returns -> Promise/asynchronous
// whats is inside this promise? HTTP response

// THE DOG API IS RETURNING A JSON
fetch("https://dogapi.dog/api/v2/breeds")
  // handle first promise -> waiting http response
  .then((response) => {
    console.log("response", response); // BASICALLY THE HTTP RESPONSE PACKAGE
    // The response is not JSON yet, it's a Response object.
    // We need to call the .json() method to parse the body text as JSON.
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // transforming HTTP body into JSON for Javascript
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

fetch("https://images.unsplash.com/photo-1756649627237-d367a3e3a311")
  .then((response) => {
    // if (response.status >= 200 && response.status <= 299) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.blob(); // transforming HTTP body into an image for Javascript
  })
  .then((image) => {
    console.log(image);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
