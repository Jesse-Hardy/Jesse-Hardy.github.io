<template>
  <div class="container my-5" style="color: #90A375">
    <h2 class="text-center">Contact Us</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          class="form-control"
          id="message"
          rows="5"
          v-model="message"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      alert("Your message has been sent!");
      window.location.reload();
    },
  },
};
</script>

<style scoped>
label {
  color: #F9BB9D;
}
</style>