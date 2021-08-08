window.addEventListener('load',function(){
    let lbt = document.querySelector('.lbt_0');
    let slider_fl =document.querySelector('.slider_fl');
    let slider_fr =document.querySelector('.slider_fr');
    let lbtWidth = lbt.offsetWidth;
    lbt.addEventListener('mouseenter',function(){
        slider_fl.style.display = 'block';
        slider_fr.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    lbt.addEventListener('mouseleave',function(){
        slider_fl.style.display = 'none';
        slider_fr.style.display = 'none';
        timer =setInterval(function(){
            slider_fr.click();
        },2000);
    });
    let ul = lbt.querySelector('ul');
    let ol = lbt.querySelector('ol');
    for(let i = 0 ; i < ul.children.length; i++){
        let li = this.document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function(){
            for(let i = 0; i < ol.children.length; i++){
                ol.children[i].className ='';
            }
            this.className ='current';
            let index = this.getAttribute('index');
            num = index;
            circle =index;
            animate(ul,-index * lbtWidth);
        });
    }
    ol.children[0].className='current';
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    let num = 0;
    let flag = true;
    let circle = 0;
    slider_fr.addEventListener('click',function(){
        if(flag){
            flag =false;
            if(num == ul.children.length - 1){
                ul.style.left = 0;
                num = 0;
              }
          num++;
          animate(ul,-num * lbtWidth,function(){
              flag=true;
          });
              circle++;
              if(circle == ol.children.length){
                  circle =0;
              }
              circleChange();
        }
    });
    slider_fl.addEventListener('click',function(){
      if(flag){
          flag=false;
          if(num == 0){
            num = ul.children.length-1;
            ul.style.left = -num * lbtWidth + 'px';
        }
    num--;
    animate(ul,-num * lbtWidth,function(){
        flag=true;
    });
        circle--;
        if(circle < 0){
            circle =ol.children.length -1;
        }
        circleChange();
      }
});
    function circleChange(){
        for(var i = 0; i< ol.children.length; i++){
            ol.children[i].className = '';
        }
        // 留下当前的小圆点的类名
        ol.children[circle].className = 'current';
     };
     let timer =setInterval(function(){
        slider_fr.click();
    },2000);
})