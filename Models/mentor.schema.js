import mongoose from "mongoose";


const mentorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}]
    
})

const Mentor = mongoose.model('Mentor', mentorSchema);

export default Mentor