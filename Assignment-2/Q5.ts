var age:number = 23;

if(age < 0) {
    console.log(`Invalid Input!!!`);
}
else if(age > 0 && age <= 12){
    console.log(`Child`);
}
else if(age > 12 && age <= 19 ){
    console.log("Teenager");
}
else{
    console.log("Adult");
}