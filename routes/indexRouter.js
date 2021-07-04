let express=require('express')
let router=express.Router()

router.get('/',(req, res, next) =>{
    if(req.session.hieuungbandau==false){
        res.locals.hieuungbandau=false
    }else{
        res.locals.hieuungbandau=true
    }
    
    let menuController=require('../controllers/menuController.js')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        let nhanvienController = require('../controllers/nhanvienController')
    
        return nhanvienController.layhetnhanvien()
        
    })
    .then(data=>{
            res.locals.nhanviens=data;
            
        let sanphamController=require('../controllers/sanphamController')
        return sanphamController.lay9()
    })
    .then(data=>{
        res.locals.topsp=data
        
        let tintucController=require('../controllers/tintucController')
        return tintucController.lay3()
    })
    .then(data=>{
        res.locals.topbaiviet=data
        
        res.render('index')
        req.session.hieuungbandau=false
        //res.send(data)
    })
        .catch(err=>next(err)) 
})

module.exports=router;