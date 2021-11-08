let text="";
let num1=0;
let num2=0;
let op=" ";
let display = document.getElementById("disp-box");
function data(num){
    if(op == " "){
        num1 = num1*10+num;
    }
    else
    num2 = num2*10+num;
    text_update();
}

function text_update(){
    if(op == " "){
        text = num1;
    }
    if(op == "+"){
        text = num1 + op + num2;
    }
    if(op == "-"){
        text = num1 + op + num2;
    }
    if(op == "*"){
        text = num1 + op + num2;
    }
    if(op == "/"){
        text = num1 + op + num2;
    }
    display.value=text;
}

function opration_update(temp) {
    op=temp;
    text = num1+op;
    display.value=text;
}

function equal(){
    if(op=="+")
        text = text + "=" + (num1+num2);

    if(op=="-")
        text = text + "=" + (num1-num2);
    
    if(op=="*")
        text = text + "=" + (num1*num2);
    
    if(op=="/")
        text = text + "=" + (num1/num2);
    display.value=text;
    ac(false);
}
function ac(bul){
    text="";
    num1=0;
    num2=0;
    op=" ";
    if(bul)
    display.value=text;
}