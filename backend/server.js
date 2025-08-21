import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from "./Database/connection.js";
import userRoutes from './routes/userRoutes.js';
import { testConnection } from './Database/connection.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Enable CORS
app.use(cors());

// Serve static files (images, etc.)
app.use(express.static(path.join(process.cwd(), 'public')));

// Parse JSON and form-urlencoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// General route
app.get('/', (req, res) => {
    res.json({ msg: "API is running" });
});

// Users API
app.use("/user", userRoutes);

// Sync database
sequelize.sync({ alter: true })
    .then(() => console.log("Database synced"))
    .catch(err => console.error("Error syncing DB:", err));
await testConnection();
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
