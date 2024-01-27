"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const InvitationComponent = () => {

    const [data, setData] = useState([
        {
            id: 1,
            name: 'John Doe',
            imageName: 'john_doe.jpg', // Image file name in the public directory
            email: 'john.doe@example.com',
            orderNumber: '123456',
            plannedDate: '2022-01-15',
            status: 'Pending',
        },
        {
            id: 2,
            name: 'Jane Doe',
            imageName: 'jane_doe.jpg', // Image file name in the public directory
            email: 'jane.doe@example.com',
            orderNumber: '789012',
            plannedDate: '2022-01-20',
            status: 'Confirmed',
        },
        // Add more dummy data as needed
    ]);

    const handleAccept = (id: number) => {
        // Logic for accepting the invitation and updating the status to 'Accepted'
        toast.success('Accepted!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, status: 'Accepted' } : item
            )
        );
    };

    const handleReject = (id: number) => {
        // Logic for rejecting the invitation and updating the status to 'Rejected'
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, status: 'Rejected' } : item
            )
        );
        toast.error('Rejected!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="p-4">Image</th>
                        <th className="p-4">Name</th>
                        <th className="p-4">E-mail</th>
                        <th className="p-4">Order number</th>
                        <th className="p-4">Planned date</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="p-4">
                                <Image
                                    src={`/images/${item.imageName}`}
                                    alt={""}
                                    width={40}
                                    height={40}
                                />
                            </td>
                            <td className="p-4">{item.name}</td>
                            <td className="p-4">{item.email}</td>
                            <td className="p-4">{item.orderNumber}</td>
                            <td className="p-4">{item.plannedDate}</td>
                            <td className="p-4">{item.status}</td>
                            <td className="p-4 space-x-2">
                                <button
                                    onClick={() => handleAccept(item.id)}
                                    className="text-green-600 focus:outline-none bg-green-100 px-2 rounded-md"
                                >
                                    Accept
                                </button>
                                <button
                                    onClick={() => handleReject(item.id)}
                                    className="text-red-600 focus:outline-none bg-red-100 px-2 rounded-md"
                                >
                                    Reject
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvitationComponent;
