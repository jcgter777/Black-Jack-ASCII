

var n,n2,n3,n4,n5; //cardnumber
var nd,nd2,nd3,nd4,nd5;
var x;
var amountcards; //used for amount of cards to draw

var arr1 = ["-","-","-"," "];
var arr2 = ["|"," ","|"," "];
var i = 2;
var amountcardsd;
var di = 2;
n = rand();
n2 = rand();
n3 = rand();
n4 = rand();
n5 = rand();
nd = rand();
nd2 = rand();
nd3 = rand();
nd4 = rand();
nd5 = rand();
draw();
drawd();
buttons();

function draw(){
document.write("Your cards");
document.write('<br>');
 for(amountcards = 0;amountcards < i;amountcards++){
    for(x = 0;x < 4;x++){
        document.write(arr1[x]);
    }
 }
 document.write('<br>');
 for(amountcards = 0;amountcards < i;amountcards++){
    for(x = 0;x < 4;x++){
    if(amountcards == 0 && x == 1) arr2[x] = n;
    if(amountcards == 1 && x == 1) arr2[x] = n2;
    if(amountcards == 2 && x == 1) arr2[x] = n3;
    if(amountcards == 3 && x == 1) arr2[x] = n4;
    if(amountcards == 4 && x == 1) arr2[x] = n5;
        document.write(arr2[x]);
    }
 }
 document.write('<br>');
 for(amountcards = 0;amountcards < i;amountcards++){
    for(x = 0;x < 4;x++){
        document.write(arr1[x]);
    }
 }  
}
function rand(){
number = Math.floor(Math.random() * (14 - 1 + 1) ) + 1;
    if(number == 11) number = "J"; //should of used switch
    if(number == 12) number = "Q";
    if(number == 13) number = "K";
    if(number == 14) number = "A";
    return number;
}
function drawd(){
document.write('<br>');
document.write("Dealer cards");
document.write('<br>');
 for(amountcardsd = 0;amountcardsd < di;amountcardsd++){
    for(x = 0;x < 4;x++){
        document.write(arr1[x]);
    }
 }
 document.write('<br>');
 for(amountcardsd = 0;amountcardsd < di;amountcardsd++){
    for(x = 0;x < 4;x++){
    if(amountcardsd == 0 && x == 1){
        arr2[x] = nd;
        document.write(arr2[x]);
        arr2[x] = " ";
    }
    else{
        document.write(arr2[x]);
        }
    }
 }
 document.write('<br>');
 for(amountcardsd = 0;amountcardsd < di;amountcardsd++){
    for(x = 0;x < 4;x++){
        document.write(arr1[x]);
    }
 }
 document.write('<br>');
 
}
function buttons(){
var count = 0;
if(count == 0){
document.write('<button onclick="func()">Hit</button>')
}
}
function func(){
i++;
document.body.innerHTML = "";
draw();
drawd();


}




