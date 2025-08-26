// import { function, variable } from "pathToFile.js" // named import
import { openModal, closeModal } from "./modules/modal.js";

// import nameTheImport from "pathToFile.js" // default import ;
import changeBackgroundColor from "./modules/changeColor.js";

const buttonOpenModal = document.querySelector("#open-modal");
const buttonCloseModal = document.querySelector("#close-modal");
const editProfileModal = document.querySelector(".modal");

buttonOpenModal.addEventListener("click", () => openModal(editProfileModal));

buttonCloseModal.addEventListener("click", () => closeModal(editProfileModal));

const changeColorButton = document.querySelector("#change-color");

changeColorButton.addEventListener("click", changeBackgroundColor);
