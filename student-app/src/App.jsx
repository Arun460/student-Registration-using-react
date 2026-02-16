import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = () => {
    if (!name || !age || !course) return;

    const newStudent = {
      id: Date.now(),
      name,
      age,
      course,
    };

    setStudents([newStudent, ...students]);
    setName("");
    setAge("");
    setCourse("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="title">Student Registration System</h1>

        <div className="form">
          <input
            className="input"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="input"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            className="input"
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <button className="add-btn" onClick={addStudent}>
            Add Student
          </button>
        </div>

        <div className="list-section">
          <h2>Registered Students</h2>

          {students.length === 0 && (
            <p className="empty">No students added yet.</p>
          )}

          {students.map((student) => (
            <div key={student.id} className="student-card">
              <div>
                <h3>{student.name}</h3>
                <p>
                  Age: {student.age} | Course: {student.course}
                </p>
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
