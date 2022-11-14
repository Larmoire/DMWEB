const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('DMWEB/public'))
app.get('/', function (req, res) {
   res.sendFile('DMWEB/index.html', { root: __dirname })
})
app.get('/', function (req, res) {
   res.sendFile('DMWEB/paiement.html', { root: __dirname })
})
app.listen(3000, function () {
 console.log('Votre app est disponible sur localhost:3000 !')
})
