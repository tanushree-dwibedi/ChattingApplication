Project Title: 
LiveChat App – A Real-Time Chat Application 
Project Description: 
The LiveChat App is a lightweight real-time chat application that allows users to send 
and receive messages instantly using WebSockets. Built with Node.js on the backend 
and HTML/CSS on the frontend, it uses Socket.io to manage real-time communication 
between clients and the server. 
Tech Stack: 
• Frontend: 
o HTML5 – for structure 
o CSS3 – for styling and layout 
o Client-side JavaScript – for connecting with the server using WebSockets 
• Backend: 
o Node.js – JavaScript runtime 
o Express – to serve static files and set up the server 
o Socket.io – for real-time, bi-directional communication 
Core Features: 
•    Real-Time Messaging – Messages appear instantly for all users connected to the 
chat 
•                         WebSocket-based Communication – Uses Socket.io to open a persistent 
connection 
•      Clean & Responsive UI – Built with modern CSS, suitable for both desktop and 
mobile screens 
•     Automatic Scroll – The chat view scrolls to the latest message automatically 
Project Structure: 
• LiveChat/ 
• ├── public/ 
• │   ├── index.html       → The main chat UI 
• │   ├── style.css        → Styles for the chat page 
• │   └── client.js        → Handles sending and receiving messages 
• ├── server.js            → Sets up Express server & Socket.io 
• ├── package.json         → Lists dependencies (express, socket.io) 
