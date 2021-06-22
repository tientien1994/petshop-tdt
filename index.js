var express = require('express')
var app = express()
var path = require('path');

//var fs=require('fs');

//link file template with
app.use(express.static(path.join(__dirname, '/public')))
// app.get('/dir',(req, res)=>{
//     res.send(__dirname)
// })
//app.use('img/nhanvien',express.static(path.join(__dirname, 'public/img/nhanvien')))

let expressHbs=require('express-handlebars');

let hbs=expressHbs.create({
    extname:'hbs',
    defaultLayout: 'layout',
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault:true

    },
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    helpers:{
        chialaydu: function(gia){
            return gia%10+ 1;
        },
        chialaydu2: function(gia){
            return gia%10+ 2;
        },
        chialaydu3: function(gia){
            return gia%10+ 3;
        },
        each6: function(arr){
            var total = arr.length;
            //console.log(total);
            var buffer=[];
            if(total>6){
                for (var i = 0; i <6; i++) {
                    buffer[i] = arr[i];
                  }
            }
            else{
                for (var i = 0; i < total; i++) {
                    buffer[i] = arr[i];
                  }
            }
            
            return buffer;
        },
        sosanh: function(a,b){
            if(a==b)
            {return true}
            else{return false}

        },
        sosanhso: function(a,b){
            if(parseInt(a)==parseInt(b))
            {return true}
            else{return false}
        },
        tien: function(n) {
            return (Math.round(parseInt(n)/1000)*1000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
          },
        ngaythang: function(date){
            return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
        },
        stt:function(index){
            return index+1
        },
        vung:function(a,b){
            if(a!=null&&b==null){
                return true
            }
            return false

        }

    }
})



app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');


app.use(express.urlencoded({extended: true}));
app.use(express.json())


var cookieParser=require('cookie-parser');
app.use(cookieParser())

let session =require('express-session');
app.use(session({
    cookie:{ httpOnly: true, maxAge: null},
    secret:'s3cret',
    resave:false,
    saveUninitialized:false
}));

var Cart=require('./controllers/cartController')
app.use((req, res, next)=>{
    var cart=new Cart(req.session.cart?req.session.cart:{});
    req.session.cart=cart
    res.locals.toanbosoluong=cart.toanbosoluong

    res.locals.tenuser=req.session.nguoidung?req.session.nguoidung.fullname:'';
    res.locals.nguoidungId=req.session.nguoidung?req.session.nguoidung.id:'';
    res.locals.trangthaidangnhap=req.session.nguoidung?true:false;
    res.locals.isadmin=req.session.nguoidung?req.session.nguoidung.isadmin:false;
    next();
})
app.use('/giohang',require('./routes/giohangRouter'))

app.use('/', require('./routes/indexRouter'))

app.use('/sanpham',require('./routes/sanphamRouter'))

app.use('/comment', require('./routes/commentRouter'))



app.use('/tintuc', require('./routes/tintucRouter'))



app.use('/gioithieu', require('./routes/gioithieuRouter'))
app.use('/dndk', require('./routes/dkdnRouter'))
app.use('/bando', require('./routes/bandoRouter'))

let models=require('./models')

app.use('/truyvan', (req, res)=>{
    models.Sanpham
    .findAll()
    .then(function(data){
        res.json(data)
    })
    .catch(function(err){
        res.json(err)
    })
})
app.use('/randomsp',(req, res)=>{
    models.Sanpham
    .create({
        name:'Sản phẩm thứ',
        title:'Hệ miễn dịch khỏe mạnh: Hàm lượng vitamin E tối ưu, một chất chống oxy hóa tự nhiên, giúp tăng cường hệ thống miễn dịch và khả năng kháng bệnh của thú cưng.', 
        gia:parseInt((Math.random()*10000000).toFixed(0)),
        luotxem:0,
        masanpham:'masanpham',
        soluong: parseInt((Math.random()*100).toFixed(0)),
        createdAt: new Date(),
        updatedAt: new Date(),
        loaitongId: 2,
        loaichinhId:20,
        loaisanphamId:65,
        thuonghieuId:parseInt((Math.random()*7+1).toFixed(0))
    })
    .then(function(sanpham){
        res.json(sanpham)
    })
    .catch(function(err){
        res.json(err);
    })
})
app.use('/update',(req, res)=>{
    models.Loaitong
    .update(
        {
            link:'chomeo'
        },{
            where:{id:2}
        }
    )
    .then(function(sanpham){
        res.json(sanpham)
    })
    .catch(function(err){
        res.json(err);
    })
})


app.get('/sync', (req, res)=>{
    let models=require('./models');
    models.sequelize.sync()
    .then(()=>{
        res.send('ket noi thanh cong')
    })
})
// var models=require('./models');
// app.get('/truyvan',(req, res)=>{
//     models.Chinhanh
//     .findOne({ 
//         where:{id: 1}, 
//         include:[{
//             model: models.Nhanvien,
//             where:{id:3}
//         }]
            
        
//     })
//     .then((chinhanh)=>{
//         res.json(chinhanh)
//     })
//     .catch(function(error){
//         res.json(error)
//     })
// })


//tao port
app.set('port', process.env.PORT||5000)

app.listen(app.get('port'), function() {
    console.log('Port...'+app.get('port'));
})

