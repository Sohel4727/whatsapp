import mongoose from "mongoose";

const Connection = async () => {
  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;
  const dbName = process.env.MONGO_DB;

  const URI = `mongodb+srv://${username}:${password}@cluster0.vjluocf.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.log("❌ Error while connecting to MongoDB:", error.message);
  }
};

export default Connection;

// import mongoose from 'mongoose';

// const Connection = async (username, password) => {
//     const URL = `mongodb+srv://${username}:${password}@whatsapp-clone.fqers4o.mongodb.net/`;
//     try {
//         await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
//         console.log('Database Connected Succesfully');
//     } catch(error) {
//         console.log('Error: ', error.message);
//     }

// };

// export default Connection;
