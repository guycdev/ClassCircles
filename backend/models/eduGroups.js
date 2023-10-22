const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  groupName: {
    required: false,
    type: String,
  },
  memberCount: {
    type: Number,
    required: false,
  },
  school: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  class: {
    type: String,
    required: false,
  },
  description: {
    required: false,
    type: String,
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
});
module.exports = mongoose.model("Group", GroupSchema);
