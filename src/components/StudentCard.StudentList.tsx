import React from "react";

interface StudentData {
  id: number;
  name: string;
  className: string;
  marks: number;
  onDeleteStudent: (id: number) => void;
}

const StudentCard: React.FC<StudentData> = ({
  name,
  className,
  id,
  marks,
  onDeleteStudent,
  onEditStudent,
}) => {
  return (
    <div className="flex flex-col p-2 border rounded-lg">
      <div className="">id:{id}</div>
      <div className="">name:{name}</div>
      <div className="">className:{className}</div>
      <div className="">marks:{marks}</div>
      <button
        className="border rounded-lg p-1"
        onClick={() => onDeleteStudent(id)}
      >
        Delete
      </button>
      <button
        className="border rounded-lg p-1"
        onClick={() => onEditStudent(id)}
      >
        Edit
      </button>
    </div>
  );
};

export default StudentCard;
