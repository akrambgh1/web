const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const connectDB = require('./config/db');
connectDB();

const formRoutes = require('./routes/formRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create an HTTP server so that we can attach Socket.IO
const server = http.createServer(app);

// Initialize Socket.IO with CORS settings; adjust origin for production if needed
const socketio = require('socket.io');
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173", // Change this to your domain in production
    methods: ["GET", "POST"]
  }
});

// Attach the Socket.IO instance to each request so routes can emit events
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use('/api/form', formRoutes);

// Listen for new Socket.IO connections
io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`);
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

// Start the HTTP server (with Socket.IO) on the specified PORT
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
