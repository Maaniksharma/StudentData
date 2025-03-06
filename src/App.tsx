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

  function onAddStudent(studentData: StudentData) {
    setStudentlist([...studentList, studentData]);
    console.log(studentList);
  }

  return (
    <div className="flex justify-between mt-[40px]">
      <div className="">
        <StudentForm onAddStudent={onAddStudent} />
      </div>
      <div className="">
        <StudentList studentList={studentList} />
      </div>
    </div>
  );
};

export default App;
