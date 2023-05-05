<template>
  <nav
    class="navbar navbar-expand-lg navbar-light sticky-top ps-2 py-2"
    style="background-color: #F2EDE6"
  >
    <div class="container-fluid">
      <a class="navbar-brand me-auto" href="#" style="color: #F9BB9D">
        <img
          src="../assets/RecipeBoxLogo.png"
          alt="Recipe Box Logo"
          height="50"
          width="50"
        />
        <strong> Recipe Box</strong>
      </a>
      <button
        class="navbar-toggler ms-5"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="isCollapsed = !isCollapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: !isCollapsed }"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto mb-lg-0">
          <li class="nav-item me-sm-1 me-md-2 me-lg-3">
            <a class="nav-link" href="#home" style="color: #90A375"
              ><strong>Home</strong></a
            >
          </li>
          <li class="nav-item me-sm-1 me-md-2 me-lg-3">
            <a class="nav-link" href="#recipes" style="color: #90A375"
              ><strong>Recipes</strong></a
            >
          </li>
          <li class="nav-item me-sm-1 me-md-2 me-lg-3">
            <a class="nav-link" href="#about" style="color: #90A375"
              ><strong>About</strong></a
            >
          </li>
          <li class="nav-item me-sm-1 me-md-2 me-lg-3">
            <a class="nav-link" href="#upload-recipe" style="color: #90A375"
              ><strong>Upload Recipe</strong></a
            >
          </li>
          <li class="nav-item me-sm-1 me-md-2 me-lg-3">
            <a class="nav-link" href="#cookingtips" style="color: #90A375"
              ><strong>Tips</strong></a
            >
          </li>
          <li class="nav-item me-sm-1 me-md-2 me-lg-3">
            <a class="nav-link" href="#contact" style="color: #90A375"
              ><strong>Contact</strong></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isCollapsed: true,
    };
  },
};
</script>

<style>
.navbar-brand {
  font-size: 30px;
}
.navbar-brand:hover {
  font-size: 200%;
}
.navbar-nav .nav-link:hover {
  font-size: 120%;
}
</style>
