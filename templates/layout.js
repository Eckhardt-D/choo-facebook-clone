const html = require('choo/html')
const posts = require('./posts')

module.exports = (state,emit) => {
  return html`
  <div>
    <nav>
      <h3>CHOO.JS</h3>
    </nav>
    <section id="makePost">
      <input type="text" name="post" id="post">
      <input style="cursor: pointer;" type="submit" value="Create Post" onclick="${createPost}">
    </section>
    <h3 class="posts-title">Recent Posts</h3>
    <div id="content">
      ${state.posts.map(post)}  
    </div>
  </div>
  `
  function createPost() {
    const content = document.getElementById('post').value
    emit('createPost', content)
  }

  function addLike(i) {
    emit('addLike', i);
  }

  function removeLike(i) {
    emit('removeLike', i);
  }

  function post(obj, i) {
    return posts({addLike, removeLike}, obj, i)
  }
}