const express = require ('express');
const app = express();
const io = require('socket.io')();


const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/',(ren, res, next)=>{
    res.sendFile(__dirname + '/views/index.html');
});

const server = app.listen(port, () =>{
    console.log(`app is running on port ${port}`);
});

io.attach(server);

io.on('connection', function(socket){
    console.log('a user has connected', socket);
    socket.emit('connected', {sID: `${socket.id}`, message: 'new connection'});

    //listen for encoming message and send them to everyone

    socket.on('chat message', function(msg){
        console.log('message', msg, 'socket', socket.id);

        //send message tovevery one
        io.emit('chat message', {id: `${socket.id}`, message: msg});
    });


    socket.on('disconnect', function(){
        console.log('a user has disconnected');
    });
});
