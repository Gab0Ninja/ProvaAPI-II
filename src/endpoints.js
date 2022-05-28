import { Router } from "express"

import { Semaforo } from "./services.js"

const server = Router();

server.get('/Semaforo/:cor', (req, resp ) => {
    const cor = req.params.cor

    const x = Semaforo(cor)
    resp.send ({
        Semaforo: x
    })
})