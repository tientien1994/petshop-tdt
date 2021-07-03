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
          if(req.file){
            var duongdan=path.join(__dirname,`../public/${data.diachi}`)
        fs.unlink(duongdan, (err) => {
            if (err) {
              console.error(err)
              return
            }
        })
          }
        
        return nhanvienController.suanhanvien(biennhanvien)
      })
      
      .then(() =>{
          if(req.file){
            var duongdan=path.join(__dirname,`../public/img/nhanvien/NV${req.body.idnv}.jpg`)
       
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
    res.locals.suasp= req.session.suansp
    res.locals.themsp=req.session.themsp
    res.locals.xoasp=req.session.xoasp
    let spController=require('../controllers/sanphamController.js')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return spController.layhetsanpham(req.params, req.query)
    })
    .then(data=>{
        res.locals.sanpham=data.rows
        res.locals.sanpham.count=Math.ceil(data.count/50)/////////////////////////////////////////////////////////////
        
        res.render('hieuchinhsanpham')
        req.session.suansp=false
        req.session.themsp=false
        req.session.xoasp=false
    })
    .catch(err=>{next(err)})
})
router.post('/sanpham/sua-:idsp', upload.array('filesanpham',12), (req, res, next)=>{
    var noidungfile=""; 
    var biensanpham={
        id:req.body.idsp,
        name:req.body.tensanpham,
        title:req.body.title,
        gia:req.body.giasanpham,
        soluong:req.body.soluong,
        loaisanphamId:req.body.loaisanpham,
        thuonghieuId:req.body.thuonghieu
    }
    var manglinkanh=[];
    if (req.files) {
        var files = req.files
        if(files[files.length-1]){
            if(files[files.length-1].mimetype.slice(0,4)=="text"){
                noidungfile = fs.readFileSync(files[files.length-1].path)
            }
        }
        else{
            noidungfile = req.body.nhaptructiep
        }
        for(var i=0;i<files.length;i++){
            if(files[i].mimetype.slice(0,5)=="image"){
                manglinkanh.push(`/img/sanpham/sanphamthu${req.body.idsp}_anh${i+1}.jpg`)
            }
        }
        if(manglinkanh.length>0){
            if(manglinkanh[0]){
                biensanpham.loaitong=manglinkanh[0]
                ndanh=fs.readFileSync(files[0].path)
                var duongdananh=path.join(__dirname,`../public${biensanpham.loaitong}`) 
                fs.writeFile(duongdananh, ndanh , function (err) {
                    if (err) throw err;
                   
                  });
            }
            if(manglinkanh[1]){
                biensanpham.loaichinh=manglinkanh[1]
                ndanh=fs.readFileSync(files[1].path)
                var duongdananh=path.join(__dirname,`../public${biensanpham.loaichinh}`) 
                fs.writeFile(duongdananh, ndanh , function (err) {
                    if (err) throw err;
                    
                  });
            }
            if(manglinkanh[2]){
                ndanh=fs.readFileSync(files[2].path)
                biensanpham.loaisanpham=manglinkanh[2]
                var duongdananh=path.join(__dirname,`../public${biensanpham.loaisanpham}`) 
                fs.writeFile(duongdananh, ndanh , function (err) {
                    if (err) throw err;
                    
                  });
            }
             
        }
        
    }
    
   
        
    
    
    
    
    var sanphamController=require('../controllers/sanphamController')
    sanphamController.laymotsanphamdexoa(biensanpham.id)
    .then(data=>{
        if (manglinkanh.length>0){
            if(manglinkanh[0]){
                var linkmasanpham=data.masanpham
                var duongdanimg=path.join(__dirname,`../public${data.loaitong}`) 
                fs.unlink(duongdanimg, (err) => {
                    if (err) {
                      console.error(err)
                      return
                    }
                })
            }
            if(manglinkanh[1]){
                var duongdanimg=path.join(__dirname,`../public${data.loaichinh}`) 
                fs.unlink(duongdanimg, (err) => {
                    if (err) {
                      console.error(err)
                      return
                    }
                })
            }
            if(manglinkanh[2]){
                var duongdanimg=path.join(__dirname,`../public${data.loaisanpham}`) 
                fs.unlink(duongdanimg, (err) => {
                    if (err) {
                      console.error(err)
                      return
                    }
                })
            }
        }
        
        if(noidungfile.length>0){
            biensanpham.masanpham=`/data/sanpham/gioithieusanpham${req.body.idsp}.txt`
            var duongdan=path.join(__dirname,`../public${linkmasanpham}`) 
            fs.unlink(duongdan, (err) => {
            if (err) {
              console.error(err)
              return
            }
        })
        }
        return sanphamController.layloaitongloaichinh(biensanpham.loaisanphamId)
    })
    
    .then(data =>{
        biensanpham.loaichinhId=data.Loaichinh.id
        biensanpham.loaitongId=data.Loaichinh.Loaitong.id
        return sanphamController.suasanpham(biensanpham)
        
    })
    .then(data =>{
        if(manglinkanh.length>0){
            if(manglinkanh[0]){
                biensanpham.loaitong=manglinkanh[0]
                ndanh=fs.readFileSync(files[0].path)
                var duongdananh=path.join(__dirname,`../public${biensanpham.loaitong}`) 
                fs.writeFile(duongdananh, ndanh , function (err) {
                    if (err) throw err;
                   
                  });
            }
            if(manglinkanh[1]){
                biensanpham.loaichinh=manglinkanh[1]
                ndanh=fs.readFileSync(files[1].path)
                var duongdananh=path.join(__dirname,`../public${biensanpham.loaichinh}`) 
                fs.writeFile(duongdananh, ndanh , function (err) {
                    if (err) throw err;
                    
                  });
            }
            if(manglinkanh[2]){
                ndanh=fs.readFileSync(files[2].path)
                biensanpham.loaisanpham=manglinkanh[2]
                var duongdananh=path.join(__dirname,`../public${biensanpham.loaisanpham}`) 
                fs.writeFile(duongdananh, ndanh , function (err) {
                    if (err) throw err;
                    
                  });
            }
        }
        if(noidungfile.length>0){
            var duongdansuafile=path.join(__dirname,`../public${biensanpham.masanpham}`) 
            fs.writeFile(duongdansuafile, noidungfile , function (err) {
            if (err) throw err;
            console.log('Luu xong');
        });
        }
        
        req.session.suansp=true  
        res.redirect('/hieuchinh/sanpham')
    })
    .catch(err =>{next(err)})

})
router.get('/sanpham/sua-:idsp', (req, res, next)=>{
    let sanphamController = require('../controllers/sanphamController')
    let idsp=req.params.idsp;
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return sanphamController.laymotsanpham(idsp)
    })
    .then(data=>{
        res.locals.motsanpham=data
        return sanphamController.layhetloaisanpham()
    })
    .then(data=>{
        res.locals.loaisanpham=data
        let thuonghieuController=require('../controllers/thuonghieuController')
        return thuonghieuController.laythuonghieu(req.params, req.query)
    })
    .then(data=>{
        res.locals.thuonghieu=data
        res.render('hieuchinhsuasanpham')
    })
    .catch(err=>{next(err)})
})

