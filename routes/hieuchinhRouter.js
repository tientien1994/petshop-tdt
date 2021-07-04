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
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }
    
})
router.get('/nhanvien/sua-:idnv', (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }
   
})
router.post('/nhanvien/sua-:idnv',upload.single('fileanh'), (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }

})

router.get('/nhanvien/xoa-:idnv', (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }
    
})

router.get('/nhanvien/sua-:idnv/abc', (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }
    let nhanvienController = require('../controllers/nhanvienController')
    
    
})

router.get('/nhanvien/themnhanvien', (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }
   
})


router.post('/nhanvien/themnhanvien',upload.single('fileanh'), (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }

    
})











router.get('/sanpham', (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
        let spController=require('../controllers/sanphamController.js')
    menuController
    .menu()
    .then(data=>{
        res.locals.suasp= req.session.suansp
    res.locals.themsp=req.session.themsp
    res.locals.xoasp=req.session.xoasp
        res.locals.menu=data
        return spController.layhetsanpham(req.params, req.query)
    })
    .then(data=>{
        res.locals.sanpham=data.rows
        res.locals.sanpham.count=Math.ceil(data.count/50)
        req.session.suansp=false
        req.session.themsp=false
        req.session.xoasp=false
        res.render('hieuchinhsanpham')
        
    })
    .catch(err=>{next(err)})
    }
    else{
        res.redirect('/')
    }
    
})


////////////////////////////////////////////////////////////
router.post('/sanpham/sua-:idsp', upload.array('filesanpham',12), (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    var noidungfile = req.body.nhaptructiep
    if (req.files) {
        var files = req.files
        if(files[files.length-1]){
            if(files[files.length-1].mimetype.slice(0,4)=="text"){
                noidungfile = fs.readFileSync(files[files.length-1].path)
            }
        }
        for(var i=0;i<files.length;i++){
            if(files[i].mimetype.slice(0,5)=="image"){
                manglinkanh.push(`/img/sanpham/sanphamthu${req.body.idsp}_anh${i+1}.jpg`)
            }
        } 
    }
    
    var sanphamController=require('../controllers/sanphamController')
    return sanphamController.laymotsanphamdexoa(biensanpham.id)
    .then(data=>{
        if (manglinkanh.length>0){
            if(manglinkanh[0]&&data.loaitong!=null&&data.loaitong.length>20){
                var duongdanimg=path.join(__dirname,`../public${data.loaitong}`) 
                fs.unlink(duongdanimg, (err) => {
                    if (err) {
                      console.error(err)
                      return
                    }
                })
                biensanpham.loaitong=manglinkanh[0]
            }
            if(manglinkanh[1]&&data.loaichinh!=null&&data.loaichinh.length>20){
                var duongdanimg=path.join(__dirname,`../public${data.loaichinh.length>20}`) 
                fs.unlink(duongdanimg, (err) => {
                    if (err) {
                      console.error(err)
                      return
                    }
                })
                biensanpham.loaichinh=manglinkanh[1]
            }
            if(manglinkanh[2]&&data.loaisanpham!=null&&data.loaisanpham.length>20){
                var duongdanimg=path.join(__dirname,`../public${data.loaisanpham.length>20}`) 
                fs.unlink(duongdanimg, (err) => {
                    if (err) {
                      console.error(err)
                      return
                    }
                })
                biensanpham.loaisanpham=manglinkanh[2]
            }
        }
        
        if(noidungfile.length>0&&data.masanpham!=null&&data.masanpham.length>20){
            if(data.masanpham.length>10){
                var duongdan=path.join(__dirname,`../public${data.masanpham}`) 
            fs.unlink(duongdan, (err) => {
            if (err) {
              console.error(err)
              return
            }
        })
            
        }
    }
    
        return sanphamController.layloaitongloaichinh(biensanpham.loaisanphamId)
    })
    .then(data =>{
        biensanpham.loaichinhId=data.Loaichinh.id
        biensanpham.loaitongId=data.Loaichinh.Loaitong.id
        req.session.suansp=true  
        if(manglinkanh.length>0){
            if(manglinkanh[0]){
                let callback=(duongdananh, ndanh)=>{
                    fs.writeFile(duongdananh, ndanh , function (err) {
                        if (err) throw err;
                        console.log('Luu xong');
                      });
                }
                let laylink=(callback)=>{
                    biensanpham.loaitong=manglinkanh[0]
                    ndanh=fs.readFileSync(files[0].path)
                    var duongdananh=path.join(__dirname,`../public${biensanpham.loaitong}`) 
                    callback(duongdananh, ndanh)
                }
                laylink(callback)
            }


            if(manglinkanh[1]){
                let callback=(duongdananh, ndanh)=>{
                    fs.writeFile(duongdananh, ndanh , function (err) {
                        if (err) throw err;
                        console.log('Luu xong');
                      });
                }
                let laylink=(callback)=>{
                    biensanpham.loaichinh=manglinkanh[1]
                    ndanh=fs.readFileSync(files[1].path)
                    var duongdananh=path.join(__dirname,`../public${biensanpham.loaichinh}`) 
                    callback(duongdananh, ndanh)
                }
                laylink(callback)
            }


            if(manglinkanh[2]){
                let callback=(duongdananh, ndanh)=>{
                    fs.writeFile(duongdananh, ndanh , function (err) {
                        if (err) throw err;
                       console.log('Luu xong');
                      });
                }
                let laylink=(callback)=>{
                    biensanpham.loaisanpham=manglinkanh[2]
                    ndanh=fs.readFileSync(files[2].path)
                    var duongdananh=path.join(__dirname,`../public${biensanpham.loaisanpham}`) 
                    callback(duongdananh, ndanh)
                }
                laylink(callback)
            }
        }
        if(noidungfile.length>0){
            let callback=(duongdansuafile, noidungfile)=>{
                fs.writeFile(duongdansuafile, noidungfile , function (err) {
                    if (err) throw err;
                    console.log('Luu xong');
                });
            }
            let laylink=(callback)=>{
                biensanpham.masanpham=`/data/sanpham/gioithieusanpham${req.body.idsp}.txt`
                var duongdansuafile=path.join(__dirname,`../public${biensanpham.masanpham}`) 
                callback(duongdansuafile, noidungfile)
            }
            laylink(callback)
            
           
        }
        return sanphamController.suasanpham(biensanpham)
        
        
    })
    .then(data =>{
    
        res.redirect('/hieuchinh/sanpham')
    })
    .catch(err =>{next(err)})
    }
    else{
        res.redirect('/')
    }
    

})
/////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/sanpham/sua-:idsp', (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }
    
})

