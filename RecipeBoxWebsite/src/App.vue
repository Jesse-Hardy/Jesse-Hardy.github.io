<template>
  <div
    style="
      background: linear-gradient(
          135deg,
          rgba(44, 44, 44, 0.8),
          rgba(44, 44, 44, 0.8)
        ),
        #4A3D35;
    "
  >
    <Navbar />
    <main class="container mt-5">
      <div id="home" class="mb-5">
        <HomeLandingPage />
      </div>
      <div id="recipes">
        <RecipeList />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="upload-recipe">
        <RecipeUpload />
      </div>
      <div class="my-5" id="cookingtips">
        <CookingTips />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import RecipeList from "./components/RecipeList.vue";
import RecipeUpload from "./components/RecipeUpload.vue";
import HomeLandingPage from "./components/HomeLandingPage.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import CookingTips from "./components/CookingTips.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    RecipeList,
    RecipeUpload,
    HomeLandingPage,
    About,
    Contact,
    CookingTips,
  },
};
</script>

<style>
</style>
