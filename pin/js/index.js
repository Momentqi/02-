window.addEventListener('load',function(){
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
         timer =setInterval(function(){
            arrow_r.click();
        },2000);
    })
    var ul =focus.querySelector('ul');
    var ol = focus.querySelector('.circle')
    // console.log(ul.children.length);
    // ul.children 元素的孩子
    for(var i = 0; i < ul.children.length; i++){
        //创建一个小li
            var li = document.createElement('li');
            // 记录当前小圆圈的索引 
            li.setAttribute('index',i);
            //插入到OL里面
            ol.appendChild(li);
            li.addEventListener('click',function(){
                for(var i = 0; i < ol.children.length; i++){
                    ol.children[i].className ='';
                }
                this.className = 'current';
            //     // 点击下圆圈移动图片
            //     // 当我们点击某个小li 就拿到当前小LI的 索引号
                var index = this.getAttribute('index');
              num = index;
              circle =index;
                console.log(focusWidth);
                console.log(index);
              animate(ul,-index * focusWidth);
            })
        }
    // 把ol第一个li设置类名
    ol.children[0].className = 'current';
    // 6克隆第一张图片 li放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //  7点击右键按钮，图片滚动一张
        //控制右侧按钮 ，图片滚动 
    var num = 0;
    // 控制小圆圈的播放
    var circle= 0;
    var flag =true;
        arrow_r.addEventListener('click',function(){
          if(flag){
              flag =false;
              if(num == ul.children.length - 1){
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth,function(){
                flag = true;
            });
            circle++;
            if(circle == ol.children.length){
                circle =0;
            }
            circleChange();
          }
        })
        arrow_l.addEventListener('click',function(){
           if(flag){
               flag = false;
               if(num == 0){
                num = ul.children.length-1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth,function(){
                flag = true;
            });
            circle--;
            circle = circle < 0 ?  ol.children.length -1 : circle;
            circleChange();
           }
         });
         function circleChange(){
            for(var i = 0; i< ol.children.length; i++){
                ol.children[i].className = '';
            }
            // 留下当前的小圆点的类名
            ol.children[circle].className = 'current';
         }
         var timer =setInterval(function(){
             arrow_r.click();
         },2000);
    })