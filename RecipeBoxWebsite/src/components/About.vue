<template>
  <div class="container my-5">
    <h2 class="text-left mb-4">About Recipe Box</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <img
          src="../assets/About.jpg"
          alt="Recipe Box Logo"
          class="img-fluid"
        />
      </div>
      <div class="col-md-6">
        <p style="color: #F9BB9D">
          Recipe Box is a platform for sharing and discovering new recipes from
          around the world. Our mission is to make cooking and meal planning
          easier and more fun for everyone.
        </p>
        <p style="color: #F9BB9D">
          We believe that cooking and eating should be enjoyable and
          stress-free, and that everyone should have access to delicious,
          healthy, and affordable meals. With Recipe Box, you can discover new
          recipes, save your favorites, and share your own creations with
          others.
        </p>
        <p style="color: #F9BB9D">
          We are passionate about food and believe that it has the power to
          bring people together and create meaningful connections. Whether you
          are a seasoned chef or a beginner cook, Recipe Box has something for
          you.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}

p,
h2 {
  color: #90A375;

  line-height: 1.5;
}
</style>
