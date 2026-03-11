// Seleção de elementos do DOM
const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.querySelector('.custom-tip');
const peopleInput = document.getElementById('people');
const errorMsg = document.querySelector('.error-msg');
const tipAmountDisplay = document.querySelector('.amount:nth-child(1)'); // Primeiro campo de valor
const totalAmountDisplay = document.querySelectorAll('.amount')[1]; // Segundo campo de valor
const resetBtn = document.querySelector('.reset-btn');

let billValue = 0.0;
let tipValue = 0.1; // 10% padrão (conforme a imagem)
let peopleValue = 1;

billInput.oninput = function () {
    if (this.value.length > 5) {
        this.value = this.value.slice(0, 8); 
    }
};
// Funções de Cálculo

function calculate() {
    if (peopleValue >= 1) {
        // Cálculo da Gorjeta por Pessoa
        const tipAmount = (billValue * tipValue) / peopleValue;
        // Cálculo do Total por Pessoa
        const total = (billValue + (billValue * tipValue)) / peopleValue;

        // Atualiza o HTML com 2 casas decimais
        document.querySelectorAll('.amount')[0].innerHTML = `$${tipAmount.toFixed(2)}`;
        document.querySelectorAll('.amount')[1].innerHTML = `$${total.toFixed(2)}`;
    }
}

// Event Listeners para Inputs
billInput.addEventListener('input', (e) => {
    billValue = parseFloat(e.target.value) || 0;
    calculate();
});

customTipInput.addEventListener('input', (e) => {
    tipValue = parseFloat(e.target.value) / 100 || 0;
    // Remove a classe ativa dos botões fixos quando usar custom
    tipButtons.forEach(btn => btn.classList.remove('active'));
    calculate();
});

peopleInput.addEventListener('input', (e) => {
    peopleValue = parseInt(e.target.value) || 0;

    // Validação de "Can't be zero"
    if (peopleValue <= 0) {
        errorMsg.style.display = 'block';
        peopleInput.parentElement.classList.add('error');
    } else {
        errorMsg.style.display = 'none';
        peopleInput.parentElement.classList.remove('error');
        calculate();
    }
});

// Lógica dos Botões de Porcentagem
tipButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove 'active' de todos e adiciona no clicado
        tipButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        // Pega o valor do botão (ex: "5%" -> 0.05)
        tipValue = parseFloat(e.target.innerHTML) / 100;
        customTipInput.value = ""; // Limpa o custom
        calculate();
    });
});

// Botão de Reset
resetBtn.addEventListener('click', () => {
    billInput.value = "";
    billValue = 0;
    peopleInput.value = "";
    peopleValue = 1;
    customTipInput.value = "";
    tipButtons.forEach(btn => btn.classList.remove('active'));
    tipButtons[1].classList.add('active'); // Volta para o 10% padrão
    tipValue = 0.1;
    
    document.querySelectorAll('.amount')[0].innerHTML = "R$0.00";
    document.querySelectorAll('.amount')[1].innerHTML = "R$0.00";
    errorMsg.style.display = 'none';
    peopleInput.parentElement.classList.remove('error');
});