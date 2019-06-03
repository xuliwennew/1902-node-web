const WebSocket = require("ws")

const Server = new WebSocket.Server({
    port:8081
})


//监听连接事件
Server.on("connection",(ws)=>{

    //当连接成功后，有一端发送来的数据到服务器，
    ws.on("message",(data)=>{
        console.log(data)
        //点对点的发送
        //ws.send(data)

        //广播模式

        Server.clients.forEach((client,index)=>{
            client.send(data)
        })
    })
})


console.log("websocket Servr is ready on port 8081")
