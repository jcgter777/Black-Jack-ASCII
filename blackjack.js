var n = Math.floor(Math.random() * (14 - 1 + 1) ) + 1; //The number of the card
var x;
var y;
var array = ["-","-","-","|"," ","|","-","-","-"];
for(x = 0;x < 9;x++){
    if(x == 3 || x ==6){
       document.write('<br>');
    }
    if(x == 4){
    if(n == 11) n = "J";
    if(n == 12) n = "Q";
    if(n == 13) n = "K";
    if(n == 14) n = "A";
    document.write(n);
    }
    document.write(array[x]);
}
