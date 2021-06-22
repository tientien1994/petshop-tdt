let express=require('express')
let router=express.Router()
let dkdnController=require('../controllers/dkdnController')
let menuController=require('../controllers/menuController')

router.get('/', (req, res, next) => {
    req.session.returnpage=req.query.returnpage
        
        menuController
        .menu()
        .then((data)=>{
            res.locals.menu=data
            res.render('dangnhapdangki')
        })
        .catch(err=>{next(err)}) 
})
router.post('/', (req, res, next) => {
    
    //console.log('return----' +req.session.returnpage)
    if(req.body.dkdn=='dk'){
        let fullname= req.body.fullname
         let   isadmin=false
          let  name=req.body.name
          let  matkhau=req.body.matkhau
        
        let nhaplaimatkhau=req.body.nhaplaimatkhau
        let giudangnhap=(req.body.giudangnhap!=undefined)

        if(matkhau!=nhaplaimatkhau){
            return res.render('dangnhapdangki',{
                thongbao: 'Mật khẩu chưa giống nhau',
                type:'baodongdo',
                hientrang:'dndk-acc',
                vitriformdangnhap:'form-dangnhap-acc',
                vitriformdangki:'form-dangki-acc'
            })
        }
        menuController
        .menu()
        .then(data=>{
            res.locals.menu=data
            return dkdnController
            .laybangemail(name)
        })
        .then(user=>{
            if(user){
                return res.render('dangnhapdangki',{
                    thongbao:`Email ${name} đã được sử dụng, vui lòng chọn dùng email khác`,
                    type:'baodongdo',
                    hientrang:'dndk-acc',
                    vitriformdangnhap:'form-dangnhap-acc',
                    vitriformdangki:'form-dangki-acc'
                });
            }
            nguoidung={
                "fullname":fullname,
                "name":name,
                "isadmin":isadmin,
                "matkhau":matkhau
            }
            //res.send(nguoidung)
            return dkdnController
            .taonguoidung(nguoidung)
            .then(nguoidung=>{
                if(giudangnhap){
                    req.session.nguoidung=nguoidung;
                    return res.render('/')
                }else{
                    return res.render('dangnhapdangki',{
                        thongbao:'Đăng kí thanh công, đăng nhập ngay bây giờ',
                        type:'baodongxanhla',
                        hientrang:'dndk-acc',
                        vitriformdangnhap:'form-dangnhap-acc',
                        vitriformdangki:'form-dangki-acc'
                    })
                }
                
            })
            
        })
        .catch(err=>{next(err)})
    }
    if(req.body.dkdn=='dn'){
        let name = req.body.name
        let matkhau=req.body.matkhau
        let giudangnhap=req.body.giudangnhap
        //console.log("giu dng nhap la ::::" + giudangnhap)
        menuController
        .menu()
        .then(data=>{
            res.locals.menu=data
            return dkdnController
            .laybangemail(name)
        })
        .then(nguoidung=>{
            if(nguoidung){
                if(dkdnController.mahoanguocpass(matkhau, nguoidung.matkhau)){
                    req.session.cookie.maxAge=giudangnhap?30*24*60*60*1000:null
                    req.session.nguoidung=nguoidung
                    if(req.session.returnpage){
                        res.redirect(req.session.returnpage)
                        req.session.returnpage=''
                    }else{
                        res.redirect('/')
                    }
                        
                }
                else{
                    res.render('dangnhapdangki',{
                        thongbao:'Sai mật khẩu',
                        type:'baodongdo',
                        hientrang:'',
                        vitriformdangnhap:'',
                        vitriformdangki:''
                    })
                } 
            }
            else{
                res.render('dangnhapdangki',{
                    thongbao:'Email này chưa được đăng kí',
                    type:'baodongdo',
                    hientrang:'',
                    vitriformdangnhap:'',
                    vitriformdangki:''
                })
            }
            
        })
    }

})

router.get('/dangxuat',(req, res)=>{
    req.session.destroy(err=>{
        if(err) {return next(err)}
        return res.redirect('/dndk')
    })
})

module.exports=router