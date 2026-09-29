const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: [30, "Name cannot exceed 30 characters "]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
   message: {
        type: String,
        required: true,
        trim: true,
   }

},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Contact", contactSchema);