// This file is designed to seed the database with initial content. Used for testing purposes and flushing content.

// Do NOT run this file on deployment.

const mongoose = require("mongoose");
const User = require("../models/users");
const Group = require("../models/groups");
const recGroup = require("../models/reacreationalGroups");

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
  await User.deleteMany({});
  await recGroup.deleteMany({});
  await Group.deleteMany({});

  // Create first user.
  // const newUser = new User({
  //   email: "ari@gmail.com",
  //   hobby: ["Web Development", "Gaming"],
  //   university: "Oregon State University",
  // });

  const newGroup = new Group({
    title: "test edu group",
    school: "Michigan State University",
    department: "Science",
    users: ["653429ec96679b3e6f1e453c"],
    description:
      "Science is fun! Come study with us! Anything from general physics, all the way through Organic Chemistry!",
  });

  const newRecGroup = new recGroup({
    groupName: "Test Rec Group",
    users: ["653474d6a86f3df5fbc0603e"],
    sport: "Basketball",
    schoolName: "Portland State University",
  });

  // await newUser.save();
  await newGroup.save();
  await newRecGroup.save();
};
console.log("SAVING...");

// Seed Database with one user.
seedDBUser().then(() => {
  mongoose.connection.close();
});
