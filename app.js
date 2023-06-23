const mealsEL = document.getElementById("meals");
const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");
const mealPopup = document.getElementById("meal-popup");
const closePopup = document.getElementById("close-popup");
const mealInfoEl = document.getElementById("meal-info");

getRandomMeal();

async function getRandomMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await response.json();
  const randomMeal = respData.meals[0];

  console.log(randomMeal);
  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const response = await fetch(
    "www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  const respData = await response.json();
  const meal = respData.meals[0];
  return meal;
}

async function getMealsBySearch(term) {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
  const respData = await res.json();
  const meals = await respData.meals;

  return meals;
}
closePopup.addEventListener("click", () => {
  mealPopup.classList.add("hidden");
});
searchBtn.addEventListener("click", async () => {
  const search = searchTerm.value;
  const meals = await getMealsBySearch(search);
  mealsEL.innerHTML = "";

  if (meals) {
    meals.forEach((meal) => {
      addMeal(meal);
    });
  }else{
    mealsEL.innerHTML= "sorry 😔 " + searchTerm.value + " not found";
  }
});

function addMeal(mealData, random = false) {
  console.log(mealData);
  const meal = document.createElement("div");
  meal.classList.add("meal");
  meal.innerHTML = `
<div class="meal-header">
${
  random
    ? `
    <span class="random">
        Random Recipe
      </span>`
    : ""
}
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
</div>
<div class="meal-body">
    <h4>${mealData.strMeal}</h4>
  
</div>  
`;
  meal.addEventListener("click", () => {
    showMealInfo(mealData);
  });

  mealsEL.appendChild(meal);
}

function showMealInfo(mealData) {
  const mealEl = document.createElement("div");
  mealEl.innerHTML = `
  <h1>${mealData.strMeal}
  </h1>
   <img src="${mealData.strMealThumb}" alt="${mealData.strMealThumb}"> 
   <p> ${mealData.strInstructions}</p>
  `;

  mealInfoEl.appendChild(mealEl);
  mealPopup.classList.remove("hidden");
}

const videos = document.querySelector("#video");


