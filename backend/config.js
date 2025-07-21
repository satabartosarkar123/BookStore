import dotenv from 'dotenv';
dotenv.config();

export const PORT = 5555;

export const mongoDBURL = process.env.MONGO_URI;

// Please create a free database for yourself.
// This database will be deleted after tutorial