
const inputNome = document.querySelector('#nome');
const inputNumero = document.querySelector('#numero');
const inputMes = document.querySelector('#data-mm'); 
const inputAno = document.querySelector('#data-aa');
const inputCvc = document.querySelector('#cvc');

const displayNome = document.querySelector('#display-nome');
const displayNumero = document.querySelector('#display-numero');
const displayData = document.querySelector('#display-data');
const displayCvc = document.querySelector('#display-cvc');



inputNome.addEventListener('input', (e) => {
   
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    displayNome.textContent = e.target.value.toUpperCase() || "JANE APPLESEED";
    
   
    inputNome.classList.remove('input-error');
    const erroNome = document.querySelector('#error-nome');
    if(erroNome) erroNome.classList.add('hidden');
});


inputNumero.addEventListener('input', (e) => {
    let valor = e.target.value;

    valor = valor.replace(/\D/g, "");
   
    valor = valor.replace(/(\d{4})(?=\d)/g, "$1 ");

    e.target.value = valor.substring(0, 19);

    displayNumero.textContent = e.target.value || "0000 0000 0000 0000";
    inputNumero.classList.remove('input-error');
    const erroNumero = document.querySelector('#error-numero');
    if(erroNumero) erroNumero.classList.add('hidden');
});


inputCvc.addEventListener('input', (e) => {
    let valor = e.target.value;

    valor = valor.replace(/\D/g, "");
  
    valor = valor.substring(0, 3);
   
    e.target.value = valor;
    displayCvc.textContent = valor || "000";

    inputCvc.classList.remove('input-error');
    const erroCvc = document.querySelector('#error-cvc');
    if(erroCvc) erroCvc.classList.add('hidden');
});




function atualizarDataNoCartao() {
    const mes = inputMes.value || "00";
    const ano = inputAno.value || "00";
    displayData.textContent = `${mes}/${ano}`;
}


inputMes.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, ""); 
    valor = valor.substring(0, 2); 
    e.target.value = valor;
    atualizarDataNoCartao();

    inputMes.classList.remove('input-error');
    const erroData = document.querySelector('#error-data');
    if(erroData) erroData.classList.add('hidden');
});


inputAno.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, ""); 
    valor = valor.substring(0, 2); 
    e.target.value = valor;
    atualizarDataNoCartao();

    inputAno.classList.remove('input-error');
    const erroData = document.querySelector('#error-data');
    if(erroData) erroData.classList.add('hidden');
});


const formulario = document.querySelector('#card-form');
const telaSucesso = document.querySelector('#mensagem-sucesso');

const btnContinuar = document.querySelector('#btn-continuar');
btnContinuar.addEventListener('click', () => {
    telaSucesso.classList.add('hidden');
    formulario.classList.remove('hidden');
    formulario.reset();
    displayNome.textContent = "JANE APPLESEED";
    displayNumero.textContent = "0000 0000 0000 0000";
    displayData.textContent = "00/00";
    displayCvc.textContent = "000";
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let validado = true;

    
    const erroNome = document.querySelector('#error-nome'); 
    if (inputNome.value.trim() === "") {
        erroNome.classList.remove('hidden');
        inputNome.classList.add('input-error');
        validado = false;
    } else {
        erroNome.classList.add('hidden');
        inputNome.classList.remove('input-error');
    }

   
    const erroNumero = document.querySelector('#error-numero');
    if (inputNumero.value.length < 19) {
        erroNumero.textContent = "Wrong format, numbers only";
        erroNumero.classList.remove('hidden');
        inputNumero.classList.add('input-error');
        validado = false;
    } else {
        erroNumero.classList.add('hidden');
        inputNumero.classList.remove('input-error');
    }

    
    const erroData = document.querySelector('#error-data');
    if (inputMes.value === "" || inputAno.value === "") {
        erroData.classList.remove('hidden');
        validado = false;
    } else {
        erroData.classList.add('hidden');
    }


    const erroCvc = document.querySelector('#error-cvc');
    if (inputCvc.value.length < 3) {
        erroCvc.classList.remove('hidden');
        inputCvc.classList.add('input-error');
        validado = false;
    } else {
        erroCvc.classList.add('hidden');
        inputCvc.classList.remove('input-error');
    }

    
    if (validado) {
        formulario.classList.add('hidden');
        telaSucesso.classList.remove('hidden');
    }
});
