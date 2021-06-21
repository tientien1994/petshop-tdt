let express=require('express')
let router=express.Router()

router.get('/', (req, res, next)=>{
    let menuController=require('../controllers/menuController.js')
    let spController=require('../controllers/sanphamController.js')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return spController.luotxemnhieunhat()
    })
    .then(data=>{
        res.locals.topsanpham=data
        res.render('gioithieu')
    })
    .catch(err=>{next(err)})

})
module.exports=router;