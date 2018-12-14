// import choo
var choo = require('choo')

// import state
var state = require('./state')

// initialize choo
var app = choo()

// use state
app.use(state)

// create a template
const layout = require('./templates/layout')

// create a route
app.route('/', layout)

// start app
app.mount('div')