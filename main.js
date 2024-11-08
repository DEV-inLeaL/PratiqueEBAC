const formulario = document.getElementById('Verificador');
const paragrafo = document.getElementById("Mensagem");

const Verdadeiro = "O número do cambo B é maior que o do campo A";
const Falso = "O número do campo B é menor que o do campo A";


formulario.addEventListener('submit', function(event) {
event.preventDefault();

const campoNumeroA = document.getElementById("NumeroA");
const campoNumeroB = document.getElementById("NumeroB");

const NumeroA = parseInt(campoNumeroA.value);
const NumeroB = parseInt(campoNumeroB.value); 



const resultado = validador(NumeroA, NumeroB);

console.log(resultado);
mensagemValidadora(resultado);
})
function validador(campoNumeroA, campoNumeroB){
    var validacao ;
    
    if (campoNumeroA < campoNumeroB) {
        validacao = true;
    }
    else{
        validacao = false;
    }
    return validacao;
    
    }
    
function mensagemValidadora(resultado) {
    if (resultado)  {
        paragrafo.innerHTML = Verdadeiro;
        paragrafo.style.display = "block";
        paragrafo.style.backgroundColor = "green";


    }   
    else{
        paragrafo.innerHTML = Falso;
        paragrafo.style.display = "block";
        paragrafo.style.backgroundColor = "";
    }
    
    
} 

console.log(paragrafo);

