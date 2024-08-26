const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');  // Import auth routes
const protectedRoutes = require('./routes/protectedRoutes');  // Import protected routes
const db = require('./models');  // Import models

dotenv.config();

const app = express();

app.use(express.json());  // Middleware to parse JSON
app.use(cookieParser());  // Middleware to parse cookies

app.use('/auth', authRoutes);  // Register auth routes under /auth path
app.use('/protected', protectedRoutes);  // Register protected routes under /protected path

// Sync Sequelize models with the database and start the server
db.sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
});
