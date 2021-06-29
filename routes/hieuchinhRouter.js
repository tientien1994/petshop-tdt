let express=require('express')
let router=express.Router()
let menuController=require('../controllers/menuController.js')
let models=require('../models')
let fs = require('fs')
const path = require("path");
const multer = require("multer");




var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })
  
router.get('/nhanvien', (req, res, next)=>{
    
    res.locals.suanhanvien=req.session.suanhanvien
    res.locals.themnhanvien=req.session.themnhanvien
    res.locals.xoanhanvien=req.session.xoanhanvien
    let nhanvienController = require('../controllers/nhanvienController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return nhanvienController.layhetnhanvien()
    })
    .then(data=>{
        res.locals.tatcanhanvien=data
        
        res.render('hieuchinhnhanvien')
        req.session.suanhanvien=false;
        req.session.themnhanvien=false;
        req.session.xoanhanvien=false;
        
    })
    .catch(err=>{next(err)})
})
router.get('/nhanvien/sua-:idnv', (req, res, next)=>{
    let nhanvienController = require('../controllers/nhanvienController')
    let idnv=req.params.idnv;
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return nhanvienController.motnhanvien(idnv)
    })
    .then(data=>{
        res.locals.nhanvien=data
        let vitriController=require('../controllers/vitriController')
        return vitriController.layhetvitri()
    })
    .then(data=>{
        res.locals.vitri=data;
        let chinhanhController=require('../controllers//chinhanhController')
        return chinhanhController.layhetchinhanh()
        
    })
    .then(data=>{
        res.locals.chinhanh=data
        //res.send(res.locals.virtri)
        res.render('hieuchinhsuanhanvien')
    })
    .catch(err=>{next(err)})
})
router.post('/nhanvien/sua-:idnv',upload.single('fileanh'), (req, res, next)=>{
    var biennhanvien={
        id:req.body.idnv,
        name:req.body.hotennhanvien,
        updatedAt: new Date(),
        phone:req.body.sodienthoainhanvien,
        luong:req.body.luongnhanvien,
        chinhanhId:req.body.chinhanhid,
        vitriId:req.body.vitriid,
    }
    if(req.file){
        biennhanvien.diachi="/img/nhanvien/NV"+req.body.idnv+'.jpg'
    }
    

      let nhanvienController = require('../controllers/nhanvienController')
      nhanvienController.motnhanvien(req.params.idnv)
      .then(data=>{
        var duongdan=path.join(__dirname,`../public/${data.diachi}`)
        fs.unlink(duongdan, (err) => {
            if (err) {
              console.error(err)
              return
            }
    })

        return nhanvienController.suanhanvien(biennhanvien)
      })
      
      .then(() =>{
          if(req.file){
            var duongdan=path.join(__dirname,`../public/img/nhanvien/NV${req.body.idnv}.jpg`)
        //data.file=fs.readFileSync(path.join(__dirname,`../public/data/tintuc/${req.params.idtheloai}/${req.params.idbaiviet}.txt`),'utf8')
        var img = fs.readFileSync(req.file.path);
        fs.writeFile(duongdan, img , function (err) {
            if (err) throw err;
            console.log('Luu xong');
          });
          }
      })
      .then(()=>{
        req.session.suanhanvien=true;
        //res.send(duongdan)
        res.redirect('/hieuchinh/nhanvien')
      })
      .catch(err=>{next(err)})
})

router.get('/nhanvien/xoa-:idnv', (req, res, next)=>{
    filepath=""
    let nhanvienController = require('../controllers/nhanvienController')
    nhanvienController
    .timnhanvien(parseInt(req.params.idnv))
    .then(data=>{
        res.locals.nhanvienbixoa=data
        filepath=res.locals.nhanvienbixoa.diachi
        return nhanvienController.xoanhanvien(req.params.idnv)
    })
    
    .then((data)=>{
        if(filepath.length>10){
            var duongdan=path.join(__dirname,`../public/${filepath}`)
            fs.unlink(duongdan, (err) => {
                if (err) {
                  console.error(err)
                  return
                }
        })
    }
    req.session.xoanhanvien=true;
        res.redirect('/hieuchinh/nhanvien')
    })
    .catch(err=>{next(err)})
})

router.get('/nhanvien/sua-:idnv/abc', (req, res, next)=>{
    let nhanvienController = require('../controllers/nhanvienController')
    
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return nhanvienController.motnhanvien()
    })
    .then(data=>{
        res.locals.nhanvien=data
        res.send(data)
        res.render('hieuchinhsuanhanvien')
    })
    .catch(err=>{next(err)})
})

router.get('/nhanvien/themnhanvien', (req, res, next)=>{
    let nhanvienController = require('../controllers/nhanvienController')
    
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        let vitriController=require('../controllers/vitriController')
        return vitriController.layhetvitri()
    })
    .then(data=>{
        res.locals.vitri=data;
        let chinhanhController=require('../controllers//chinhanhController')
        return chinhanhController.layhetchinhanh()
        
    })
    .then(data=>{
        res.locals.chinhanh=data
        res.render('hieuchinhthemnhanvien')
    })
    .catch(err=>{next(err)})
})


router.post('/nhanvien/themnhanvien',upload.single('fileanh'), (req, res, next)=>{

    var biennhanvien={
        name:req.body.hotennhanvien,
        phone:req.body.sodienthoainhanvien,
        luong:req.body.luongnhanvien,
        chinhanhId:req.body.chinhanhid,
        vitriId:req.body.vitriid,
    }
    if(req.file){
        biennhanvien.diachi="/img/nhanvien/"+req.file.filename+'.jpg'
    }
    else{
        biennhanvien.diachi="/img/nhanvien/user.jpg"
    }
    let nhanvienController = require('../controllers/nhanvienController')
    
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return nhanvienController.themnhanvien(biennhanvien)
    })
    .then(data=>{
        if(req.file){
            var duongdan=path.join(__dirname,`../public/${biennhanvien.diachi}`)
        //data.file=fs.readFileSync(path.join(__dirname,`../public/data/tintuc/${req.params.idtheloai}/${req.params.idbaiviet}.txt`),'utf8')
        var img = fs.readFileSync(req.file.path);
        fs.writeFile(duongdan, img , function (err) {
            if (err) throw err;
            console.log('Luu xong');
          });
          }
          req.session.themnhanvien=true;
        res.redirect('/hieuchinh/nhanvien')
    })
    .catch(err=>{next(err)})
})











router.get('/sanpham', (req, res, next)=>{
    
    let spController=require('../controllers/sanphamController.js')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return spController.luotxemnhieunhat()
    })
    .then(data=>{
        res.locals.topsanpham=data
        res.render('hieuchinhchuahoanthanh')
    })
    .catch(err=>{next(err)})
})




router.get('/tintuc', (req, res, next)=>{
    
    let spController=require('../controllers/sanphamController.js')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return spController.luotxemnhieunhat()
    })
    .then(data=>{
        res.locals.topsanpham=data
        res.render('hieuchinhchuahoanthanh')
    })
    .catch(err=>{next(err)})
})






router.get('/chinhanh', (req, res, next)=>{
    let nhanvienController = require('../controllers/nhanvienController')
    let spController=require('../controllers/sanphamController.js')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return nhanvienController.layhetnhanvien()
    })
    .then(data=>{
        res.locals.tatcanhanvien=data
        res.render('hieuchinhchuahoanthanh')
    })
    .catch(err=>{next(err)})
})
module.exports=router;