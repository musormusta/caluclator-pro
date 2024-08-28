const result = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submit = document.getElementById('submit');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const sq = document.getElementById('sq');
const del = document.getElementById('del');
let action = "";
console.log(typeof sum);

plus.addEventListener('click', ()=>{
    action = "+"
    })
    minus.addEventListener('click', ()=>{
       action = "-"
       })
       sq.addEventListener('click', ()=>{
        action = "*"
        })
        del.addEventListener('click', ()=>{
            action = "/"
            })
function printResult(res) {
if (res < 0) {
 result.style.color = 'red'; 
} else if (Number.isInteger(res)) {
     result.style.color = 'green'; 
} else {
  result.style.color = 'yellow'; 
}
            
 result.textContent = res; 
}
submit.addEventListener('click',()=>{
    if(action == "+"){
        sum = Number(input1.value) + Number(input2.value);
        result.textContent = sum;
        printResult(res = sum)
    }
    else if(action == "-"){
        sum = Number(input1.value) - Number(input2.value);
        result.textContent = sum;
        printResult(res = sum)
    }
    else if(action == "*"){
        sum = Number(input1.value) * Number(input2.value);
        result.textContent = sum;
        printResult(res = sum)
    }
    else if(action == "/"){
        sum = Number(input1.value) / Number(input2.value);
        result.textContent = sum;
        printResult(res = sum)
    }
   
    
})


   
