const result = document.getElementById('result');
const submit = document.getElementById('submit');
const sqrt = document.getElementById('sqrt');
const pow = document.getElementById('pow');
            sqrt.addEventListener('click', ()=>{
                action = "sq"
                })
                pow.addEventListener('click', ()=>{
                    action = "power"
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
    
  // Получаем ссылки на элементы
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');







    
    if (action == "sq") {
        let sum = Math.sqrt(Number(input1.value));
        printResult(res = sum);

        input2.style.display = 'none'; 
    } 
    // 
    else if (action == "power") {
        let sum = Math.pow(Number(input1.value), Number(input2.value)); 
        printResult(res = sum); 

        input2.style.display = 'inline-block'; 
    }


    
   
   
   
})