//global scope
let x=10;
function display(){
    console.log(x);
}
display();
//function scope
function s(){
    let x=10;
    console.log(x);
}
s();
// block scope
if(true){
    let x=1;
    let y=2;
    console.log(x);
    console.log(y);
}
// hosting 
console.log(name);
var name="suraj";
//console.log(r);
//let r="ram";
//TDZ tempory dead zone start
let age =20;
//tdz end;
// the period between initilasting and declaring is called tdz
//clouser-inner function always remember all  the variable  of outer function even when it executed is called clouser function
function outer(){
    let counter=0;

    function inner(){
        counter++;
        console.log(counter);
    }
    return inner();
}
    
    outer();
    outer();




