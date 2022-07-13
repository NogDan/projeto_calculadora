


function add_val(valor){
    document.querySelector("[name='visor']").value+=valor;
  

}



function calcular(){
    calculo = document.querySelector("[name='visor']").value
    document.querySelector("[name='visor']").value = eval(calculo);

}
function porcento(){
    calculo = document.querySelector("[name='visor']").value +'/100'
    document.querySelector("[name='visor']").value = eval(calculo);
}
function clean(){
    document.querySelector("[name='visor']").value="";
}

