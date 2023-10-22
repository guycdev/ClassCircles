// This file is designed to seed the database with initial content. Used for testing purposes and flushing content.

// Do NOT run this file on deployment.

const mongoose = require("mongoose");
const User = require("../models/users");
const Group = require("../models/eduGroups");
const recGroup = require("../models/recGroups");

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

  const eduGroup1 = new Group({
    groupName: "Future Software Engineers",
    school: "Michigan State University",
    department: "Science",
    users: ["653557a4dcfdd858eb77917e"],
    description:
      "Programming is fun! Come study with us! Anything from Introduction to Computer Science, all the way through Operating Systems!",
  });

  const eduGroup2 = new Group({
    groupName: "Math Lovers",
    school: "Portland State University",
    department: "Mathematics",
    users: ["653557a4dcfdd858eb77917e"],
    description:
      "We love math! Computational, logic-based, novice or pro, come join us!!",
  });

  const eduGroup3 = new Group({
    groupName: "Poets Unite",
    school: "University of Oregon",
    department: "English",
    users: ["653557a4dcfdd858eb77917e"],
    description: "frasier crane test",
  });

  const recGroup1 = new recGroup({
    school: "State University of New York at Albany",
    activity: "Football",
    type: "type A",
    teamName: "Albany Huskies",
    playerCount: 22,
    users: ["653557a4dcfdd858eb77917e"],
  });

  const recGroup2 = new recGroup({
    school: "University of California, Los Angeles",
    activity: "Soccer",
    type: "type C",
    teamName: "UCLA Strikers",
    playerCount: 18,
    users: ["653557a4dcfdd858eb77917e"],
  });

  const recGroup3 = new recGroup({
    school: "Stanford University",
    activity: "Tennis",
    type: "type D",
    teamName: "Stanford Aces",
    playerCount: 10,
    users: ["653557a4dcfdd858eb77917e"],
  });

  const recGroup4 = new recGroup({
    school: "University of Texas at Austin",
    activity: "Volleyball",
    type: "type E",
    teamName: "Texas Thunder",
    playerCount: 12,
    users: ["653557a4dcfdd858eb77917e"],
  });

  const recGroup5 = new recGroup({
    school: "Massachusetts Institute of Technology",
    activity: "Swimming",
    type: "type F",
    teamName: "MIT Marlins",
    playerCount: 20,
    users: ["653557a4dcfdd858eb77917e"],
  });

  const recGroup6 = new recGroup({
    school: "University of Florida",
    activity: "Baseball",
    type: "type G",
    teamName: "Florida Gators",
    playerCount: 25,
    users: ["653557a4dcfdd858eb77917e"],
  });

  // await newUser.save();
  await eduGroup1.save();
  await eduGroup2.save();
  await eduGroup3.save();
  await recGroup1.save();
  await recGroup2.save();
  await recGroup3.save();
  await recGroup4.save();
  await recGroup5.save();
  await recGroup6.save();
};
console.log("SAVING...");

// Seed Database with one user.
seedDBUser().then(() => {
  mongoose.connection.close();
});
