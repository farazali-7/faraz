import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PatientHistory() {
    const navigate = useNavigate();
    const data = {
        name: "John Doe",
        gender: "Male",
        age: "30"
    };
    

    const historydata = [
        {
            date: "13 Dec 2024",
            doctor: "Dr. Ali",
            description: "While you can't style  directly with Tailwind CSS, you can effectively manage spacing and layout by using Tailwind utilities on surrounding elements and containers."
        },
        {
            date: "12 Dec 2024",
            doctor: "Dr. Fahad",
            description: "While you can't style  directly with Tailwind CSS, you can effectively manage spacing and layout by using Tailwind utilities on surrounding elements and containers."
        },
        {
            date: "12 Sep 2024",
            doctor: "Dr. Kamran",
            description: "While you can't style  directly with Tailwind CSS, you can effectively manage spacing and layout by using Tailwind utilities on surrounding elements and containers."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-200 p-4">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">

                <div className="bg-gradient-to-r from-[#4ade80] to-[#86efac] p-6 rounded-lg shadow-xl flex flex-col items-center lg:items-start lg:justify-start lg:w-[300px] lg:h-[300px]">
                    <div className="flex-shrink-0 flex items-center justify-center mb-4 lg:mb-0">
                        <h1 className="text-6xl text-white" aria-label="Profile Icon">🙎🏻‍♂️</h1>
                    </div>
                    <div className="flex-1 w-full h-full flex flex-col justify-center items-start space-y-4">
                        <div className="flex">
                            <h1 className="text-lg font-semibold text-white w-24">Name:</h1>
                            <h2 className="text-xl text-white">{data.name}</h2>
                        </div>
                        <div className="flex">
                            <h1 className="text-lg font-semibold text-white w-24">Gender:</h1>
                            <h2 className="text-xl text-white">{data.gender}</h2>
                        </div>
                        <div className="flex">
                            <h1 className="text-lg font-semibold text-white w-24">Age:</h1>
                            <h2 className="text-xl text-white">{data.age}</h2>
                        </div>
                    </div>
                </div>


                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-black mb-4 text-center">History</h2>
                    <div className="bg-[#f0fdfa] shadow-md rounded-lg">
                        {historydata.map((item, index) => (
                            <div key={index} className={`border-b-2 border-[#86efac] p-4 ${index === historydata.length - 1 ? '' : 'pb-4'}`}>
                                <p className="font-bold text-gray-800">{item.date}</p>
                                <p className="font-semibold text-gray-700">Doctor: {item.doctor}</p>
                                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.description }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button 
    onClick={() => navigate(-1)} 
    className="bg-[#4ade80] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-opacity-50 transition duration-200 ease-in-out"
>
    Go back
</button>

        </div>
    );
}
