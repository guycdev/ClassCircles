const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DashboardSchema = new Schema({
  // come back to after planning relationships
});

module.exports = mongoose.model("Dashboard", DashboardSchema);
