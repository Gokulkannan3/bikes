import React, { useState } from 'react';
import Cnav from '../components/Cnav';
import axios from 'axios';

export default function Add() {
    const [formData, setFormData] = useState({
        name: '',
        cname: '',
        contact: '',
        mail: '',
        address: '',
        area: '',
        state: '',
        country: '',
        front: null,
        back: null,
        rightimage: null,
        leftimage: null,
        speedometer: null,
        lefthandle: null,
        righthandle: null,
        geartype: '',
        mileage: '',
        petrol: '',
        price: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const fileInputName = e.target.name;
        const file = e.target.files[0];

        setFormData((prevFormData) => ({
            ...prevFormData,
            [fileInputName]: file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            if (formData[key] instanceof File) {
                formDataToSend.append(key, formData[key], formData[key].name);
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }
        try {
            const response = await axios.post(`http://localhost:3003/pictures`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            setFormData({
                name: '',
                cname: '',
                contact: '',
                mail: '',
                address: '',
                area: '',
                state: '',
                country: '',
                front: null,
                back: null,
                rightimage: null,
                leftimage: null,
                speedometer: null,
                lefthandle: null,
                righthandle: null,
                geartype: '',
                mileage: '',
                petrol: '',
                price: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                alert(`Error submitting form: ${error.response.data.message || 'Server responded with an error'}`);
            } else if (error.request) {
                alert('Error submitting form: No response received from the server.');
            } else {
                alert(`Error submitting form: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <Cnav />
            <div className="border-b border-gray-900/10 pb-12 p-5">
                <form onSubmit={handleSubmit}>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="cname" className="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
                            <input
                                type="text"
                                id="cname"
                                name="cname"
                                value={formData.cname}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Contact</label>
                            <input
                                type="number"
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="mail" className="block text-sm font-medium leading-6 text-gray-900">Mail Id</label>
                            <input
                                type="mail"
                                id="mail"
                                name="mail"
                                value={formData.mail}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                            <textarea
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />  
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">Area</label>
                            <input
                                type="text"
                                id="area"
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">state</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="front" className="block text-sm font-medium leading-6 text-gray-900">Front Image</label>
                            <input
                                type="file"
                                id="front"
                                name="front"
                                onChange={handleFileChange}
                                className="mt-2"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="back" className="block text-sm font-medium leading-6 text-gray-900">Back Image</label>
                            <input
                                type="file"
                                id="back"
                                name="back"
                                onChange={handleFileChange}
                                className="mt-2"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="rightimage" className="block text-sm font-medium leading-6 text-gray-900">Right Image</label>
                            <input
                                type="file"
                                id="rightimage"
                                name="rightimage"
                                onChange={handleFileChange}
                                className="mt-2"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="leftimage" className="block text-sm font-medium leading-6 text-gray-900">Left Image</label>
                            <input
                                type="file"
                                id="leftimage"
                                name="leftimage"
                                onChange={handleFileChange}
                                className="mt-2"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="left" className="block text-sm font-medium leading-6 text-gray-900">Speedometer</label>
                            <input
                                type="file"
                                id="speedometer"
                                name="speedometer"
                                onChange={handleFileChange}
                                className="mt-2"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="left" className="block text-sm font-medium leading-6 text-gray-900">Left Handle Image</label>
                            <input
                                type="file"
                                id="lefthandle"
                                name="lefthandle"
                                onChange={handleFileChange}
                                className="mt-2"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="left" className="block text-sm font-medium leading-6 text-gray-900">Right Handle Image</label>
                            <input
                                type="file"
                                id="righthandle"
                                name="righthandle"
                                onChange={handleFileChange}
                                className="mt-2"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="geartype" className="block text-sm font-medium leading-6 text-gray-900">Gear Type</label>
                            <input
                                type="text"
                                id="geartype"
                                name="geartype"
                                value={formData.geartype}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="mileage" className="block text-sm font-medium leading-6 text-gray-900">mileage</label>
                            <input
                                type="number"
                                id="mileage"
                                name="mileage"
                                value={formData.mileage}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="petrol" className="block text-sm font-medium leading-6 text-gray-900">Petrol</label>
                            <input
                                type="number"
                                id="petrol"
                                name="petrol"
                                value={formData.petrol}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <button type="submit" className="mt-4 block w-full bg-black text-white py-2 rounded-md">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
