import React, { useState } from "react";

interface StudentData {
  id: number;
  name: string;
  marks: number;
  className: string;
}
interface StudentFormProps {
  onAddStudent: (studentDetail: StudentData) => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onAddStudent }) => {
  const [studentData, setStudentData] = useState<StudentData | {}>({});

  function handleInputChange(key: string, value: number | string) {
    setStudentData({ ...studentData, [key]: value });
    console.log(studentData);
  }
  return (
    <div>
      <br />
      <br />
      Enter Id:
      <input
        type="number"
        onChange={(e) => handleInputChange("id", e.target.value)}
      />
      <br />
      Enter Name:
      <input
        type="text"
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      <br />
      Enter class:
      <input
        type="text"
        onChange={(e) => handleInputChange("class", e.target.value)}
      />
      <br />
      Enter marks:
      <input
        type="number"
        onChange={(e) => handleInputChange("marks", e.target.value)}
      />
      <br />
      <button onClick={(e) => onAddStudent(studentData)}>Add</button>
    </div>
  );
};

export default StudentForm;
