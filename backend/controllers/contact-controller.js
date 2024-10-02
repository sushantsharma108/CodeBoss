const Contact = require('../models/contact-model');

const contactForm = async (req, res, next) => { 
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: 'Contact Form Submitted Successfully' });
    } catch (error) {
        return res.status(500).json({ message: "Form Submission Error" });
    }
}

module.exports = contactForm;