router.get('/sanpham/xoa-:idsp', (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
        let sanphamController = require('../controllers/sanphamController')
    let idsp=req.params.idsp;
    sanphamController
    .laymotsanphamdexoa(idsp)
    .then(data=>{
        if(data.loaitong){
            if(data.loaitong.length>10){
                let callback=(duongdan)=>{
                    fs.unlink(duongdan, (err) => {
                        if (err) {
                          console.error(err)
                          return
                        }
                    })
                }
                let layduongdan=callback=>{
                    var duongdan=path.join(__dirname,`../public/${data.loaitong}`)
                    callback(duongdan)
                }
                layduongdan(callback)
                
            }
        }
        if(data.loaichinh){
            if(data.loaichinh.length>15){
                
                let callback=(duongdan)=>{
                    fs.unlink(duongdan, (err) => {
                        if (err) {
                          console.error(err)
                          return
                        }
                    })
                }
                let layduongdan=(callback)=>{
                    var duongdan=path.join(__dirname,`../public/${data.loaichinh}`)
                    callback(duongdan)
                }
                layduongdan(callback)

                
            }
        }
        if(data.loaisanpham){
            if(data.loaisanpham.length>20){
                let callback=(duongdan)=>{
                    fs.unlink(duongdan, (err) => {
                        if (err) {
                          console.error(err)
                          return
                        }
                    })
                }
                let layduongdan=(callback)=>{
                    var duongdan=path.join(__dirname,`../public/${data.loaisanpham}`)
                    callback(duongdan)
                }
                layduongdan(callback)
                
               
               
            }
        }
        
        return sanphamController.xoasanpham(idsp)
    })
    
    .then(()=>{
        
        req.session.xoasp=true
        res.redirect('/hieuchinh/sanpham')
    })
    
        
   
    .catch(err=>{next(err)})
    }
    else{
        res.redirect('/')
    }
    
})

