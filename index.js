const express = require("express")
const mongoose = require("mongoose")
const exhbs = require("express-handlebars")
const todoRoutes = require('./routes/todos')

const app = express()
const PORT = 3000

const hbs = exhbs.create({
    defaultLayout : 'main',
    extname : 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(todoRoutes)


const comn = "mongodb+srv://<username>:<password>@cluster0.xychr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

async function start(){
    try {
        await mongoose.connect(comn, {
            useNewUrlParser: true,
            useUnifiedTopology : true

        })
    } catch (error) {
        console.log(error)
    }
}

start()


app.listen(PORT, ()=> console.log("server has been started"))

