const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: false },
  email: {
    type: String,
    required: false,
    unique: [true, "Email is already in use"],
  },
  password: { type: String, required: false },  
});

module.exports = mongoose.model("Admin", UserSchema);