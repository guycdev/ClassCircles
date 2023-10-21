const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  university: {
    type: String,
    required: true,
  },
  schoolLogo: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  subjects: {
    type: Array,
    required: true,
  },
  graduationYear: {
    type: Number,
    required: false,
  },
  hobbies: {
    type: Array,
    required: true,
  },
  funFact: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
});

UserSchema.plugin(passportLocalMongoose); // Pass in passport plugin to schema.

module.exports = mongoose.model("User", UserSchema);
