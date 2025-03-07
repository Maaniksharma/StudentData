import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

interface StudentData {
  id: number;
  name: string;
  className: string;
  marks: number;
}

const App = () => {
  const [studentList, setStudentlist] = useState<StudentData[]>([]);
  const [studentData, setStudentData] = useState({
    id: 0,
    name: "",
    className: "",
    marks: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
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
    if (isEditing) {
      const studentListCopy = [...studentList];
      const studentIndex = studentList.findIndex(
        (student) => student.id === studentData.id
      );
      studentListCopy[studentIndex] = studentData;
      setStudentlist(studentListCopy);
    } else onAddStudent(studentData);
  }

  function onAddStudent(studentData: StudentData) {
    setStudentlist([...studentList, studentData]);
    console.log(studentList);
  }

  function deleteStudent(id: number) {
    const newStudentList = studentList.filter(
      (studentData) => studentData.id != id
    );
    setStudentlist(newStudentList);
  }

  function editStudent(id: number) {
    setIsEditing(true);
    const studentToEdit = studentList.filter(
      (studentData) => studentData.id === id
    );
    setStudentData(studentToEdit[0]);
  }

  return (
    <div className="flex justify-between mt-[40px]">
      <StudentForm
        studentData={studentData}
        inputChangeHandler={inputChangeHandler}
        submitHandler={submitHandler}
      />
      <StudentList
        studentList={studentList}
        onDeleteStudent={deleteStudent}
        onEditStudent={editStudent}
      />
    </div>
  );
};

export default App;
