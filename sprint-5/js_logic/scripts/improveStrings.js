// we got a name thats Guilherme
const nameQuotes = "Barack Obama";

// we got a nickname thats Gui
const position = nameQuotes.indexOf("Obama");

// we dont want to use a fixed number for the nickname length
const nickname = nameQuotes.slice(position, position + "Obama".length);

console.log(nickname);

// second way to use - variables
const nicknameTarget = "Obama";

// we got a nickname thats Gui
const position2 = nameQuotes.indexOf(nicknameTarget);

// we dont want to use a fixed number for the nickname length
const nickname2 = nameQuotes.slice(
  position2,
  position2 + nicknameTarget.length
);

console.log(nickname2);

// third way to use - function
// do something -> grab the nickname from a name
// how/which stuff has to do -> grab the nickname from a name
// returns -> nickname

function searchNickname(name, targetNickname) {
  let nickname;
  // logic for that
  const position = name.indexOf(targetNickname);

  // we dont want to use a fixed number for the nickname length
  nickname = name.slice(position, position + targetNickname.length);
  return nickname;
}

const barackNickname = searchNickname("Barack Obama", "Obama");
const guilhermeNickname = searchNickname("Guilherme de Souza", "Gui");
console.log("- Using functions");
console.log(barackNickname);
console.log(guilhermeNickname);
