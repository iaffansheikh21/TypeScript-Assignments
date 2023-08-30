var num:number = 8;


if(num < 1 || num > 7){
    console.log(`Please Enter value between 1 and 7`);
} 
else if(num >= 1 && num <= 7)
{
    if(num === 1){
        console.log(`It's Monday`);
    }
    else if(num === 2){
        console.log(`It's Tuesday`);
    }
    else if(num === 3){
        console.log(`It's Wednesday`);
    }
    else if(num === 4){
        console.log(`It's Thursday`);
    }
    else if(num === 5){
        console.log(`It's Friday`);
    }
    else if(num === 6){
        console.log(`It's Saturday`);
    }
    else{
        console.log(`It's Sunday`);
    }
}
