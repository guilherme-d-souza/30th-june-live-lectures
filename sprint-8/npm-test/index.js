const initialCards = []; // REMOVE THAT - NOT USED BECAUSE THIS IS FIXED

function handleDelete() {
  api.deleteCard("title");
  element.remove(); // keep this
}

function addNewPost(picture, title) {
  element.img = picture;
  element.title = title;
  element.appendToBody(); // keep this
  api.addPost(); // ONLY NEW STUFF
}

function renderCards() {
  const cards = api.getCards();
  cards.forEach((element) => {
    // CONTENT TO RENDER CARDS
  });
}

renderCards();
