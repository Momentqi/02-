var viewHeight = document.documentElement.clientHeight;
function lazyload() {
var imgs = document.querySelectorAll('img[data-original][lazyload]');
imgs.forEach(item => {

if (item.dataset.original == '') {
return;
}
var rect = item.getBoundingClientRect();
if (rect.bottom >= 0 && rect.top < viewHeight) {
var img = new Image();
img.src = item.dataset.original;
// console.log(img.src)
img.onload = function() {
item.src = img.src;
}
item.removeAttribute('data-original');
item.removeAttribute('lazyload')
}
})
}
lazyload();
document.addEventListener('scroll', lazyload)
