import { Router } from "express"

import { Semaforo, DiaSemana } from "./services.js"

const server = Router();

server.get('/Semaforo/:cor', (req, resp ) => {
    const cor = req.params.cor

    const x = Semaforo(cor)
    resp.send ({
        Semaforo: x
    })
})

server.get('/DiaSemana', (req, resp) => {
    const dia = req.query.dia;
    const x = DiaSemana(dia);

    resp.send({
        dia: x
    })
})

export default server;