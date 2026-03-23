const express = require('express'); 
const http = require('http'); 
const path = require('path'); 
const socketIo = require('socket.io'); 
const app = express(); 
const server = http.createServer(app); 
const io = socketIo(server); 
// Serve static files 
app.use(express.static(path.join(__dirname, 'public'))); 
// Handle socket connection 
io.on('connection', (socket) => { 
console.log('A user connected'); 
socket.on('chat message', (msg) => { 
io.emit('chat message', msg); // broadcast to all clients 
}); 
socket.on('disconnect', () => { 
console.log('User disconnected'); 
});}); 
const PORT = process.env.PORT || 3000; 
server.listen(PORT, () => { 
console.log(`Server running on http://localhost:${PORT}`); 
});
