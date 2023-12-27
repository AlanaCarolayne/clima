function converteDia(dias) {
    const horaAtual = Date.now()  + 1000 * (dias / 3600);
    const millitime = new Date(horaAtual);
        let mes = millitime.toLocaleString("pt-br", {month: "numeric"}); 
        let dia = millitime.toLocaleString("pt-br", {day: "numeric"});
        let ano = millitime.toLocaleString("pt-br", {year: "numeric"}); 
        let hora = millitime.toLocaleString("pt-br", {hour: "numeric"}); 
        let minuto = millitime.toLocaleString("pt-br", {minute: "numeric"});
        return `${dia}/${mes}/${ano} <span class="espacinho"> </span>  ${hora}:${minuto}`;
    }
