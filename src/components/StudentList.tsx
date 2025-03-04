import React from "react";
import StudentCard from "./StudentCard.StudentList";

interface StudentData {
  id: number;
  name: string;
  marks: number;
  className: string;
}

const StudentList: React.FC<{ studentList: StudentData[] }> = ({
  studentList,
}) => {
  return (
    <div>
      {studentList.map((student: StudentData) => (
        <StudentCard {...student} />
      ))}
    </div>
  );
};

export default StudentList;
