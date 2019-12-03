const getBurgers = () => {
   axios.get('/burgers')
   .then(burgers => {
     console.log(burgers)
   })
   .catch(e => console.log(e))
}

const addBurger = (name) => {
    axios.post('/burgers', {
      name
    })
    .then(() => {
      window.location.reload()
    })
    .catch(e => console.log(e))
}

const eatBurger = id => {
axios.put(`/burgers/${id}`)
    .then(() => {
     window.location.reload()
    })
    .catch(e => console.log(e))
}

const removeBurger = id => {
  axios.delete(`/burgers/${id}`)
      .then(() => {
      window.location.reload()
      })
      .catch(e => console.log(e))
}



document.getElementById('addBurger').addEventListener('click', e => {
  e.preventDefault()

  addBurger(document.getElementById('burger').value)
  document.getElementById('burger').value = ''

})

document.addEventListener('click', e => {
  if (e.target.parentNode.className.includes('eatBurger')) {
   eatBurger(e.target.parentNode.dataset.burger)
   
  } else if (e.target.parentNode.className.includes('removeBurger')) {
    removeBurger(e.target.parentNode.dataset.burger)
    
  }
})
