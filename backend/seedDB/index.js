// This file is designed to seed the database with initial content. Used for testing purposes and flushing content.

// Do NOT run this file on deployment.

const mongoose = require("mongoose");
const User = require("../models/users");

// Establish connection to MongoDB.
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/classcircles");
    console.log("MongoDB connection was successful!");
  } catch (err) {
    console.log("There was an error...");
    console.log(err);
  }
};

// Seed DB with initial user.
const seedDBUser = async () => {
  await connectDB();
  await User.deleteMany({}); // Flush DB of all users.

  // Create first user.
  const newUser = new User({
    email: "arizetocs@gmail.com",
    hobby: ["Web Development", "Gaming"],
    university: "Oregon State University",
  });
  await newUser.save();
};
console.log("SAVING...");

// Seed Database with one user.
seedDBUser().then(() => {
  mongoose.connection.close();
});
