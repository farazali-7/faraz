import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
    const navigate = useNavigate();
    return (
        <div className="p-6 max-w-4xl mx-auto bg-black-100">
            <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#4ade80]">Contact Us</h1>
                <p className="text-base md:text-lg text-black-600">Need assistance? Use the contact information below to reach us.</p>
            </header>

            <div className="bg-green-200 border border-black-300 rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black-800">Contact Information</h2>
                <div className="space-y-6 md:space-y-8">
                    <div>
                        <h3 className="text-base md:text-lg font-semibold text-black-700">Address</h3>
                        <p className="text-black-600">123 Health Ave, Suite 100<br />Wellness City, HC 12345</p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-semibold text-black-700">Phone</h3>
                        <p className="text-blue-600 hover:underline">+1 (123) 456-7890</p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-semibold text-black-700">Email</h3>
                        <p className="text-blue-600 hover:underline">contact@healthcare.com</p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-semibold text-black-700">Office Hours</h3>
                        <p className="text-black-600">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday - Sunday: Closed</p>
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
