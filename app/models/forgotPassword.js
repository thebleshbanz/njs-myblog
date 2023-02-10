const mongoose = require('mongoose');
const validator = require('validator');

const ForgotPasswordSchema = new mongoose.Schema(
    {
        // User Email column
        email : {
            type : String,
            validate : {
                validator: validator.isEmail,
                message: "EMAIL_IS_NOT_VALID"
            },
            lowercase: true,
            required: true
        },
        // User verification string
        verification : {
            type : String,
        },
        user : {
            type : Boolean,
            default : false
        },
        ipRequest : {
            type: String
        },
        browserRequest: {
            type: String
        },
        countryRequest : {
            type: String
        },
        ipChanged  : {
            type: String
        },
        browserChanged : {
            type :  String
        },
        countryChanged: {
            type:  String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('ForgotPassword', ForgotPasswordSchema);