export function notFound(response) {
  return response.status(404).send({ message: "Not found" });
}

export function badRequest(response) {
  return response
    .status(400)
    .send({ message: "This request body is awful! Try again!" });
}
