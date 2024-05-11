const mongoose = require('mongoose')

// define schema
const resumeschema = new mongoose.Schema({ 
    user_id: {
        type: String,
        required: true
    
    },
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true,
    },
},
}, { timestamps: true })

const resumeModal = mongoose.model('resume_data', resumeschema)

module.exports = resumeModal