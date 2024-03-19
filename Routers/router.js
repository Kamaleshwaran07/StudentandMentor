import express from 'express';
import { assignMentor, createStudent, getAllStudents, getPreviousMentor } from '../Controller/student.controller.js';
import { assignStudent, createMentor, getAllMentor, getStudentsOfMentor } from '../Controller/mentor.controller.js';

const router = express.Router();

// Student routers
router.post('/create-student', createStudent)
router.get('/getstudent', getAllStudents)
router.get('/getmentor', getAllMentor)
router.put('/assignmentor/:_id', assignMentor)
router.get('/previousmentor/:studentId', getPreviousMentor)

// Mentor Routers

router.post('/create-mentor', createMentor)
router.put('/assignstudents/:mentorId', assignStudent)
router.get('/getstudentofmentor/:mentorId',getStudentsOfMentor)



export default router;