const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    date: { type: String },
    location: { type: String },
    price: { type: String },
    car: { type: Object },
    user: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ],
})

carSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Car', carSchema)