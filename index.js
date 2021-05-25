let express =require('express');
let app=express();
//var fs=require('fs');

//link file template with
app.use(express.static(__dirname + '/public'));

let expressHbs=require('express-handlebars');

let hbs=expressHbs.create({
    extname:'hbs',
    defaultLayout: 'layout',
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault:true

    },
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
})
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render('index');
})
app.get('/tintuc', (req, res)=>{
    res.render('tintuc');
})
app.get('/sanpham:loai', (req, res)=>{
    var x=req.params.loai;
    let loaipage={
        chocho: 'chó',
        chomeo: 'mèo'
    }
    //res.send(loaipage[x])
    
    res.render('sanpham', {loaipage: loaipage[x]});
})
app.get('/gioithieu', (req, res)=>{
    res.render('gioithieu');
})

app.get('/lienhe', (req, res)=>{
    res.render('lienhe');
})





//tao port
app.set('port', process.env.PORT||5000)

app.listen(app.get('port'), function() {
    console.log('Port...'+app.get('port'));
})