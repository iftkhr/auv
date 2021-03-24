var x = document.querySelector("#nav").classList;
var y = document.querySelector("#uparrow").classList;

function nav(){
    if (x == 'hide') {
        x.remove('hide');
        y.add('hide')
    }
    else{
        x.add('hide');
    }
}

function menuHide(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        x.add("hide");
    }
}

function upArrowHide(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        y.remove("hide");
    }
    else{
        y.add("hide");
    }
}
function upArrow(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
