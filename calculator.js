var number = document.querySelectorAll(".calcNum");
var op = document.querySelectorAll(".op");
var textbox =document.querySelector(".displayNum") ;
var equals = document.querySelector(".equal");
var delete1 = false;
var firstNum = "";
var operator = "";
var secondNum = "";
var finalNum = "";
number.forEach((button) => { 

    button.addEventListener("click",function(){
        setNum = button.innerHTML;
        console.log(setNum);
        if(operator==""){
            firstNum= firstNum+setNum;
            totalNum();
        }else{
            secondNum = secondNum+setNum;
            totalNum();
        }

    })
});
op.forEach((button) =>{
    button.addEventListener("click",function(){
        operator = button.innerHTML;
        console.log(operator);
    })
})
equals.addEventListener("click",function(){
    operate();
    console.log("equals")

})
document.querySelector(".del").onclick = function(){
    delete1 = true;
    console.log("delete")
    totalNum();
}
document.querySelector(".AC").onclick = function(){
    firstNum='';
    secondNum='';
    finalNum='';
    textbox.value='';

}


function totalNum(){
    if(firstNum != ""){
        textbox.value = firstNum;
        console.log("operatorworks")
        if(delete1 == true){
            firstNum = firstNum.substring(0,firstNum.length - 1);
            console.log(true);
           
            delete1 = false;
            totalNum();
            
        }
    else if(secondNum != ""){
        textbox.value = secondNum;
        console.log('works');
        }
    }
    
}


var addition = function(){
    operator = '+';
    finalNum = parseFloat(firstNum) + parseFloat(secondNum);
    
}
var subtraction = function(){
    operator = '-';
    finalNum = parseFloat(firstNum) - parseFloat(secondNum);

}
var multiply = function(){
    operator = '*';
    finalNum = parseFloat(firstNum)*parseFloat(secondNum);

}
var division = function(){
    operator = '/';
    finalNum = parseFloat(firstNum)/parseFloat(secondNum);

}

var operate = function(){
    if((operator = "+")){
        addition();
        textbox.value = finalNum;
    }
    else if((operator = "-")){
        subtraction();
        textbox.value = finalNum;
    }
    else if((operator = "*")){
        multiply();
        textbox.value = finalNum;
    }
    else if((operator = "/")){
        division();
        textbox.value = finalNum;
    }
    
}


