var icon = document.querySelector('.btn');
var menu = document.querySelector('.menu');
menu.style.display='none';

var flag = 0;
icon.addEventListener("click", function(){
    if(flag == 0){
        menu.style.display ='flex';
        flag = 1;
        // console.log(flag)
    }else{
        menu.style.display = 'none';
        flag = 0;
        // console.log(flag)
    }
})