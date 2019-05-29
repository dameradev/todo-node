const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);