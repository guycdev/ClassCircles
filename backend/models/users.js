const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hobby: {
    type: Array,
    required: false,
  },
  university: {
    type: String,
    required: false,
  },
});

UserSchema.plugin(passportLocalMongoose); // Pass in passport plugin to schema.

module.exports = mongoose.model("User", UserSchema);
