<template>
  <div class="card mb-3" style="background-color: #F2EDE6">
    <img :src="recipe.imageUrl" class="card-img-end" alt="Placeholder image" />
    <div class="card-body">
      <h5 class="card-title">{{ recipe.title }}</h5>
      <p class="card-text">{{ recipe.description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <button class="btn btn-warning" @click="showDetails = !showDetails">
          {{ showDetails ? "Hide Details" : "Details" }}
        </button>
        <button
          class="btn btn-primary"
          v-if="showDetails && !isEditing"
          @click="startEditing"
        >
          Edit
        </button>
      </div>
      <div v-if="showDetails">
        <h6>Ingredients:</h6>
        <ul>
          <li
            v-for="(ingredient, index) in editingIngredients"
            :key="ingredient"
          >
            <input
              v-model="editingIngredients[index]"
              :readonly="!isEditing"
              class="form-control mb-2"
              style="background-color: #F2EDE6"
            />
          </li>
        </ul>
        <div class="text-end">
          <button
            class="btn btn-primary"
            v-if="isEditing"
            @click="saveIngredients"
          >
            Save
          </button>
          <button
            class="btn btn-secondary ms-2"
            v-if="isEditing"
            @click="cancelEditing"
          >
            Cancel
          </button>
        </div>
        <h6>Instructions:</h6>
        <ol>
          <li v-for="instruction in recipe.instructions" :key="instruction">
            {{ instruction }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDetails: false,
      isEditing: false,
      editingIngredients: [],
    };
  },
  mounted() {
    this.editingIngredients = [...this.recipe.ingredients];
  },
  methods: {
    saveIngredients() {
      this.$emit("update-recipe", {
        ...this.recipe,
        ingredients: [...this.editingIngredients],
      });
      this.isEditing = false;
    },
    cancelEditing() {
      this.editingIngredients = [...this.recipe.ingredients];
      this.isEditing = false;
    },
    startEditing() {
      this.isEditing = true;
    },
  },
};
</script>
