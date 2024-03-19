
import Mentor from "../Models/mentor.schema.js";
import Student from "../Models/student.schema.js";

//create a Student

export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(200).json({ student, message: 'New Student Joined' });

    } catch (error) {
        console.log(error);
    }
}


//get all students

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json({ data:students, message: "Fetched all students" })
    } catch (error) {
        console.log(error);
    }
}

// Assign a mentor to a student

export const assignMentor = async (req, res) => {
    try {
        const { _id } = req.params;
        console.log(_id);
        const { id } = req.body
        console.log(id);
        const mentor = await Student.findByIdAndUpdate(_id,{ mentor: id } , { new: true })
        res.status(200).json({ data: mentor, message: "Successfully assigned a mentor to the student" })

    } catch (error) {
        console.log(error);
    }
}

//Get Previous Mentor
export const getPreviousMentor = async (req, res) => {
    try {
        const { studentId } = req.params;
        const previousMentor = await Student.findById(studentId).populate('_id') 
        res.status(200).json({ data: previousMentor, student: Student.firstName, Mentor: Mentor.firstName, message: "Successfully assigned a mentor to the student" })

    } catch (error) {
        console.log(error);
    }
}



