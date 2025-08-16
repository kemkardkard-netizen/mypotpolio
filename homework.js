function calculate(){
    const number1 = parseFloat(document.getElementById("num1").value)
    const number2 = parseFloat(document.getElementById("num2").value)
    const operatorInput = document.getElementById('operator').value;

    let result=0;

    if(operatorInput === "+"){
        result= number1+number2;
    }
    else if(operatorInput === "-"){
        result= number1-number2;
    }
    else if(operatorInput === "*"){
        result= number1*number2;
    }
    else if(operatorInput === "/"){
        if(number2 === 0){
            result="หารด้วยศูนย์ไม่ได้";
        } else{
        result= number1/number2;
        }   
    } else {
        result="เครื่องหมายไม่ถูกต้อง"
    }
    document.getElementById('result').textContent = '' + result;
}