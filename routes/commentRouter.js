let express=require('express')
let router=express.Router()

router.post('/',(req, res,next) =>{
    let controller=require('../controllers/commentController')
    let comment={
        nguoidungId:req.body.nguoidungId,
        sanphamId:req.body.sanphamId,
        ndcmt: req.body.ndcmt
    }
    if(!isNaN(req.body.parent)&&(req.body.parent!="")){
        comment.parent=req.body.parent;
    }
    link=req.body.link;

console.log(comment)
    controller
    .themcomment(comment)
    .then((data) =>{
        res.redirect(link)
    })
    .catch(err =>{next(err)})
})

module.exports=router;