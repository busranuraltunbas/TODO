const {Router} = require("express")
const res = require("express/lib/response")
const Todo =  require("../model/Todo")

const router = Router()

router.get('/', async (req,res) =>{

    const todos = await Todo.find({}).lean()

    res.render('index', {
        title: 'Todo List',
        isIndex:  true,
        todos
    })
})


router.get('/create', (req, res) =>{
    res.render('Create List', {
        title: "Todo List",
        isCreate: true
    })
})

router.post('/create', async (req,res) =>{
    const todo = new Todo({
        title: req.body.title,
    })
    await todo.save()

    res.redirect('/')
})


module.exports = router
