const initialState = {
    age: 21,
    currentTask: [],
    currentIndex:null,
    data :[
        { time: '9 A.M.', firstName: 'Ramkrishna', lastName: 'Bhatt', number: "1234567890", isOccupied: true },
        { time: '10 A.M.', firstName: '', lastName: '', number: "", isOccupied: false },
        { time: '11 A.M.', firstName: 'Raj', lastName: 'Baxi', number: "1234567890", isOccupied: true },
        { time: '12 A.M.', firstName: 'Jonty', lastName: 'Tejani', number: "1234567890", isOccupied: true },
        { time: '1 P.M.', firstName: 'Vishal', lastName: 'Patel', number: "1234567890", isOccupied: true },
        { time: '2 P.M.', firstName: 'Mayur', lastName: 'Agravat', number: "1234567890", isOccupied: true },
        { time: '4 P.M.', firstName: '', lastName: '', number: "", isOccupied: false },
        { time: '5 P.M.', firstName: '', lastName: '', number: "", isOccupied: false },
    ]
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'AGE_UP' ){
        newState.age++;
    }

    if(action.type === 'ADD_TASK'){
    newState.currentTask = action.value.data
    newState.currentIndex = action.value.index
    }

    if(action.type === 'SAVE_TASK'){
        newState.data.splice(action.value.currentIndex,1,action.value.details)
    }

    return newState;

}

export default reducer;