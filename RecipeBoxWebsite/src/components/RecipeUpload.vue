<template>
  <form @submit.prevent="handleUpload">
    <h3 class="text-center mt-4 mb-3" style="color: #90A375">
      <strong>Upload Recipe</strong>
    </h3>
    <div class="mb-2">
      <label for="title" class="form-label" style="color: #F9BB9D">Title</label>
      <input type="text" class="form-control" id="title" v-model="title" />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label" style="color: #F9BB9D"
        >Description</label
      >
      <textarea
        class="form-control"
        id="description"
        rows="3"
        v-model="description"
      ></textarea>
    </div>
    <div class="mb-3">
      <label for="image" class="form-label" style="color: #F9BB9D"
        >Image URL</label
      >
      <input type="text" class="form-control" id="image" v-model="image" />
    </div>
    <button type="submit" class="btn btn-success mb-3">Upload</button>
  </form>
</template>
<script>
export default {
  name: "RecipeUpload",
  data() {
    return {
      title: "",
      description: "",
      image: "",
    };
  },
  methods: {
    handleUpload() {
      alert("Your recipe has been uploaded!");
      window.location.reload();
    },
  },
};
</script>
<style>
input {
  background-color: #F2EDE6;
}
</style>