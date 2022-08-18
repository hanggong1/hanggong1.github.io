var lastScrollBottom = 0;
var delta = 5;
var fixBox = document.querySelector('.container');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;
//스크롤 이벤트 
window.onscroll = function(e) {
    didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled(){
    var nowScrollBottom = window.scrollY;
    if(Math.abs(lastScrollBottom - nowScrollBottom) <= delta){
        return;
    }
    if(nowScrollBottom < lastScrollBottom && nowScrollBottom < fixBoxHeight){
        //Scroll up
        fixBox.classList.remove('show');
    }else{
        if(nowScrollTop + window.innerHeight > document.body.offsetHeight){
            //Scroll down
            fixBox.classList.add('show');
        }
    }
    lastScrollBottom = nowScrollBottom;
}