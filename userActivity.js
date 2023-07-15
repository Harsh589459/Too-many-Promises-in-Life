function createPost(post) {
    return new Promise((resolve) => {
      // Simulating post creation delay
      setTimeout(() => {
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime(lastActivityTime) {
    return new Promise((resolve) => {
      // Simulating lastActivityTime update delay
      setTimeout(() => {
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  function deletePost(postId) {
    return new Promise((resolve) => {
      // Simulating post deletion delay
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  
  async function updateLastUserActivityTimeDemo() {
    const posts = [];
    const userLastActivityTime = new Date();
  
    const post = await createPost("New post"); // Wait for post creation
    posts.push(post);
  
    const updatedActivityTime = await updateLastUserActivityTime(
      userLastActivityTime
    ); // Wait for lastActivityTime update
  
    console.log("All posts:", posts);
    console.log("Last activity time:", updatedActivityTime);
  
    await deletePost(posts[posts.length - 1]); // Delete the last post
  
    console.log("Posts after deletion:", posts);
  }
  
  updateLastUserActivityTimeDemo();
  