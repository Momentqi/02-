window.addEventListener('load',function(){
    
    var hour = document.querySelector('.hour');
    var minute = document.querySelector('.minute');
    var second = document.querySelector('.second');
    var inputTime = +new Date('2022-6-1 18:00:00');
    // 2.开始定时器
    if(!inputTime){
        minute.innerHTML="00";
        hour.innerHTML="00";
        second.innerHTML="00";
}else{
    countDown();
    setInterval(countDown,1000);
    function countDown(){
        var nowTime = +new Date();
        var times = (inputTime - nowTime) / 1000;
        var h = parseInt(times / 60 / 60 %24);
        h = h < 10 ? '0' + h : h; 
        hour.innerHTML = h;
        var m = parseInt(times / 60 %60);
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m;
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
    };
}
});
