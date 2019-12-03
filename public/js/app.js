const getBurgers = () => {
   axios.get('/burgers')
   .then(burgers => {
     console.log(burgers)
   })
   .catch(e => console.log(e))
}

const addBurger = (name) => {
    axios.post('/burgers', {
      name,
      eaten: false
    })
    .then(() => {
      console.log('Burger added')
    })
    .catch(e => console.log(e))
}

const eatBurger = id => {
axios.put(`/burgers/${id}`)
    .then(() => {
      console.log('Burger Eaten')
    })
    .catch(e => console.log(e))
}

const removeBurger = id => {
  axios.delete(`/burgers/${id}`)
      .then(() => {
        console.log('burger removed')
      })
      .catch(e => console.log(e))
}



document.getElementById('addBurger')
.addEventListener('click', e=> {
  e.preventDefault()
  addBurger(document.getElementById('burger').value)
  document.getElementById('burger').value = ''
  window.location.reload()
 
})

document.addEventListener('click', e => {
  if (e.target.parentNode.className.includes('eatBurger')) {
   eatBurger(e.target.parentNode.dataset.burger)
   window.location.reload()
  } else if (e.target.parentNode.className.includes('removeBurger')) {
    removeBurger(e.target.parentNode.dataset.burger)
    window.location.reload()
  }
})