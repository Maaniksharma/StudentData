import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

interface StudentData {
  id: number;
  name: string;
  marks: number;
  className: string;
}

const App: React.FC = () => {
  const [studentList, setStudentList] = useState<StudentData[]>([]);

  function addStudent(studentDetail: StudentData) {
    console.log("studentDetail" + studentDetail);
    setStudentList([...studentList, studentDetail]);
  }
  return (
    <div
      className=""
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <StudentForm onAddStudent={addStudent} />
      <StudentList studentList={studentList} />
    </div>
  );
};

export default App;
