let idadeTexto = prompt("Qual é sua idade?");

if (!idadeTexto || idadeTexto.trim() === ""){
    alert("Erro! Por Favor, digite sua idade!");
} else {
    idade = idadeTexto.trim();
    if(!/^\d+$/.test(idadeTexto)) {
        alert("Digite apenas numeros.");
    } else{
        let idade = parseInt(idadeTexto);}

    if (idade < 0 || idade > 120){
        alert("Idade  invalida.");
    } else {
        if (idade>=18){
            alert("Voce e maior de idade! Pode pagar boletos.")
        } else {
            alert("Voce e menor de idade!");
        }
    }
}
 