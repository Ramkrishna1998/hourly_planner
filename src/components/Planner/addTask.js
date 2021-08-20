import React, { useState } from 'react';
import { Modal } from '../Modal/modal'

const Planner = (props) => {
  const { openModel, setOpenModel, key } = props;
  const [details, setDetails] = useState({
    time: props.currentTask.time,
    firstName: props.currentTask.firstName,
    lastName: props.currentTask.lastName,
    number: props.currentTask.number,
    isOccupied: props.currentTask.isOccupied
  })

  const onSubmit = () => {
    details.isOccupied = true
    const { currentIndex } = props
    props.onSaveTask({ currentIndex, details })
    setOpenModel(false)
  }

  return (
    <Modal
      className="bg-white p-4 rounded-lg lg:max-w-3xl sm:w-full"
      open={openModel}
    >
      <div>
        <div className='border-b-4 border-solid border-red-200 p-3'>
          Add Task For {details.time}
        </div>
        <div className='pl-5 mt-4 pb-4'>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <div className="mt-1">
            <input type="text" 
              value={details.firstName} 
              onChange={(e) => setDetails({ ...details, firstName: e.target.value })}                
              name="firstName" 
              id="firstName" 
              className="shadow-md p-3 focus:ring-red-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="First Name"
            />
          </div>
        </div>

        <div className='pl-5 pb-4'>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <div className="mt-1">
            <input 
              type="text" 
              value={details.lastName} 
              onChange={(e) => setDetails({ ...details, lastName: e.target.value })}                
              name="lastName" 
              id="lastName" 
              className="shadow-md p-3 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="Last Name" 
            />
          </div>
        </div>

        <div className='pl-5 pb-4'>
          <label className="block text-sm font-medium text-gray-700">Number</label>
          <div className="mt-1">
            <input type="number" 
              value={details.number} onChange={(e) => setDetails({ ...details, number: e.target.value })}               
              name="number" 
              id="number" 
              className="shadow-md p-3 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md" 
              placeholder="Number"
            />
          </div>
        </div>


        <div className="flex justify-end px-2 pt-4 ">
          <span className="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md">
            <button
              name=""
              // onClick={handleSubmit(onSubmit)}
              onClick={() => setOpenModel(false)}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
          </span>
          <span className="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md">
            <button
              name=""
              onClick={onSubmit}
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white hover:bg-red-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 bg-red-200 active:bg-red-300 transition duration-150 ease-in-out"
            >
              Save
            </button>
          </span>
        </div>
      </div>

    </Modal>
  );
};
export default Planner;
