<template>
  <div
    class="home-landing-page"
    :style="`background-image: url(${backgroundImage})`"
  >
    <div class="hero d-flex flex-column justify-content-start text-center">
      <div class="container text-bg mt-5">
        <h1><strong>Welcome to Recipe Box</strong></h1>
      </div>
      <div class="container mt-auto text-bg">
        <p class="mb-4">
          Discover and share your favorite recipes with the world.
        </p>
        <button class="btn btn-primary" @click="scrollToRecipeList">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LandingPhoto from "@/assets/LandingPhoto.jpg";

export default {
  name: "HomeLandingPage",
  data() {
    return {
      backgroundImage: LandingPhoto,
    };
  },
  methods: {
    scrollToRecipeList() {
      const recipeList = document.getElementById("recipes");
      recipeList.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.home-landing-page {
  background-color: #f5f5f5;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.text-bg {
  background-color: rgba(3, 3, 3, 0.582);
  padding: 15px;
  border-radius: 5px;
  width: 80%;
}

.hero {
  height: calc(100vh - 72px);
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #F9BB9D;
}

p {
  font-size: 24px;
  margin-bottom: 40px;
  color: #F9BB9D;
}

.btn-primary {
  background-color: #90a375;
  border-color: #90a375;
}
</style>
