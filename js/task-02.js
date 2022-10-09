const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatoes', 'Herbs', 'Condiments'];

const ingredientsListRef = document.querySelector('#ingredients');

const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientRef = document.createElement('li');
    ingredientRef.classList.add('item');
    ingredientRef.textContent = ingredient;
    return ingredientRef;
  });
};

const ingredientElements = makeIngredients(ingredients);
ingredientsListRef.append(...ingredientElements);
