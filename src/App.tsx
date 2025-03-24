import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { useDispatch, useSelector } from "react-redux";
import { AvailableActions } from "./store";

interface StudentData {
  id: number;
  name: string;
  className: string;
  marks: number;
}

const App = () => {
  const studentList = useSelector((state) => state.studentList);
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState({
    id: 0,
    name: "",
    className: "",
    marks: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  function submitHandler() {
    console.log(studentData);
    setStudentData({
      id: 0,
      name: "",
      className: "",
      marks: 0,
    });
    if (isEditing) {
      dispatch({
        type: AvailableActions.EditStudent,
        payload: studentData,
      });
      setIsEditing(false);
    } else onAddStudent(studentData);
  }

  function onAddStudent(studentData: StudentData) {
    dispatch({
      type: AvailableActions.AddStudent,
      payload: studentData,
    });
  }

  function deleteStudent(id: number) {
    dispatch({
      type: AvailableActions.DeleteStudent,
      payload: id,
    });
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
