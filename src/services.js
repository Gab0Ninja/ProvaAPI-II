export function Semaforo(cor){
    let msg = "";
    if(cor == "verde")
    {
        msg = "Pode atravessar";
    }

    else if(cor == "vermelho")
    {
        msg = "Não atravesse";
    }

    else{
        msg = "Invalido";
    }

    return msg;
}

export function DiaSemana(dia){
    let nome = "";
    if(dia == 0){
        nome = "domingo";
    }
    else if(dia == 1){
        nome = "segunda";
    }
    else if(dia == 2){
        nome = "terça";
    }
    else if(dia == 3){
        nome = "quarta";
    }
    else if(dia == 4){
        nome = "quinta";
    }
    else if(dia == 5){
        nome = "sexta";
    }
    else if(dia == 6){
        nome = "sábado";
    }
    else{
        return "Dia invalido"
    }
    
    return nome;
}