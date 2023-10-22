const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recreationalGroupSchema = {
  schoolName: {
    type: String,
    required: true,
  },
  activity: {
    type: Boolean,
    required: false,
  },
  sport: {
    type: String,
    required: true,
  },
  groupName: {
    type: String,
    required: true,
  },
  memberCount: {
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

module.exports = mongoose.model("recreationalGroup", recreationalGroupSchema);
