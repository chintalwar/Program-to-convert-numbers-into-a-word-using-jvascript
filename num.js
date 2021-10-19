function btnConvert(){

    var num;
     num =Number(parseInt(document.getElementById("number").value));
     convert(num);
     var word;
     word = convert(num);
     document.getElementById("result").innerHTML =word;
}


function fun(n){

    var str ="";

   // Array string declaring for the units values
   var units =['Zero','One','Two','Three','Four','Five','Six','Seven','Eight',
   'Nine','Ten','Eleven','Tweleve','Thirteen','Fourteen','Fifteen',
   'Sixteen','Seventeen','Eighteen','Ninteen'];

   // Array string declaring for the tens values
   var tens =['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninty'];

   if(n < 20){
       str = units[n];
   }else if(n>=20 && n<100){
     var A = Math.floor(n/10);
     str = tens[A] + " " + units[n%10];
   }
   return str;
}


function convert(num){

    var out = "";
    if(num < 100){
        out = fun(num);
    }else if(num >=100 && num<1000){
        B = Math.floor(num/100);
        out = fun(B) + " Hundred " + convert(num%100);
    }else if(num >=1000 && num <100000){
        C =Math.floor(num/1000);
        out =fun(C) + " Thousand " + convert(num % 1000);
    }else if(num >=100000 && num <10000000){
        D = Math.floor(num/100000);
        out =fun(D) + " Lakh " + convert(num % 100000);
    }else if(num >= 10000000 && num < 1000000000){
        E = Math.floor(num/10000000);
        out =fun(E) + " Crore " + convert(num % 10000000);
    }
    return out;
}