const { Burger } = require('../models')

module.exports = app => {

  app.get('/', (req, res) => {

    Burger.findAll()
      .then(burgers => res.render('index', { burgers }))
      .catch(e => console.log(e))
  })

}

