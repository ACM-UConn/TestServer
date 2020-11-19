const WebSocket = require('ws');

const wss = new WebSocket.Server({host: '172.20.1.168', port: 4567});
console.log(wss)

wss.on('connection', (ws) => {
    console.log('Connected')
    ws.on('message', (temp) => {
        console.log('got a message')
        data = JSON.parse(temp)
        if (data.type == "init") {
            console.log('init')
        }
        else if (data.type == "pressed") {
            console.log('pressed')
        }
        else if (data.type == "released") {
            console.log('released')
        }
        else {
            console.log("invalid data type")
        }
    });
    ws.on('close', () => {
        console.log("The server is now closed")
    })
    ws.on('error', (error) => {
        console.log(error)
    })
})
