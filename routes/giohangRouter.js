let express=require('express')
let router=express.Router()

router.get('/', (req, res, next) => {
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
        
        res.render('giohang'); 
    })
    .catch(error=>next(error));
})
router.get('/abc', (req, res, next)=>{
    var cart=req.session.cart;
    res.locals.cart=cart.getCart();
    var menuController=require('../controllers/menuController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        res.render('giohang'); 
        res.send(cart)
    })
    .catch(error=>next(error));
})
router.post('/', (req, res, next)=>{
    var productId=req.body.id
    var soluong=req.body.soluong
    var sanphamController=require('../controllers/sanphamController')
    sanphamController
    .laysptheoid(productId)
    .then(product =>{
        var cartItem=req.session.cart.add(product, productId, soluong)
        res.send(cartItem);
    })
    .catch(error=>next(error));
})
router.put('/', (req, res)=>{
    var productId=req.body.id;
    var soluong=req.body.soluong;
    var cartItem=req.session.cart.update(productId, soluong);
    res.json(cartItem)
})
router.delete('/', (req, res)=>{
    var productId=req.body.id;
    req.session.cart.remove(productId)
    res.json({
        toanbosoluong:req.session.cart.toanbosoluong,
        toanbogia: req.session.cart.toanbogia
    })
})
router.delete('/all', (req, res)=>{
    req.session.cart.empty()
    //res.sendStatus(204)
    res.end();
})

module.exports=router;