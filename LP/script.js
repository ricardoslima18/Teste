document.getElementById('calcularBtn').onclick = function () {
   let idade = prompt('Digite sua idade');
   const anoAtual = 2026;
   let anoNascimento = anoAtual - idade;
   alert(`Voce nasceu em ${anoNascimento}`);
};


       