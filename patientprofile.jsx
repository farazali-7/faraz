import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PatientProfile() {
    const navigate = useNavigate();
    const data = {
        name: "John Doe",
        gender: "Male",
        age: "30"
    };
    const RecordDataHandler=()=>{
        navigate('')
    }
     const bookAppointmentbuttonHandler =()=>{
        navigate('')
     }
    const scheduledbuttonHandler=()=>{
        navigate('')
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            
            <div className="bg-blue-600 border border-gray-800 rounded-lg p-6 mb-8 shadow-lg">
                <div className="text-6xl mb-4" aria-label="Profile Icon">🙎🏻‍♂️</div>
                <div className="text-white">
                    <div className="flex items-center mb-2">
                        <h1 className="text-lg font-semibold w-32">Name:</h1>
                        <h2 className="text-lg font-medium">{data.name}</h2>
                    </div>
                    <div className="flex items-center mb-2">
                        <h1 className="text-lg font-semibold w-32">Gender:</h1>
                        <h2 className="text-lg font-medium">{data.gender}</h2>
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-lg font-semibold w-32">Age:</h1>
                        <h2 className="text-lg font-medium">{data.age}</h2>
                    </div>
                </div>
            </div>

            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-green-500 border border-gray-800 rounded-lg  p-4 flex flex-col justify-between h-48 shadow-lg">
                    <h1 className='text-center uppercase font-bold'>Medical Records</h1>
                    <h1 className="text-md font-semibold text-white ">Please review your updated medical records</h1>
                    <button onClick={RecordDataHandler} className="bg-white ml-4 text-center h-10 w-32 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        History
                    </button>
                </div>
                <div className="bg-blue-500 border border-gray-800 rounded-lg p-6 flex flex-col justify-between h-48 shadow-lg">
                    <h1 className='text-center uppercase font-bold'>Appointments</h1>
                    <h1 className="text-md  font-semibold text-white mb-4">For your well-being, we encourage you to schedule an appointment at your earliest convenience</h1>
                    <div className="space-y-2">
                        <button onClick={bookAppointmentbuttonHandler} className="bg-white h-10 w-20 text-center text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Book 
                        </button>
                        <button onClick={scheduledbuttonHandler} className="bg-white ml-4 text-center h-10 w-32 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Scheduled
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