router.get('/sanpham/xoa-:idsp', (req, res, next)=>{
    let sanphamController = require('../controllers/sanphamController')
    let idsp=req.params.idsp;
    sanphamController
    .laymotsanphamdexoa(idsp)
    .then(data=>{
        if(data.loaitong){
            if(data.loaitong.length>10){
                var duongdan=path.join(__dirname,`../public/${data.loaitong}`)
                fs.unlink(duongdan, (err) => {
                if (err) {
                  console.error(err)
                  return
                }
            })
            }
        }
        if(data.loaichinh){
            if(data.loaichinh.length>15){
                var duongdan=path.join(__dirname,`../public/${data.loaichinh}`)
                fs.unlink(duongdan, (err) => {
                if (err) {
                  console.error(err)
                  return
                }
            })
            }
        }
        if(data.loaisanpham){
            if(data.loaisanpham.length>20){
                var duongdan=path.join(__dirname,`../public/${data.loaisanpham}`)
                fs.unlink(duongdan, (err) => {
                if (err) {
                  console.error(err)
                  return
                }
            })
            }
        }
        
        return sanphamController.xoasanpham(idsp)
    })
    
    .then(()=>{
        
        req.session.xoasp=true
        res.redirect('/hieuchinh/sanpham')
    })
    
        
   
    .catch(err=>{next(err)})
})

