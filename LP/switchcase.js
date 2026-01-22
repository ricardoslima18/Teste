let dia = prompt("Digite o dia da semana: " ).toLowerCase().trim();
let diaDaSemana;
switch (dia) {
    case "segunda":
        diaDaSemana = "Início da semana";
        break;
        case "sexta":
        diaDaSemana = "Final da semana";
        break;

        case "sábado":
        case "domingo":  
        diaDaSemana = "Fim de semana";          
        break;

        default:
            diaDaSemana = "Dia normal de trabalho";
            }
            document.writeln(`
                <h1> Hoje é ${dia}</h1/
                <h2> ${diaDaSemana}</h2>
                <p><button onClick="location.reload()">Novo dia</button></p>
            `);
