<template>
  <div>
    <form>
      <div class="mb-4">
        <label for="search" class="form-label h5" style="color: #90A375">
          <small>Search Recipes</small>
        </label>
        <input
          type="text"
          class="form-control"
          id="search"
          v-model="searchQuery"
          style="background-color: #F2EDE6"
        />
      </div>
    </form>
    <h2 class="text-center mt-4" style="color: #90A375">Recipes</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
      <div class="col" v-for="recipe in recipes" :key="recipe.id">
        <RecipeCard :recipe="recipe" />
      </div>
    </div>
  </div>
</template>
<script>
import RecipeCard from "./RecipeCard.vue";

export default {
  name: "RecipeList",
  components: {
    RecipeCard,
  },
  data() {
    return {
      searchQuery: "",
      recipes: [
        {
          id: 1,
          title: "Classic Margherita Pizza",
          description:
            "This classic Margherita pizza is simple yet delicious, with fresh tomatoes, mozzarella cheese, and basil leaves on a thin crispy crust.",
          imageUrl:
            "https://www.seriouseats.com/thmb/tc_aBZ9fVc7IaKZ0YE89RZaqdws=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__drinks.seriouseats.com__images__2014__02__20140302shutterpizzabeer-7fbee5ab625a4f849f4658788d423ecd.jpg",
          ingredients: [
            "1 pound pizza dough",
            "1/2 cup tomato sauce",
            "8 ounces fresh mozzarella cheese",
            "Fresh basil leaves",
            "Salt and pepper to taste",
          ],
          instructions: [
            "Preheat the oven to 450°F.",
            "Roll out the pizza dough into a 12-inch circle.",
            "Spread the tomato sauce over the pizza dough.",
            "Top with the mozzarella cheese.",
            "Bake for 10-12 minutes or until the crust is crispy and the cheese is melted and bubbly.",
            "Top with fresh basil leaves and season with salt and pepper to taste.",
          ],
        },
        {
          id: 2,
          title: "Classic Caesar Salad",
          description:
            "This classic Caesar salad is a favorite for a reason, with crisp Romaine lettuce, garlic croutons, and a tangy homemade dressing.",
          imageUrl:
            "https://www.seriouseats.com/thmb/CI40mF5sQEuUr1voWRdbA2bjscs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg",
          ingredients: [
            "1 head Romaine lettuce, chopped",
            "1 cup garlic croutons",
            "1/4 cup grated Parmesan cheese",
            "1/4 cup olive oil",
            "2 tablespoons lemon juice",
            "1 tablespoon Dijon mustard",
          ],
          instructions: [
            "In a large bowl, combine the chopped Romaine lettuce and garlic croutons.",
            "In a small bowl, whisk together the Parmesan cheese, olive oil, lemon juice, and Dijon mustard to make the dressing.",
            "Pour the dressing over the salad and toss to combine.",
            "Top with additional Parmesan cheese if desired.",
          ],
        },
        {
          id: 3,
          title: "Spaghetti Carbonara",
          description:
            "This classic Italian pasta dish is made with bacon, eggs, and Parmesan cheese, and is sure to satisfy any comfort food craving.",
          imageUrl:
            "https://www.seriouseats.com/thmb/CSC07KZLWznY97DnY0j4NOWar7I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__20090720SmokedSaltCarbonara-450a1df7910e491980a50169746fe0ba.jpg",
          ingredients: [
            "1 pound spaghetti",
            "6 slices bacon, chopped",
            "4 cloves garlic, minced",
            "4 large eggs",
            "1 cup grated Parmesan cheese",
            "1/2 teaspoon black pepper",
          ],
          instructions: [
            "Bring a large pot of salted water to a boil. Add spaghetti and cook until al dente.",
            "While spaghetti is cooking, cook bacon in a large skillet over medium heat until crispy.",
            "Add garlic to the skillet and cook until fragrant.",
            "In a bowl, whisk together eggs, Parmesan cheese, and black pepper.",
            "When spaghetti is done, reserve 1/2 cup of pasta water, then drain spaghetti and add it to the skillet with the bacon and garlic. Remove from heat.",
            "Pour the egg mixture over the spaghetti and toss to coat, adding reserved pasta water as needed to create a creamy sauce.",
            "Serve hot with additional Parmesan cheese and black pepper if desired.",
          ],
        },
        {
          id: 4,
          title: "Pesto Pasta with Roasted Tomatoes",
          description:
            "This flavorful pasta dish is perfect for a quick and easy weeknight dinner, with homemade pesto and roasted cherry tomatoes.",
          imageUrl:
            "https://www.seriouseats.com/thmb/03YR5qtbgg15lADP5CWfzm9NGOU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__06__20150604-pasta-salad-italian-tomato-basil-daniel-gritzer-11-170a7d3b706a41c9b151f30fb1860bcd.jpg",
          ingredients: [
            "1 pound pasta",
            "2 cups cherry tomatoes, halved",
            "3 cloves garlic, minced",
            "1/4 cup pine nuts",
            "1/2 cup grated Parmesan cheese",
            "2 cups fresh basil leaves",
            "1/4 cup olive oil",
            "Salt and pepper to taste",
          ],
          instructions: [
            "Preheat oven to 400°F.",
            "Spread the cherry tomatoes on a baking sheet and sprinkle with minced garlic. Drizzle with olive oil and season with salt and pepper to taste.",
            "Roast the tomatoes for 15-20 minutes, or until they are tender and slightly charred.",
            "Meanwhile, cook the pasta according to package directions.",
            "In a food processor, combine pine nuts, Parmesan cheese, basil leaves, and olive oil to make the pesto.",
            "Drain the cooked pasta and return it to the pot. Add the pesto and roasted tomatoes and toss to combine.",
            "Season with salt and pepper to taste and serve hot.",
          ],
        },
        {
          id: 5,
          title: "Creamy Tomato Soup",
          description:
            "This comforting tomato soup is made with fresh tomatoes, cream, and a touch of basil for a classic flavor.",
          imageUrl:
            "https://www.seriouseats.com/thmb/8t1zTEzXu-SVLP1egqf7Xq9f6RQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__09__20160824-tomato-soup-vicky-wasik-8-a94b8fbb4ff94bc4b76e84d5212dfb99.jpg",
          ingredients: [
            "2 pounds fresh tomatoes, chopped",
            "1 onion, chopped",
            "4 cloves garlic, minced",
            "1/4 cup olive oil",
            "2 cups chicken or vegetable broth",
            "1/2 cup heavy cream",
            "1/4 cup chopped fresh basil leaves",
            "Salt and pepper to taste",
          ],
          instructions: [
            "Heat olive oil in a large pot over medium heat. Add onion and garlic and cook until softened.",
            "Add chopped tomatoes and broth to the pot and bring to a simmer. Cook for 20-30 minutes, or until the tomatoes have broken down and the soup has thickened.",
            "Using an immersion blender or working in batches with a regular blender, blend the soup until smooth.",
            "Stir in the heavy cream and chopped basil and season with salt and pepper to taste.",
            "Serve hot with a garnish of fresh basil leaves.",
          ],
        },
        {
          id: 6,
          title: "Honey Garlic Salmon",
          description:
            "This easy salmon recipe is coated in a sweet and savory glaze made with honey, soy sauce, and garlic.",
          imageUrl:
            "https://www.seriouseats.com/thmb/PhcKThiXWrtRdJCA8V9w8DZnouc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__20090911HarissaHoneySalmon-11e41302561d4523996577a221b3d300.jpg",
          ingredients: [
            "4 salmon fillets",
            "Salt and pepper to taste",
            "1/4 cup honey",
            "2 tablespoons soy sauce",
            "2 cloves garlic, minced",
            "1 tablespoon olive oil",
            "1 tablespoon chopped fresh parsley",
          ],
          instructions: [
            "Preheat the oven to 400°F.",
            "Season the salmon fillets with salt and pepper and place them in a baking dish.",
            "In a small bowl, whisk together honey, soy sauce, garlic, and olive oil.",
            "Pour the glaze over the salmon fillets, making sure they are coated evenly.",
            "Bake the salmon for 12-15 minutes, or until cooked through and flaky.",
            "Garnish with chopped parsley and serve hot.",
          ],
        },
      ],
    };
  },
};
</script>