const {Router} = require("express")

const router = Router()

router.get('/', (req, res) =>{
    res.render('index', {
        title: "Todo List",
        isIndex: true
    })
})

router.get('/create', (req, res) =>{
    res.render('create', {
        title: "Todo List",
        isCreate: true
    })
})


module.exports = router
