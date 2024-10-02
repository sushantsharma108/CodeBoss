const { Schema, model } = require('mongoose');

// Create a schema for the Contact model:
const contactSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

// Create the Contact model:
const Contact = new model('Contacts', contactSchema);
module.exports = Contact;