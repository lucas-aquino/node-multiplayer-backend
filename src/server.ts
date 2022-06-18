import * as net from "net"
import Timer from "./utils/Timer"

let timer : Timer = new Timer();

/**
 * @description Creamos un servidor TCP
 * @param socket Referencia al cliente que se conecto en el servidor 
 */
let server = net.createServer((socket) => {
    timer.executeAfterBy(5)
    .then(() => {
        console.log(`${socket.localAddress} is connected!!`);
        socket.write(Buffer.from("ok", "utf-8"));
    });

    socket.on('close', () => {
        console.log("Disconnected!!");
    });
});

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`RUN ON PORT ${PORT}`);
});
