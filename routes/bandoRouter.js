let express=require('express')
let router=express.Router()

let bandoController=require('../controllers/bandoController')
let menuController=require('../controllers/menuController.js')

router.get('/', (req, res, next)=>{
    menuController.menu()
    .then(data=>{
        res.locals.menu=data
        return bandoController.laydiachi(req.params)
    })
    .then((data)=>{
        res.locals.diachi=data
        //res.send(data)
        res.render('lienhe')
    })
    .catch(err =>{next(err)})
})

router.get('/cn:idvung?-:idcn?', (req, res, next)=>{
    if(req.params.idvung){
        res.locals.idvung=req.params.idvung
    }
    if(req.params.idcn){
        res.locals.idcn=req.params.idcn
    }
    
    menuController.menu()
    .then(data=>{
        res.locals.menu=data
        return bandoController.laydiachi(req.params)
    })
    .then((data)=>{
        res.locals.diachi=data
        
        return bandoController.layvung(req.params)
    })
    .then((data)=>{
        res.locals.vung=data
        
        //res.send(res.locals.diachi)
        res.render('map')
    })
    .catch(err =>{next(err)})
})
module.exports=router