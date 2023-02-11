function calcular() {
    //1 - pegar o valor digitado no primeiro campo input
    let num1 = document.getElementById("inputNumero1").value
    //2 - pegar o valor digitado no segundo campo input
    let num2 = document.getElementById("inputNumero2").value
    //3 - calcular a porcetagem 
    let resultado = num1*100/num2
    //4 - exibir o resultado em um alert 
    alert (num1 + " é " + resultado + " % de " + num2)

}