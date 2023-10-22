const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recGroupSchema = {
  school: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  groupName: {
    type: String,
    required: false,
  },
  playerCount: {
    type: Number,
    required: false,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // Use the User model; there may be many users per group.
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment", // Use Comment model; there may be many comments per group.
    },
  ],
};

module.exports = mongoose.model("recGroup", recGroupSchema);
