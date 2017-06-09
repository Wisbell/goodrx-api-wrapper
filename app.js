
const port = process.env.PORT || 3000

const express = require('express')
const app = express()
const request = require('request')

app.get('/api/drugs/:drugName', ({params: {drugName}}, res, next) => {

  let url = ''

  let getData = () => {
    return new Promise( (resolve, reject) => {
      request.get(url, (err, response, body) => {
        resolve(body)
      })
    })
  }

  getData()
  .then( (data) => {
    res.send(data)
  })

})


app.listen(port, () => {
  console.log(`Listening in port ${port}`)
})
