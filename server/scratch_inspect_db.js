import { PrismaClient } from '@prisma/client';
import mongoose from 'mongoose';
import Connection from './src/models/Connection.js';
import Chat from './src/models/Chat.js';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function inspect() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/clique');
    console.log("Connected to MongoDB & PostgreSQL.");

    const users = await prisma.user.findMany({
      include: { profile: true, preferences: true }
    });

    console.log(`\n--- USERS IN DATABASE: ${users.length} ---`);
    users.forEach(u => {
      console.log(`User ID: ${u.id} | Email: ${u.email} | Name: ${u.fullName}`);
      console.log(`  Gender: ${u.profile?.gender} | PreferredName: ${u.profile?.preferredName}`);
      console.log(`  InterestedInGender: ${JSON.stringify(u.preferences?.interestedInGender)} | MaxDistance: ${u.preferences?.maxDistance}`);
    });

    const connections = await Connection.find({});
    console.log(`\n--- CONNECTIONS IN DATABASE: ${connections.length} ---`);
    connections.forEach(c => {
      console.log(`  Sender: ${c.senderId} | Receiver: ${c.receiverId} | Status: ${c.status}`);
    });

  } catch (err) {
    console.error("Error inspecting database:", err);
  } finally {
    await prisma.$disconnect();
    await mongoose.disconnect();
  }
}

inspect();
