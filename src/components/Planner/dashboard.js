import React, { useState } from 'react';
import AddTask from './addTask'
import {connect} from 'react-redux';

const Dashboard = (props) => {

    let [openModel, setOpenModel] = useState(false)
    let [key, setKey] = useState('')

    const handleModel = (index) => {
       let data = props.data[index]
        setOpenModel(true)       
        props.onAddTask({data,index})
        setKey(index)
    }
    
    return (
        <div>
            {
                props.data.map((item, index) => {
                    return (
                        <div key={index} onClick={() => handleModel(index)} className='mb-5' >
                            <div className="pb-5 border border-gray-200 shadow-md rounded-md">
                                <div className={ item.isOccupied ? `border-b border-solid-black p-4 bg-red-100` : `border-b border-solid-black p-4`}>
                                    {item.time}
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    <div className="flex-1 px-4 py-2 text-sm truncate">
                                        <span className="text-gray-900 font-bold hover:text-gray-600">First Name :</span>&nbsp;{item.firstName}
                                    </div>
                                </h3>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    <div className="flex-1 px-4 py-2 text-sm truncate">
                                        <span className="text-gray-900 font-bold hover:text-gray-600">Last Name :</span>&nbsp;{item.lastName}
                                    </div>
                                </h3>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    <div className="flex-1 px-4 py-2 text-sm truncate">
                                        <span className="text-gray-900 font-bold hover:text-gray-600">Number :</span>&nbsp;{item.number}
                                    </div>
                                </h3>
                                
                                </div>
                            </div>                        
                        </div>
                    )
                })
            }

            <AddTask openModel={openModel} {...props} setOpenModel={setOpenModel} key={key} data={props.data} />

        </div >
    )
}
const mapStateToProps = (state) =>{
    return{
        age: state.age,
        currentTask: state.currentTask,
        data: state.data,
        currentIndex:state.currentIndex
    }
}
const mapDispachToProps = (dispatch) => {
    return{ 
        onAddTask: (data) => dispatch({type: 'ADD_TASK', value:data}),
        onSaveTask: (data) => dispatch({type:'SAVE_TASK', value:data})
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Dashboard);