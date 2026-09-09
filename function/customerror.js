//custom error
function  checkAge(age){
    if(age<18){
        throw new Error("Not Elligble");
    }
    console.log("yes");
}
try{
    checkAge(15);

}
catch(error){
    console.log(error.message);
}
