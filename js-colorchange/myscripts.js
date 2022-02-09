
let body = document.querySelector("body");
let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", changecolor);

function changecolor(){
    document.body.style.background = getRgb();
}

function getRgb(){
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + a + "," + b + "," + c +")";
    return bgColor;
}

function getCoordinates(e){
    var cursorX = e.pageX;
    var cursorY = e.pageY;
    
    let a = Math.floor(cursorX * 0.001 * 256);
    let b = Math.floor(cursorY * 0.001 * 256);
    let c = Math.floor(cursorX + cursorY * 0.0001 * 256);
    let bgColor = "rgb(" + a + "," + b + "," + c +")";
    document.getElementById('test').innerHTML = bgColor;
    return bgColor; 
}

function changeColorOnClick(e){
    //console.log(e);
    body.style.backgroundColor = getCoordinates(e);
}


document.addEventListener("click", changeColorOnClick);

document.addEventListener("click", changecolor);