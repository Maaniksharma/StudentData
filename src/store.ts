import { createStore } from 'redux';
//creating a store
//creating reducer template
// exporting store

interface StudentData {
    id: number;
    name: string;
    className: string;
    marks: number;
}


export const enum AvailableActions {
    AddStudent = "ADD_STUDENT",
    EditStudent = "EDIT_STUDENT",
    DeleteStudent = "DELETE_STUDENT"
}

interface Action {
    type: AvailableActions,
    payload: any
}



const initialState: { studentList: StudentData[] } = {
    studentList: []
}



function studentsDataReducer(state, action: Action) {
    let studentListCopy = []
    let tempStudentIndex: number;
    switch (action.type) {
        case AvailableActions.AddStudent:
            return {
                studentList: [...state.studentList, action.payload]
            }
        case AvailableActions.DeleteStudent:
            return { studentlist: state.studentList.filter((studentData) => studentData.id != action.payload.id) }

        case AvailableActions.EditStudent:
            studentListCopy = [...state.studentList];
            tempStudentIndex = studentListCopy.findIndex(
                (student) => student.id === action.payload.studentData.id
            );
            studentListCopy[tempStudentIndex] = action.payload.studentData;
            return studentListCopy;

    }

}

const store = createStore(studentsDataReducer);



export default store;