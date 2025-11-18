var recipe = {
  "title": "In the spring my bird started to bring me small artifacts, anything he could fit in his beak. Here is a list of some of the first objects that I received :",
  "ingredients": [
    { "name": "Blue Cat-eyed Marbles", "quantity": "Two" },
    { "name": "gold necklace (The kind that turns your neck green)", "quantity": " One" },
    { "name": "coiled ribbon of sunlight saved from the day before", "quantity": " One" },
    { "name": "silver charms in the shape of sleeping Italian greyhounds", "quantity": "Four" },
    { "name": "tiny toy monkey", "quantity": "One" },
    { "name": "strands of curly, bright red hair", "quantity": "Three" },
    { "name": "crumpled photo of a scene from a recurring dream", "quantity": "One" },
  ]
};

function populateRecipeDetails(recipeData) {
  var titleElement = document.querySelector('.recipe-title');
  titleElement.textContent = recipeData.title;


  var ingredientsList = document.querySelector('.ingredients');
  recipeData.ingredients.forEach(function(ingredient) {
    var item = document.createElement('li');
    item.textContent = `${ingredient.quantity} ${ingredient.name}`;
    item.addEventListener('click', function() {
      item.classList.toggle('crossed-off');
    });
    ingredientsList.appendChild(item);
  });
}

populateRecipeDetails(recipe);
