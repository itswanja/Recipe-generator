function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "o644f30b4cbteb80ba67a353f5909861";
  let prompt = `User instructions: Generate a recipe about ${instructionInput.value}`;
  let context =
    "You are a recipe expert and love to write short recipes. Your mission is to generate a recipe in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //make call to API
  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
