// import { notFound } from "../errorHandlers/notFound";
import CardModel from "../models/cardsModel.js";

export async function getCards(request, response) {
  const cards = await CardModel.find();
  // if (cards.length === 0) {
  //   return notFound();
  // }
  // [] -> even that is empty, its success
  return response.json(cards);
  // response.status(501).send("Not implemented yet!");
}

export async function createCard(request, response) {
  const card = request.body;
  const cardCreated = new CardModel(card);

  // validate
  const validationError = cardCreated.validateSync();

  if (validationError) {
    return response.status(400).json({ message: validationError.errors });
  }

  await cardCreated.save();

  // try {
  //   await cardCreated.save();
  // } catch (error) {
  //   console.log(error);
  //   // this needs to validate that is an error
  //   if (error.message) {
  //     return response.status(400).json({ message: error.message })
  //   }
  // }

  return response.status(201).json(cardCreated);
}
