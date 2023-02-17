

var num1=parseFloat(document.getElementById('num1').value);
var num2=parseFloat(document.getElementById('num2').value);

// fungsi tambah
function tambah(){
    var num1=parseFloat(document.getElementById('num1').value);
    var num2=parseFloat(document.getElementById('num2').value); 
   document.getElementById('result').innerHTML=num1+num2;
}


// fungsi kurang
function kurang(){
    var num1=parseFloat(document.getElementById('num1').value);
    var num2=parseFloat(document.getElementById('num2').value); 
   document.getElementById('result').innerHTML=num1-num2;
}
// fungsi kali
function kali(){
    var num1=parseFloat(document.getElementById('num1').value);
    var num2=parseFloat(document.getElementById('num2').value); 
   document.getElementById('result').innerHTML=num1*num2;
}
// fungsi kali
function bagi(){
    var num1=parseFloat(document.getElementById('num1').value);
    var num2=parseFloat(document.getElementById('num2').value); 
   document.getElementById('result').innerHTML=num1/num2;
}