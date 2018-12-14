module.exports = function(state, emitter) {
  state.posts = [{
    content: 'Hello',
    created: new Date().toLocaleDateString('en-US'),
    likes: 0
  }]

  emitter.on('addLike', i => {
    state.posts[i].likes++
    emitter.emit('render')
  })

  emitter.on('removeLike', i => {
    state.posts[i].likes--
    emitter.emit('render')
  })

  emitter.on('createPost', data => {
    let newPost = {
      content: data,
      created: new Date().toLocaleTimeString('en-US'),
      likes: 0
    }
    state.posts.push(newPost)
    emitter.emit('render')
  })
}