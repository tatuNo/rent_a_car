const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    username: { type: String, required: [true, 'username required'], unique: [true, 'username already taken'], minlength: [3, 'username minimum length is 3'] },
    name: { type: String, required: [true, 'name required']},
    email: { type: String, required: [true, 'email required'], unique: [true, 'user with this email already created']},
    phone: { type: String, required: [true, 'phonenumber required'] },
    passwordHash: { type: String, required: [true, 'password required'], minlength: [4, 'password minimum length 4 charaters'] },
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
