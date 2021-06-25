let express=require('express')
let router=express.Router()

router.get('/', (req, res, next)=>{
    var cart=req.session.cart;
    res.locals.cart=cart.getCart();
    var menuController=require('../controllers/menuController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        
        let nhanvienController = require('../controllers/nhanvienController')
    
        return nhanvienController.layhetnhanvien()
    })
    .then((data)=>{
        res.locals.nhanviens=data;
        
        if(cart.toanbosoluong>0){
            res.render('thanhtoan'); 
        }
        else{
            res.redirect("/giohang")
        }
        
    })
    .catch(error=>next(error));
})
router.get('/abc', (req, res, next) =>{
    var cart=req.session.cart;
    res.locals.cart=cart.getCart();
    var menuController=require('../controllers/menuController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        
        let nhanvienController = require('../controllers/nhanvienController')
    
        return nhanvienController.layhetnhanvien()
    })
    .then((data)=>{
        res.locals.nhanviens=data;
        res.send(cart)
        res.render('thanhtoan'); 
    })
    .catch(error=>next(error));
})

router.post('/hoanthanh', (req, res, next)=>{
    var menuController=require('../controllers/menuController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        var cart=req.session.cart;
    res.locals.cart=cart.getCart();
    if(req.body.diachigiaohang){
        req.session.cart.diachi=req.body.diachigiaohang
    }
    if(req.body.phuongthucgiaohang){
        req.session.cart.phuongthucgiaohang=req.body.phuongthucgiaohang
    }
    if(req.body.hotenkhachhang){
        req.session.cart.tennguoinhan=req.body.hotenkhachhang
    }
    if(req.body.sodienthoai){
        req.session.cart.sodienthoai=req.body.sodienthoai
    }
    if(req.body.emailnguoinhan){
        req.session.cart.email=req.body.emailnguoinhan
    }
    if(req.body.ghichu){
        req.session.cart.ghichu=req.body.ghichu
    }
        
        let nhanvienController = require('../controllers/nhanvienController')
    
        return nhanvienController.layhetnhanvien()
    })
    .then((data)=>{
        res.locals.nhanviens=data;
        
            res.render('hoanthanh'); 
        
        
        
    })
    .catch(error=>next(error));
})
router.get('/hoanthanh', (req, res, next) =>{
    var cart=req.session.cart;
    res.locals.cart=cart.getCart();
    if(req.body.diachigiaohang){
        req.session.cart.diachi=req.body.diachigiaohang
    }
    if(req.body.phuongthucgiaohang){
        req.session.cart.phuongthucgiaohang=req.body.phuongthucgiaohang
    }
    if(req.body.hotenkhachhang){
        req.session.cart.tennguoinhan=req.body.hotenkhachhang
    }
    if(req.body.sodienthoai){
        req.session.cart.sodienthoai=req.body.sodienthoai
    }
    if(req.body.emailnguoinhan){
        req.session.cart.email=req.body.emailnguoinhan
    }
    if(req.body.ghichu){
        req.session.cart.ghichu=req.body.ghichu
    }

    var menuController=require('../controllers/menuController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        
        let nhanvienController = require('../controllers/nhanvienController')
    
        return nhanvienController.layhetnhanvien()
    })
    .then((data)=>{
        res.locals.nhanviens=data;
        if(cart.toanbosoluong>0){
            res.render('hoanthanh'); 
        }
        else{
            res.redirect("/giohang")
        }
        
    })
    .catch(error=>next(error));
})

router.get('/xacnhan', (req, res, next) =>{
    req.session.cart.empty()
    var menuController=require('../controllers/menuController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        res.render('dathangthanhcong')
    })
    .catch(error=>next(error));
    
})







module.exports=router;