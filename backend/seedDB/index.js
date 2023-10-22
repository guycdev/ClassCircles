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

  // DO NOT RUN DELETE THIS BLOCK UNLESS WE ARE FLUSHING THE DB.

  await User.deleteMany({});
  await recGroup.deleteMany({});
  await Group.deleteMany({});

  //

  // Create first user.
  // const newUser = new User({
  //   email: "ari@gmail.com",
  //   hobby: ["Web Development", "Gaming"],
  //   university: "Oregon State University",
  // });

  const sampleUser = new User({
    email: "sample@email.com",
    university: "Sample University",
    subjects: ["Mathematics", "Computer Science"],
    hobbies: ["Reading", "Coding"],
    funFact: "I love pizza!",
    avatar: "link_to_avatar_image.jpg",
    department: "Computer science",
    name: "Guy Cohen",
    _id: "65355ca3b0554119a2f81acc",
  });

  const eduGroup1 = new Group({
    groupName: "Future Software Engineers",
    school: "Michigan State University",
    department: "Science",
    users: ["65355ca3b0554119a2f81acc"],
    class: "Science 101",
    description:
      "Programming is fun! Come study with us! Anything from Introduction to Computer Science, all the way through Operating Systems!",
  });

  const eduGroup2 = new Group({
    groupName: "Math Lovers",
    school: "Portland State University",
    department: "Mathematics",
    users: ["65355ca3b0554119a2f81acc"],
    class: "Math 101",
    description:
      "We love math! Computational, logic-based, novice or pro, come join us!!",
  });

  const eduGroup3 = new Group({
    groupName: "Poets Unite",
    school: "University of Oregon",
    class: "English 101",
    department: "English",
    users: ["65355ca3b0554119a2f81acc"],
    description: "frasier crane test",
  });

  const recGroup1 = new recGroup({
    school: "State University of New York at Albany",
    activity: "Football",
    type: "type A",
    teamName: "Albany Huskies",
    playerCount: 22,
    users: ["65355ca3b0554119a2f81acc"],
  });

  const recGroup2 = new recGroup({
    school: "University of California, Los Angeles",
    activity: "Soccer",
    type: "type C",
    teamName: "UCLA Strikers",
    playerCount: 18,
    users: ["65355ca3b0554119a2f81acc"],
  });

  const recGroup3 = new recGroup({
    school: "Stanford University",
    activity: "Tennis",
    type: "type D",
    teamName: "Stanford Aces",
    playerCount: 10,
    users: ["65355ca3b0554119a2f81acc"],
  });

  const recGroup4 = new recGroup({
    school: "University of Texas at Austin",
    activity: "Volleyball",
    type: "type E",
    teamName: "Texas Thunder",
    playerCount: 12,
    users: ["65355ca3b0554119a2f81acc"],
  });

  const recGroup5 = new recGroup({
    school: "Massachusetts Institute of Technology",
    activity: "Swimming",
    type: "type F",
    teamName: "MIT Marlins",
    playerCount: 20,
    users: ["65355ca3b0554119a2f81acc"],
  });

  const recGroup6 = new recGroup({
    school: "University of Florida",
    activity: "Baseball",
    type: "type G",
    teamName: "Florida Gators",
    playerCount: 25,
    users: ["65355ca3b0554119a2f81acc"],
  });

  // DO NOT RUN UNLESS WE ARE FLUSHING THE DB //

  await sampleUser.save();
  await eduGroup1.save();
  await eduGroup2.save();
  await eduGroup3.save();
  await recGroup1.save();
  await recGroup2.save();
  await recGroup3.save();
  await recGroup4.save();
  await recGroup5.save();
  await recGroup6.save();
  //
};
console.log("SAVING...");

// Seed Database with one user.
seedDBUser().then(() => {
  mongoose.connection.close();
});
