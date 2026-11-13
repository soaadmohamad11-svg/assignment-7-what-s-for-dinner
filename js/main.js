// Start Image Section
// image content
// Variables
const mealName = document.getElementById("meal-name");
const mealLevel = document.getElementById("level");
const mealCuisine = document.getElementById("cuisine");
const mealDescription = document.getElementById("description");

const mealRating = document.getElementById("rating");
const mealReviews = document.getElementById("reviews");

const mealPrep = document.getElementById("prep-min");
const mealCook = document.getElementById("cook-min");
const mealServing = document.getElementById("serving");
// tabs
const mealIngredients = document.getElementById("ingredients");

const mealInstructions = document.getElementById("instructions");

const mealCalories = document.getElementById("calories");
const mealProtein = document.getElementById("protein");
const mealCarbs = document.getElementById("carbohydrates");
const mealFat = document.getElementById("fat");
const mealFiber = document.getElementById("fiber");
const mealSodium = document.getElementById("sodium");

const mealTips = document.getElementById("tips");
// alert message
const preparationAlert = document.getElementById("preparation-alert");
// image
const mealImage = document.getElementById("meal-image");

const meals = [
    {
        // Classic Bewf Burger
        name: "Classic Beef Burger",
        level: "Easy",
        cuisine: "American",
        description: "Juicy homemade burger with all the fixings",
        image: "./imgs/Classic-Beef-Burger.jpg",
        rating: 4.6,
        reviews: "(245 reviews)",
        prepTime: 15,
        cookTime: 20,
        servings: "4 people",
         // ingredients
        ingredients: [
        "500g ground beef (80/20)",
        "4 burger buns",
        "4 slices cheddar cheese",
        "Lettuce leaves",
        "Tomato slices",
        "Red onion, sliced",
        "Pickles",
        "Burger sauce or condiments"
    ],
    // instructions
    instructions: [
    "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
    "Season patties generously with salt and pepper on both sides.",
    "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
    "Add cheese slices in the last minute of cooking and cover to melt.",
    "Toast burger buns lightly on the grill or in a pan.",
    "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
    ],
    // nutrition
    nutrition: {
    calories: "650 kcal",
    protein: "38g",
    carbohydrates: "42g",
    fat: "35g",
    fiber: "2g",
    sodium: "920mg"
    },
    // tips
    tips: [
    "Use fresh ingredients for the best flavor.",
    "Don't overcook the meat.",
    "Let the food rest before serving."
    ]

    },
    // Greek Moussaka
    {
        name: "Greek Moussaka",
        level: "Intermediate",
        cuisine: "Mediterranean",
        description: "Traditional layered eggplant casserole with lamb",
        image: "./imgs/Greek-Moussaka.jpg",
        rating: 4.8 ,
        reviews: "(234 reviews)",
        prepTime: 30,
        cookTime: 60,
        servings: "4 people",
        // ingredients
        ingredients: [
        "3 large eggplants, sliced",
        "500g ground lamb",
        "400g canned tomatoes",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "500ml béchamel sauce",
        "100g parmesan cheese",
        "Cinnamon and oregano",
        "Olive oil"
    ],
    // instructions
    instructions: [
    "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
    "Brush eggplant slices with olive oil, grill or bake until softened.",
    "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
    "Preheat oven to 180°C (350°F).",
    "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
    "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
    ],
    // nutrition
    nutrition: {
    calories: "580 kcal",
    protein: "36g",
    carbohydrates: "32g",
    fat: "32g",
    fiber: "8g",
    sodium: "820mg"
    },
    // tips
    tips: [
    "Salt eggplant to remove bitterness",
    "Don't skip the resting time - it helps set the layers",
    "Use ground beef if lamb is unavailable",
    "Make ahead and reheat for easier serving"
    ]
    },
    //  Lasagna Bolognese
    {
        name: " Lasagna Bolognese",
        level: "Intermediate",
        cuisine: "Italian",
        description: "Layered Italian pasta with rich meat sauce and béchamel",
        image: "./imgs/Lasagna-Bolognese.jpg",
        rating: 4.9 ,
        reviews: "(478 reviews)",
        prepTime: 30,
        cookTime: 90,
        servings: "4 people",
        // ingredients
        ingredients: [
        "12 lasagna sheets",
        "500g ground beef",
        "400g canned tomatoes",
        "1 onion, diced",
        "2 carrots, diced",
        "500ml béchamel sauce",
        "200g mozzarella, grated",
        "100g parmesan cheese",
        "Fresh basil"
    ],
    // instructions
    instructions: [
    "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
    "Cook lasagna sheets according to package directions. Drain and set aside.",
    "Preheat oven to 180°C (350°F).",
    "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
    "Top final layer with béchamel, mozzarella, and parmesan cheese.",
    "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."
    ],
    // nutrition
    nutrition: {
    calories: "680  kcal",
    protein: "42g",
    carbohydrates: "58g",
    fat: "28g",
    fiber: "6g",
    sodium: "920mg"
    },
    // tips
    tips: [
    "Make bolognese sauce a day ahead for better flavor",
    "Don't skip the resting time after baking",
    "Use fresh pasta sheets for best texture",
    "Freeze leftovers in individual portions"
    ]
    },
    //  Vegetable Curry
    {
        name: "Vegetable Curry",
        level: "Easy",
        cuisine: "Asian",
        description: "Hearty vegetarian curry with coconut milk",
        image: "./imgs/Vegetable-Curry.jpg",
        rating:4.6,
        reviews: "(289  reviews)",
        prepTime: 20,
        cookTime: 30,
        servings: "4 people",
        // ingredients
        ingredients: [
        "2 potatoes, cubed",
        "1 cauliflower, florets",
        "1 can chickpeas",
        "2 carrots, sliced",
        "400ml coconut milk",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "Fresh spinach"
    ],
    // instructions
    instructions: [
    "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
    "Add potatoes and carrots, cook for 5 minutes.",
    "Pour in coconut milk and 1 cup water. Bring to simmer.",
    "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
    "Stir in fresh spinach and cook until wilted.",
    "Serve hot over basmati rice or with naan bread."
    ],
    // nutrition
    nutrition: {
    calories: "380 kcal",
    protein: "14g",
    carbohydrates: "48g",
    fat: "16g",
    fiber: "12g",
    sodium: "480mg"
    },
    // tips
    tips: [
    "Add vegetables in order of cooking time needed",
    "Adjust curry powder amount to taste",
    "Use full-fat coconut milk for creamier curry",
    "Add protein like tofu or paneer if desired"
    ]
    }
];
let currentMealIndex = 1;

