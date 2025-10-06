// this is the frontend

function getData() {
  fetch("http://localhost:3001")
    .then((res) => res.json())
    .then((data) => console.log("This came from the backend!", data));
}

getData();
