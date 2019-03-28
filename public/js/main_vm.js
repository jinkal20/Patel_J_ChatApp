import ChatMessage from '../js/ChatMessage.js';
console.log('fixed');

const socket = io();

function setUserId({sID, message}){
    debugger;
    console.log('connected'. sID, message);
    vm.socketID= sID;
}

function appendMessage(message){
    vm.message.push(message);
}
const vm = new Vue({
    data: {
        socketID: "",
        nickname: "",
        message: "",
        messages: []
    },

    methods: {
        dispatchMessage(){
            //sned a message here
            socket.emit('chat message', {content: this.message, name: this.nickname || "Anonymous"});
            this.message = "";

        }
    },

    components: {
        newmessage: ChatMessage
    }
}).$mount("#app");

socket.addEventListener('connected',setUserId);
socket.addEventListener('chat message', appendMessage);
socket.addEventListener('disconnect', appendMessage);