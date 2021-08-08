window.onload = function(){
    var regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var regqq = /^[1-9][0-9]{4,}$/;
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var regmsg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var regpwd = /^[a-zA-Z]\w{5,17}$/;
    var tel =document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(pwd,regpwd);
    regexp(msg,regmsg);
    regexp(nc,regnc);
    regexp(tel,regtel);
   regexp(qq,regqq);
    function regexp(ele,reg){
    ele.onblur = function(){
        if(reg.test(this.value)){
            this.nextElementSibling.className ='success';
            this.nextElementSibling.innerHTML='<i class="success_ico"></i>正确';
        console.log('正常');
        }else{
            this.nextElementSibling.className ='error';
            this.nextElementSibling.innerHTML='<i class="error_ico"></i>错误';
        }
    }
   }
   surepwd.onblur = function(){
       if(this.value == pwd.value){
        this.nextElementSibling.className ='success';
        this.nextElementSibling.innerHTML='<i class="success_ico"></i>正确';
       }else{
        this.nextElementSibling.className ='error';
        this.nextElementSibling.innerHTML='<i class="error_ico"></i>错误';
       }
   }
}