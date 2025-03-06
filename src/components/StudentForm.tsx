import { useState } from "react";

const StudentForm = ({ onAddStudent }) => {
  const [studentData, setStudentData] = useState({
    id: 0,
    name: "",
    className: "",
    marks: 0,
  });

  function inputChangeHandler(key: string, value: number | string) {
    setStudentData({ ...studentData, [key]: value });
  }
  function submitHandler() {
    console.log(studentData);
    setStudentData({
      id: 0,
      name: "",
      className: "",
      marks: 0,
    });
    onAddStudent(studentData);
  }
  return (
    <div>
      <h3 className="text-3xl font-semibold">Student Form</h3>
      <br />
      Enter Id:
      <input
        value={studentData.id}
        type="number"
        className="border rounded-sm"
        onChange={(e) => inputChangeHandler("id", e.target.value)}
      />
      <br />
      Enter Name:
      <input
        value={studentData.name}
        type="text"
        className="border rounded-sm"
        onChange={(e) => inputChangeHandler("name", e.target.value)}
      />
      <br />
      Enter ClassName:
      <input
        value={studentData.className}
        type="text"
        className="border rounded-sm"
        onChange={(e) => inputChangeHandler("className", e.target.value)}
      />
      <br />
      Enter Marks:
      <input
        value={studentData.marks}
        type="number"
        className="border rounded-sm"
        onChange={(e) => inputChangeHandler("marks", e.target.value)}
      />
      <br />
      <button className="p-2 border rounded-lg" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default StudentForm;
