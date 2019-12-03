const { Burger } = require('../models')

module.exports = app => {
  // GET all Burgers
app.get('/burgers', (req, res) => {
  Burger.findAll()
      .then(burgers => res.json(burgers))
      .catch(e => console.log(e))
  
})
  // POST one burger
app.post('/burgers', (req, res) => {
  console.log(req.body)
  Burger.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
})
  // PUT one burger
app.put('/burgers/:id', (req, res) => {
    Burger.findOne({ where: { id: parseInt(req.params.id) }})
    .then(burger => burger.update({ eaten: !burger.eaten}))
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
})

  // DELETE one pizza
app.delete('/burgers/:id', (req, res) => {
    Burger.findOne({ where: { id: parseInt(req.params.id) }})
    .then(burger => burger.destroy())
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
})

}

