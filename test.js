let numbers=[];
function fillVector()
{
 var n1=0;   
 for(var x=0;x<30;x++){
    n1=Math.floor(Math.random()*(30+6)+1);

    while(numbers.includes(n1)){
        n1=Math.floor(Math.random()*(30+20)+1);
    }
    numbers.push(n1);
 }

}

function may(){
    var may=0;
    for(var n2 of numbers){
      if(n2>may){
        may=n2;
      }
    }
    return may;
}
fillVector();

console.log(numbers);
console.log(may());
console.log(numbers.sort());