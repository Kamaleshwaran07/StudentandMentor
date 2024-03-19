# Mentor and Student 


## Database

To connect to the database, we need *mongoose* a third party library to handle the database connection between mongoDb and NodeJs

## Schema

Generating a schema for both  the mentor and student models. Mongoose has a default function to generate schema and store it in model and export it. Both have same schema but stored in different model

## Router

For Routing, we use expressjs, a third party library to handle the Nodejs.

After installing the express, we can use 

`const router = express.Router()`

So now we can handle different routers with different API methods

## Controller

Handling all the functionalities is done in controller.

### Creating  a new mentor/student account

This controller uses a post method and gets the data from the body using student model

### Getting all the mentor/students accounts

This controller uses a get method and gets the data by calling the find query  of mongoose which returns an array of objects.

### Getting Particular Student/Mentor 

This is  handled by `findById` query which takes an Id as a parameter and returns the data.

### Assigning a Mentor/Student 

This is handled by `findByIdAndUpdate` query which takes an Id as a parameter to get the particular user and passing an Id in Body which creates a new Field in either collections based on the user.

For Student, it is an object as One student can have only one mentor but for a Mentor, it is an array of object as a mentor can have one or more students.

### Assigning a students to a mentor

So when a mentor is assigned to a student, it is a single object so we can directly push into the objects.

But When students are assigned to a mentor, the mentor should also be assigned to the students. So I used `map` function to loop through the students and assigning  the mentors
```
// Looping each student ID and update corresponding student
    const updatedStudents = await Promise.all(studentId.map(async (id) => {
        const updatedStudent = await Student.findByIdAndUpdate(id, { mentor: mentorId }, { new: true });
        console.log("Updated student:", updatedStudent);
        return updatedStudent;
        }));

// Update mentor with the array of student IDs
    const mentor = await Mentor.findByIdAndUpdate(mentorId, { $addToSet: { students: studentId  } }, { new: true });
```

### Thank You!!!