router.get('/sanpham/themsanpham', (req, res, next)=>{
    
    let sanphamController = require('../controllers/sanphamController')
   
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return sanphamController.layhetloaisanpham()
    })
    .then(data=>{
        res.locals.loaisanpham=data
        let thuonghieuController=require('../controllers/thuonghieuController')
        return thuonghieuController.laythuonghieu(req.params, req.query)
    })
    .then(data=>{
        res.locals.thuonghieu=data
        res.render('hieuchinhthemsanpham')

    })
    .catch(err=>{next(err)})
})


router.post('/sanpham/themsanpham', upload.array('filesanpham',12), (req, res, next)=>{
    var noidungfile=""; 
    var biensanpham={
        id:req.body.idsp,
        name:req.body.tensanpham,
        title:req.body.title,
        gia:req.body.giasanpham,
        soluong:req.body.soluong,
        loaisanphamId:req.body.loaisanpham,
        thuonghieuId:req.body.thuonghieu,
        luotxem:0,
        loaitong:'',
        loaichinh:'',
        loaisanpham:''
        //masanpham: duong dan file san pham
    }
    var manglinkanh=[];
    if (req.files) {
        var files = req.files
        if(files[files.length-1]){
            if(files[files.length-1].mimetype.slice(0,4)=="text"){
                noidungfile = fs.readFileSync(files[files.length-1].path)
            }
        }
        else{
            noidungfile = req.body.nhaptructiep
        }
        if(noidungfile.length>0){
            var time=new Date()
            var filename=time.getTime()
    
            biensanpham.masanpham=`/data/sanpham/${filename.toString()}.txt`
            var duongdan=path.join(__dirname,`../public${biensanpham.masanpham}`) 
            fs.writeFile(duongdan, noidungfile , function (err) {
                if (err) throw err;
                console.log('Luu xong');
              });
        }
        for(var i=0;i<files.length;i++){
            if(files[i].mimetype.slice(0,5)=="image"){
                manglinkanh.push(`/img/sanpham/sanphamthu${files[i].filename}.jpg`)
            }
        }
        if(manglinkanh[0]){
            biensanpham.loaitong=manglinkanh[0]
            ndanh=fs.readFileSync(files[0].path)
            var duongdananh=path.join(__dirname,`../public${biensanpham.loaitong}`) 
            fs.writeFile(duongdananh, ndanh , function (err) {
                if (err) throw err;
                console.log('Luu xong');
              });
        }
        if(manglinkanh[1]){
            biensanpham.loaichinh=manglinkanh[1]
            ndanh=fs.readFileSync(files[1].path)
            var duongdananh=path.join(__dirname,`../public${biensanpham.loaichinh}`) 
            fs.writeFile(duongdananh, ndanh , function (err) {
                if (err) throw err;
                console.log('Luu xong');
              });
        }
        if(manglinkanh[2]){
            ndanh=fs.readFileSync(files[2].path)
            biensanpham.loaisanpham=manglinkanh[2]
            var duongdananh=path.join(__dirname,`../public${biensanpham.loaisanpham}`) 
            fs.writeFile(duongdananh, ndanh , function (err) {
                if (err) throw err;
                console.log('Luu xong');
              });
        }
    }
    
      
    
    
    
    
    
    
    manglinkanh.push(biensanpham.masanpham)
    
    
    var sanphamController=require('../controllers/sanphamController')
    sanphamController
    .layloaitongloaichinh(biensanpham.loaisanphamId)
    .then(data =>{
        biensanpham.loaichinhId=data.Loaichinh.id
        biensanpham.loaitongId=data.Loaichinh.Loaitong.id
        return sanphamController.themsanpham(biensanpham)
        
    })
    .then(data =>{
        //res.send(biensanpham.masanpham)
        
        req.session.themsp=true;
        
        res.redirect('/hieuchinh/sanpham')
    })
    .catch(err =>{next(err)})

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