// function
function displayMeal() {
    const currentMeal = meals[currentMealIndex];
    // alert message
    if (currentMeal.prepTime + currentMeal.cookTime > 45) {
    preparationAlert.innerHTML = `
        <div class="alert alert-warning rounded-4 d-flex align-items-center gap-3 p-3 mb-4" role="alert">
            <i class="fa-solid fa-triangle-exclamation"></i> 
            <div>
                <h6 class="fw-bold mb-1">Extended Preparation Time</h6>
                <p class="mb-0">
                    This recipe requires more than 45 minutes to prepare. Plan accordingly!
                </p>
            </div>
        </div>
    `;
    } else {
    preparationAlert.innerHTML = "";
    }

    mealName.innerHTML = currentMeal.name;
    mealLevel.innerHTML = currentMeal.level;
    mealCuisine.innerHTML = currentMeal.cuisine;
    mealDescription.innerHTML = currentMeal.description;
    mealImage.src = currentMeal.image;
    mealRating.innerHTML = currentMeal.rating;
    mealReviews.innerHTML = currentMeal.reviews;
    mealPrep.innerHTML = currentMeal.prepTime + "min";
    mealCook.innerHTML = currentMeal.cookTime + "min";
    mealServing.innerHTML = currentMeal.servings;
    
    //ingredient 
    mealIngredients.innerHTML = "";

    currentMeal.ingredients.forEach(function(ingredient, index) {
        mealIngredients.innerHTML += `
            <li class="d-flex align-items-center gap-3">
                <div class="number d-flex justify-content-center rounded-5 fw-medium text-light">
                    ${index + 1}
                </div>
                <span class="text-muted">${ingredient}</span>
            </li>
        `;
    });
    // Instructions
mealInstructions.innerHTML = "";

currentMeal.instructions.forEach(function(instruction, index) {
    mealInstructions.innerHTML += `
        <li class="d-flex align-items-center gap-3 mb-4">
            <div class="number d-flex justify-content-center rounded-4 fw-bold text-light">
                ${index + 1}
            </div>
            <span class="text-muted">${instruction}</span>
        </li>
    `;
});
// Nutrition
mealCalories.innerHTML = currentMeal.nutrition.calories;
mealProtein.innerHTML = currentMeal.nutrition.protein;
mealCarbs.innerHTML = currentMeal.nutrition.carbohydrates;
mealFat.innerHTML = currentMeal.nutrition.fat;
mealFiber.innerHTML = currentMeal.nutrition.fiber;
mealSodium.innerHTML = currentMeal.nutrition.sodium;
// Chef's Tips
mealTips.innerHTML = "";

currentMeal.tips.forEach(function(tip) {
    mealTips.innerHTML += `
        <div class="line rounded-4 p-3 d-flex align-items-center justify-content-start gap-2">
            <i class="fa-solid fa-circle-check"></i>
            <p>${tip}</p>
        </div>
    `;
});

}
displayMeal();




// "Try Another Recipe" button
const recipeBtn = document.getElementById("recipe-btn");

recipeBtn.addEventListener("click", function() {
    currentMealIndex = (currentMealIndex + 1) % meals.length;
    displayMeal();
});



