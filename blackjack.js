<script>


var num;
var h,h2,h3,h4,h5; // holders they just hold something
var n,n2,n3,n4,n5; //cardnumber
var d,d2,d3,d4,d5;
var x;
var amountcards; //used for amount of cards to draw
var total;

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
d = rand();
d2 = rand();
d3 = rand();
d4 = rand();
d5 = rand();
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
        arr2[x] = d;
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
if(i < 5){
document.write('<button onclick="func()">Hit</button>');
}
add();
}
function func(){
i++;
document.body.innerHTML = "";
draw();
drawd();
if(i < 6){
buttons();
}

}
function convert(){
    if(n == "J") n = 10; //should of used switch
    if(n == "Q") n = 10;
    if(n == "K") n = 10;
    if(n == "A") n = 11;
    if(n2 == "J") n2 = 10; //should of used switch
    if(n2 == "Q") n2 = 10;
    if(n2 == "K") n2 = 10;
    if(n2 == "A") n2 = 11;
    if(n3 == "J") n3 = 10; //should of used switch
    if(n3 == "Q") n3 = 10;
    if(n3 == "K") n3 = 10;
    if(n3 == "A") n3 = 11;
    if(n4 == "J") n4 = 10; //should of used switch
    if(n4 == "Q") n4 = 10;
    if(n4 == "K") n4 = 10;
    if(n4 == "A") n4 = 11;
    if(n5 == "J") n5 = 10; //should of used switch
    if(n5 == "Q") n5 = 10;
    if(n5 == "K") n5 = 10;
    if(n5 == "A") n5 = 11;

}
function add(){
h = n;
h2 = n2;
h3 = n3;
h4 = n4;
h5 = n5;
convert(n);
convert(n2);
convert(n3);
convert(n4);
convert(n5);
switch(i){
case 3:
total = n + n2 + n3;
break;
case 4:
total = n + n2 + n3 + n4;
break;
case 5:
total = n + n2 + n3 + n4 + n5;
break;
}
n = h;
n2 = h2;
n3 = h3;
n4 = h4;
n5 = h5;
if(total  > 21){
document.body.innerHTML = "";
draw();
drawd();
document.write('<br>');
document.write("Busted");
document.write('<br>');
document.write(total);
}
}








</script>
