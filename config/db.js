const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    const uri = 'mongodb+srv://himanshu:1234@bthnews.cwkjd.mongodb.net/';
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = { connectToDB };