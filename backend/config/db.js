import mongoose from 'mongoose';

const connectDB = () => {
  try {
    const conn = mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log('DATABASE CONNECTED SUCCESSFULLY'));
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
