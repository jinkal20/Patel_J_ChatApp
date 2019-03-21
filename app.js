const express = require ('express');
const app = express();
const io = require('socket.io')();


const port = process.env.PORT || 3000;

app.use(express.static('piblic'));

app.get('/',(ren, res, next)=>{
    res.sendFile(__dirname + '/views/index.html');
});

const server = app.listen(port, () =>{
    console.log(`app is running on port ${port}`);
});