let posts = [
    { id: 1, title: "Post 1", body: "Lorem ipsum dolor sit amet" },
    { id: 2, title: "Post 2", body: "Consectetur adipiscing elit" },
    { id: 3, title: "Post 3", body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" }
  ];
  
  function addPost(title, body) {
    return new Promise((resolve, reject) => {
      const newPost = {
        id: posts.reduce((maxId, post) => Math.max(post.id, maxId), 0) + 1,
        title,
        body
      };
      posts.push(newPost);
      resolve(newPost);
    });
  }
  
  function listPosts() {
    return new Promise((resolve, reject) => {
      posts.forEach(post => {
        console.log(`#${post.id}: ${post.title}`);
        console.log(post.body);
        console.log();
      });
      resolve();
    });
  }
  
  async function run() {
    await listPosts();
    const newPost = await addPost("Post 4", "Ut enim ad minim veniam");
    console.log(`Added new post: #${newPost.id} ${newPost.title}`);
    console.log();
    await listPosts();
  }
  
  run();
  