menu.onclick = function myFunction(){
    var x = document.getElementByld ("myTopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }
}