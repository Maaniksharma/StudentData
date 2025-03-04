import React from "react";

interface StudentCardProps {
  id: number;
  name: string;
  marks: number;
  className: string;
}

const StudentCard: React.FC<StudentCardProps> = ({
  id,
  name,
  className,
  marks,
}) => {
  return (
    <div
      style={{
        border: "2px",
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="">{id}</div>
      <div className="">{name}</div>
      <div className="">{className}</div>
      <div className="">{marks}</div>
    </div>
  );
};

export default StudentCard;
