# 💬 Basic Chat Online

A simple real-time web chat application running on `localhost` using Node.js, Express, and WebSockets. Users can connect, choose a username, and exchange messages instantly with multiple participants.

## ✨ Features

- 🗨️ Real-time messaging with multiple users  
- 👤 User identification via username  
- 🔔 Notifications for user connections and disconnections  
- 🕒 Recent message history displayed when a new user joins  
- 🎨 Simple and clean front-end with EJS

## 🛠️ Technologies

- Node.js  
- Express  
- EJS  
- WebSockets (`ws` package)  
- HTML, CSS, and JavaScript

## 🚀 Installation

1. Clone the repository:

```
git clone https://github.com/riquecodes/basic-chat-online.git
cd basic-chat-online
```

2. Install dependencies:
```
npm install
```

3. Start the server:
```
npm start
```
The server will run on 🌐 http://localhost:3000.

🖥️ Usage
- Open the browser and navigate to http://localhost:3000
- Enter a username when prompted
- Start chatting in real-time with other connected users

📂 Project Structure
```
basic-chat-online/
│
├─ server.js          # Main server file
├─ package.json       # Project metadata and dependencies
├─ views/             # EJS templates
│   └─ index.ejs
└─ README.md
```
📝 Notes
- This project is intended as a learning exercise for real-time web development with WebSockets.
- It is designed to be simple and easy to extend with more features, such as private messaging or chat rooms 🔒.
