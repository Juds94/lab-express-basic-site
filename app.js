const express = require('express')
const hbs = require('hbs')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)



app.get('/', (req, res) =>{
    res.render('home-page')
})

app.get('/sobreReina', (req, res) =>{
    res.render('about-page')
})

app.get('/hobbies', (req, res) =>{
    res.render('work-page')
})

app.get('/fotosReina', (req, res) =>{
    res.render('gallery-page')
})











app.listen(5005, ()=>console.log('servidor levantado en puerto 5005'))