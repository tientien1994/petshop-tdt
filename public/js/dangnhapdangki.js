var dangnhapbtn=document.querySelector('.dangnhap-btn')
var dangkibtn=document.querySelector('.dangki-btn')
var formhienthi=document.querySelector('.hienthi')
var bg=document.querySelector('.dangnhapdangki')
var formdangnhap=document.querySelector('.form-dangnhap')
var formdangki=document.querySelector('.form-dangki')
dangkibtn.onclick=()=>{
    formhienthi.classList.add('dndk-acc')
    bg.classList.add('dndk-acc')
    formdangnhap.classList.add('form-dangnhap-acc')
    formdangki.classList.add('form-dangki-acc')
}
dangnhapbtn.onclick=()=>{
    formhienthi.classList.remove('dndk-acc')
    bg.classList.remove('dndk-acc')
    formdangnhap.classList.remove('form-dangnhap-acc')
    formdangki.classList.remove('form-dangki-acc')
}