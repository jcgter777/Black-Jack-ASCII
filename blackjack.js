var n = Math.floor(Math.random() * (14 - 1 + 1) ) + 1; //The number of the card
var x;
var y;
var array = ["-","-","-","|"," ","|","-","-","-"];
for(x = 0;x < 9;x++){
    if(x == 3 || x ==6){
       document.write('<br>');
    }
    if(x == 4){
    document.write(n);
    }
    document.write(array[x]);
