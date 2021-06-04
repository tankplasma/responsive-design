var burger = document.getElementById("burger");

var menue = document.getElementById("header_menu");

var istrue = new Boolean ("true");

burger.onclick = function(){
    burger.classList.toggle('active');
    if(istrue == true){
        menue.style.display = 'block';
        istrue = false;
        console.log("false");
    }
    else{
        menue.style.display = 'none';
        istrue = true;
        console.log("true");
    }
}


