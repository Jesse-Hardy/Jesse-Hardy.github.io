<template>
  <div class="cooking-tips-video">
    <h2 class="mb-3 text-custom-light text-center">
      Cooking Tips for Kitchen Beginners
    </h2>
    <div class="ratio ratio-16x9 mb-4">
      <iframe
        src="https://www.youtube.com/embed/aopS3q6f1GY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <p class="mb-2 text-custom-light">
      Professional chef instructor Frank Proto shares his top tips for
      beginners, helping you to elevate the basic skills you'll need to find
      your footing in the kitchen.
    </p>
    <p class="mb-2 text-custom-light">
      Check out chef Frank on his YouTube Channel,
      <a
        href="https://www.youtube.com/c/ProtoCooks"
        target="_blank"
        rel="noopener noreferrer"
        class="text-custom-dark"
        >ProtoCooks!</a
      >
    </p>
    <p class="mb-2 text-custom-light">
      Follow him on Instagram at
      <a
        href="https://www.instagram.com/protocooks"
        target="_blank"
        rel="noopener noreferrer"
        class="text-custom-dark"
        >@protocooks</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "CookingTips",
};
</script>

<style scoped>
p {
  color: #F9BB9D;
}

h2 {
  color: #90a375;
  text-decoration: none;
}

a {
  text-decoration: underline;
  color: #90a375;
}
</style>