router.get('/sanpham/themsanpham', (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }
   
})


router.post('/sanpham/themsanpham', upload.array('filesanpham',12), (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    noidungfile = req.body.nhaptructiep
    var manglinkanh=[];
    if (req.files) {
        var files = req.files
        if(files[files.length-1]){
            if(files[files.length-1].mimetype.slice(0,4)=="text"){
                noidungfile = fs.readFileSync(files[files.length-1].path)
            }
        }

        
        for(var i=0;i<files.length;i++){
            if(files[i].mimetype.slice(0,5)=="image"){
                manglinkanh.push(`/img/sanpham/sanphamthu${files[i].filename}.jpg`)
            }
        }
        
    }
    
    manglinkanh.push(biensanpham.masanpham)
    
    
    var sanphamController=require('../controllers/sanphamController')
    sanphamController
    .layloaitongloaichinh(biensanpham.loaisanphamId)
    .then(data =>{
        biensanpham.loaichinhId=data.Loaichinh.id
        biensanpham.loaitongId=data.Loaichinh.Loaitong.id
        if(manglinkanh.length>0){
            if(manglinkanh[0]){
                let callback=(duongdananh, ndanh)=>{
                    fs.writeFile(duongdananh, ndanh , function (err) {
                        if (err) throw err;
                        console.log('Luu xong');
                      });
                }
                let laylink =(callback)=>{
                    biensanpham.loaitong=manglinkanh[0]
                ndanh=fs.readFileSync(files[0].path)
                var duongdananh=path.join(__dirname,`../public${biensanpham.loaitong}`) 
                callback(duongdananh,ndanh)
                }
                laylink(callback)
                
                
            }
            if(manglinkanh[1]){
                let callback=(duongdananh, ndanh)=>{
                    fs.writeFile(duongdananh, ndanh , function (err) {
                        if (err) throw err;
                        console.log('Luu xong');
                      });
                }
                let laylink=(callback)=>{
                    biensanpham.loaichinh=manglinkanh[1]
                    ndanh=fs.readFileSync(files[1].path)
                    var duongdananh=path.join(__dirname,`../public${biensanpham.loaichinh}`) 
                    callback(duongdananh, ndanh)
                }
                
                
                  laylink(callback)
            }
            if(manglinkanh[2]){
                let callback=(duongdananh, ndanh)=>{
                    fs.writeFile(duongdananh, ndanh , function (err) {
                        if (err) throw err;
                        console.log('Luu xong');
                      });
                }
                let laylink=(callback)=>{
                    ndanh=fs.readFileSync(files[2].path)
                    biensanpham.loaisanpham=manglinkanh[2]
                    var duongdananh=path.join(__dirname,`../public${biensanpham.loaisanpham}`) 
                    callback(duongdananh, ndanh)
                }
                laylink(callback)
                
                
            }
        }
        if(noidungfile.length>0){
            
            let callback=(duongdan, noidungfile)=>{
                fs.writeFile(duongdan, noidungfile , function (err) {
                    if (err) throw err;
                    console.log('Luu xong');
                  });
            }
            let laylink=(callback)=>{
                var time=new Date()
            var filename=time.getTime()
            biensanpham.masanpham=`/data/sanpham/${filename.toString()}.txt`
            var duongdan=path.join(__dirname,`../public${biensanpham.masanpham}`) 
            callback(duongdan,noidungfile)
            }
            laylink(callback)
            
        }
        return sanphamController.themsanpham(biensanpham)
        
    })
    .then(data =>{
        //res.send(biensanpham.masanpham)
        
        req.session.themsp=true;
        
        res.redirect('/hieuchinh/sanpham')
    })
    .catch(err =>{next(err)})
    }
    else{
        res.redirect('/')
    }
    

})













router.get('/tintuc', (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }
    
})











router.get('/chinhanh', (req, res, next)=>{
    if(req.session.nguoidung&&req.session.nguoidung.isadmin==true){
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
    }
    else{
        res.redirect('/')
    }
    
})
module.exports=router;