var number = document.querySelectorAll(".calcNum");
var op = document.querySelectorAll(".op");
var textbox = document.querySelector(".displayNum");
var equals = document.querySelector(".equal");
var deci = document.querySelector(".decimal");
var delete1 = false;
var decimal = false;
var disp = "";
textbox.value = 0;
var firstNum = "";
var operator = "";
var secondNum = "";
var finalNum = "";
number.forEach((button) => { 

    button.addEventListener("click",function(){
        setNum = button.innerHTML;
        console.log(setNum);
        
        if(operator===""){
            
            firstNum= firstNum+setNum;
            textbox.value = firstNum;
        }else{
            
            secondNum = secondNum+setNum;
            textbox.value = secondNum;
        }

    })
});
function totalNum(){
    if(firstNum != ""){
        textbox.value = firstNum;
        console.log("operatorworks")
        if(delete1 === true){
            firstNum = firstNum.substring(0,firstNum.length - 1);
            console.log(true);
            delete1 = false;
            totalNum();
            
        }
    else if(secondNum !=""){
        textbox.value = secondNum;
        console.log('works');
        if(delete1 === true){
            secondNum = secondNum.substring(0,secondNum.length - 1);
            console.log("seconddeletework");
            delete1 = false;
            totalNum();
        }    
        }
        
    }
    
}
op.forEach((button) =>{
    button.addEventListener("click",function(){
        if(firstNum ==""){
            firstNum = 0;
            secondNum = "";
        }
        operator = button.innerHTML;
        decimal = false;
        console.log(operator);
       
    })
})
equals.addEventListener("click",function(){
    operate();
    console.log("equals")

})

var decimal1 = function (){
    if(decimal == false && operator===""){
        firstNum += ".";
        decimal = true;
        totalNum();
    }else if(decimal == false && operator!=""){
        secondNum += ".";
        decimal = true;
        totalNum();
    }
    else{
        alert("You can only press decimal once per number");
    }
}
deci.addEventListener("click",decimal1);

document.querySelector(".del").onclick = function(){
    if(firstNum !=""){
        delete1 = true;
        console.log("delete")
        totalNum();
    }
}
document.querySelector(".AC").onclick = function(){
    firstNum='';
    secondNum='';
    finalNum=' ';
    textbox.value=' ';
    operator='';
    textbox.value = 0;
    totalNum();

}
var store = "";
window.addEventListener("keydown", (e) =>{
    console.log(e.key);
    if(e.key >=0 &&e.key<=9&& operator ===""){
        firstNum += e.key;
        totalNum();
    }
    else if(e.key >=0 &&e.key<=9&& operator !=""){
        secondNum +=e.key;
        totalNum();
    }else if(e.key == "+"||e.key == "-"||e.key == "*"||e.key == "/"){
        operator = e.key;
        
    }else if(e.key =="="){
        operate();
    }else if(e.key =="."){
        decimal1();
    }else if(e.key =="Enter"){
        operate();
    }else if(e.key =="Delete" || e.key =="Backspace"){
        delete1 = true;
        totalNum();
    }
});



var addition = function(){
    
    finalNum = parseFloat(firstNum) + parseFloat(secondNum);
    
}
var subtraction = function(){
    
    finalNum = parseFloat(firstNum) - parseFloat(secondNum);

}
var multiply = function(){
  
    finalNum = parseFloat(firstNum)*parseFloat(secondNum);

}
var division = function(){
    
    finalNum = parseFloat(firstNum)/parseFloat(secondNum);
    if(secondNum == 0){
        
        textbox.value = "The fuck you trying to??"
        alert("stop");
    }
}

function operate(){
    if((operator == "+")){
        addition();
        textbox.value = finalNum;
    }
    else if((operator == "-")){
        subtraction();
        textbox.value = finalNum;
    }
    else if((operator == "*")){
        multiply();
        textbox.value = finalNum;
    }
    else if((operator == "/")){
        division();
        textbox.value = finalNum;
    }
    firstNum = finalNum;
    secondNum = '';
    operator = '';
    totalNum;
}


