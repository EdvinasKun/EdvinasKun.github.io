var MyArray = new Array();

let forma = document.forms["registracija"];

forma.addEventListener("submit", function (e){
    e.preventDefault();

    let vardas = forma["vardas"].value;
    let pavarde = forma["pavarde"].value;
    let mokykla = forma["mokykla"].value;
    let miestas = forma["miestas"].value;
    let sritis = forma["sritis"].value;

    MyArray.push(vardas + " " + pavarde + ", " + mokykla + ", " + miestas + ", Sritis: " + sritis);


});

let spausd = document.getElementById("btn-list");
let list = document.getElementById("list");
let kk="";

spausd.onclick = function(){
    

    for(let i = 0; i < MyArray.length; i++){

        
        kk += "<li>"+MyArray[i]+"</li>";

      }
      list.innerHTML = kk;
};

