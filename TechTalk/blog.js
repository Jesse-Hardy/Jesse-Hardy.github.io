let posts = [
  {
    title: "Artificial Intelligence: The Future of Tech",
    content:
      "Artificial Intelligence (AI) continues to push the boundaries of what machines are capable of. As more industries adopt AI technology, we can expect unprecedented growth and innovation in the tech sector."
  },
  {
    title: "Blockchain: Beyond Cryptocurrencies",
    content:
      "Blockchain technology has the potential to revolutionize more than just the financial sector. From supply chain management to digital voting, blockchain could introduce transparency, security, and efficiency to various industries."
  }
];

$(document).ready(function () {
  displayPosts();

  $("#newPost").click(function () {
    $("#newPostForm").toggle();
  });

  $("#savePost").click(function () {
    const post = {
      title: $("#postTitle").val(),
      content: $("#postContent").val()
    };

    posts.push(post);
    displayPosts();
    clearForm();
  });

  function displayPosts() {
    $("#posts").empty();
    posts.forEach((post, index) => {
      $("#posts").append(`
              <div class="card my-2">
                  <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">${post.content}</p>
                      <button class="btn btn-danger" onclick="deletePost(${index})">Delete</button>
                  </div>
              </div>
          `);
    });
  }

  window.deletePost = function (index) {
    posts.splice(index, 1);
    displayPosts();
  };

  function clearForm() {
    $("#postTitle").val("");
    $("#postContent").val("");
  }
});
