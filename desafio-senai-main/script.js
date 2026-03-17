const formNome = document.getElementById('input-nome');
const formEmail = document.getElementById('input-email');
const botao = document.getElementById('meuBotao');

function validarEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

function salvarNoStorage(nome, email) {
    const listaUsuarios = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];
    
    const novoUsuario = {
        nome: nome,
        email: email,
        data: new Date().toLocaleString('pt-BR')
    };

    listaUsuarios.push(novoUsuario);
    localStorage.setItem('usuariosCadastrados', JSON.stringify(listaUsuarios));
    
    console.log("Usuário salvo no LocalStorage:", novoUsuario);
}

function processarEnvio() {
  const nomeDigitado = formNome.value;
  const emailDigitado = formEmail.value;

  let formularioValido = true;

  if (nomeDigitado.trim() === '') {
    formNome.classList.add('error'); 
    formularioValido = false;
  } else {
    formNome.classList.remove('error'); 
  }

  if (emailDigitado.trim() === '') {
    formEmail.classList.add('error');
    formularioValido = false;
  } else if (!validarEmail(emailDigitado)) {
    formEmail.classList.add('error');
    formularioValido = false;
  } else {
    formEmail.classList.remove('error'); 
  }

  if (formularioValido) {
    salvarNoStorage(nomeDigitado, emailDigitado);

    alert(`Sucesso! \nNome: ${nomeDigitado} \nE-mail: ${emailDigitado} \nOs dados foram salvos no navegador.`);
    
    formNome.value = '';
    formEmail.value = '';
  } else {
    console.error("Erro na validação.");
    alert("Por favor, preencha corretamente os campos em destaque.");
  }
}

botao.addEventListener('click', processarEnvio);