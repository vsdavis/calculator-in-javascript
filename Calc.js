//Função para colocar os caracteres no visor
function preencher(valor) {
    document.querySelector("#visor").value += valor;
}

//Função para calcular
function calcular() {
    var resultado = 0;
    resultado = document.getElementById("visor").value //Meu resultado vai receber o conteudo do visor
    document.getElementById("visor").value = ""; //Depois de receber o valor ele reseta e mostra o resultado
    document.getElementById("visor").value = eval(resultado) //A função eval, calcula automaticamente seu valor
}

//Função para deletar os numeros do visor
function limpar() {
    document.getElementById("visor").value = "";

}
