const num1:number = 25;

if(num1 % 3 === 0 && num1 % 5 === 0){
    console.log(`${num1} is divisible by 3 and 5`);
}
else if(num1 % 3 === 0){
    console.log(`${num1} is only divisible by 3`)
    
}
else if(num1 % 5 === 0){
    console.log(`${num1} is only divisible by 5`)
    
}
else{
    console.log(`${num1} is not divisible by 3 and 5 `);
}