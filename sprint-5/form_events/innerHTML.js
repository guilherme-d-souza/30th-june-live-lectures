const coolSection = document.getElementById("cool");

// coolSection.innerHTML = "THIS IS NOT COOL ACTUALLY";

coolSection.addEventListener("click", (event) => {
  console.log(event.target);
});
