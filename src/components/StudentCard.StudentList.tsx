import React from "react";

interface StudentData {
  id: number;
  name: string;
  className: string;
  marks: number;
}

const StudentCard: React.FC<StudentData> = ({ name, className, id, marks }) => {
  return (
    <div className="flex flex-col p-2 border rounded-lg">
      <div className="">id:{id}</div>
      <div className="">name:{name}</div>
      <div className="">className:{className}</div>
      <div className="">marks:{marks}</div>
    </div>
  );
};

export default StudentCard;
