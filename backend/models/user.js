const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    username: { type: String },
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    passwordHash: { type: String },
    cars: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Car' } ]
})

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

userSchema.plugin(uniqueValidator);
const User = mongoose.model("User", userSchema);
module.exports = User;
