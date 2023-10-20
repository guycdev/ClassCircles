const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("./comments");

const GroupSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    requird: true,
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User", // Use the User model; there may be many users per group.
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment", // Use Review model; there may be many comments per group.
    },
  ],
});

// COME BACK AND DESIGN FUNCTIONALITY SUCH THAT A GROUP USER DELETES A {}, IT TRIGGERED THE ABILITY TO DELETE ALL SPECIFIED STRINGS WITHIN THE 'COMMENTS' OF THE SCHEMA.
//
//
// come back and design this code...
//
//
//

module.exports = mongoose.model("Group", GroupSchema);
