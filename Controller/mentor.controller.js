import Mentor from "../Models/mentor.schema.js";
import Student from "../Models/student.schema.js";


// create a new mentor
export const createMentor = async (req, res) => {
    try {
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(200).json({ mentor, message: 'New Mentor Joined' });

    } catch (error) {
        console.log(error);
    }
}

// Get All the mentors

export const getAllMentor = async (req, res) => {
    try {
        const mentors = await Mentor.find()
        res.status(200).json({ data: mentors, message: "Fetched all mentor" })
    } catch (error) {
        console.log(error);
    }
}

// Assigning students to mentor
export const assignStudent = async (req, res) => {
    try {
        const { mentorId } = req.params;
        const { studentId } = req.body;
        // Looping each student ID and update corresponding student
        const updatedStudents = await Promise.all(studentId.map(async (id) => {
            const updatedStudent = await Student.findByIdAndUpdate(id, { mentor: mentorId }, { new: true });
            console.log("Updated student:", updatedStudent);
            return updatedStudent;
        }));

        // Update mentor with the array of student IDs
        const mentor = await Mentor.findByIdAndUpdate(mentorId, { $addToSet: { students: studentId  } }, { new: true });

        res.status(200).json({ data: updatedStudents, mentor, message: "Successfully assigned students to mentor" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Fetching the Students assigned to a Mentor
export const getStudentsOfMentor = async (req, res) => {
    try {
        const { mentorId } = req.params;
        console.log(mentorId);
        const students = await Student.find({'mentor': mentorId})
        res.status(200).json({ data: students, message: "Successfully fetched students for the mentor" })

    } catch (error) {
        console.log(error);
    }
}