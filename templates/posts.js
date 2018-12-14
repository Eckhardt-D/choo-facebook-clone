const html = require('choo/html')

module.exports = (actions, post, index) => {
  const addLike = actions.addLike
  const removeLike = actions.removeLike

  return html`
    <div class="post">
      <section class="post-content">
        <h3>${post.content}</h3>
        <p>${post.created}</p>
      </section>
      <section class="post-liker">
        <p><span class="post-likes">${post.likes}</span> Likes</p><span class="add-like" onclick="${add}">+</span><span class="remove-like" onclick="${remove}">-</span>
      </section>
    </div>
  `

  function add() {
    addLike(index)
  }

  function remove() {
    removeLike(index)
  }
}