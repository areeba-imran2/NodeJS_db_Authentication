const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes'); 
const protectedRoutes = require('./routes/protectedRoutes');  
const db = require('./models'); 

dotenv.config();

const app = express();

 // Middleware to parse JSON
app.use(express.json()); 
// Middleware to parse cookies
app.use(cookieParser());

app.use('/auth', authRoutes);  
app.use('/protected', protectedRoutes); 

db.sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
});
