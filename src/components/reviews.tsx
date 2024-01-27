"use client"
import React, { useState } from 'react';

// Placeholder SVG for stars
const StarSvg = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Star filled with a customizable color */}
        <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            fill="#FF9C02"
            stroke="none"
        />
    </svg>
);

const ShopReviews = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [data, setData] = useState([
        {
            id: 1,
            name: 'John Doe',
            nationality: '🇺🇸', // Flag emoji for nationality
            judgment: 'Positive',
            judgmentStar: 4,
            date: '2022-01-10',
            markAsDone: 'Yes',
            selected: false,
        },
        {
            id: 2,
            name: 'Jane Doe',
            nationality: '🇨🇦',
            judgment: 'Negative',
            judgmentStar: 2,
            date: '2022-01-11',
            markAsDone: 'No',
            selected: false,
        },
        // Add more dummy data as needed
    ]);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setData(data.map((item) => ({ ...item, selected: !selectAll })));
    };

    const handleSelectSingle = (index: number) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData[index].selected = !newData[index].selected;
            return newData;
        });
    };

    const handlePopup = () => {
        // Logic for handling the popup on "Mark as Done" click
        console.log('Show Popup');
    };

    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="p-4">
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                                className="form-checkbox h-5 w-5 text-indigo-600"
                            />
                        </th>
                        <th className="p-4">Name</th>
                        <th className="p-4">Judgment</th>
                        <th className="p-4">Judgment Star</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Mark as Done</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className={item.selected ? 'bg-gray-50' : ''}>
                            <td className="p-4">
                                <input
                                    type="checkbox"
                                    checked={item.selected}
                                    onChange={() => handleSelectSingle(index)}
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                            </td>
                            <td className="p-4 flex items-center">
                                <span className="mr-2">{item.nationality}</span>
                                <span>{item.name}</span>
                            </td>
                            <td className="p-4">{item.judgment}</td>
                            <td className="p-4 flex items-center">
                                {Array.from({ length: item.judgmentStar }).map((_, starIndex) => (
                                    <StarSvg key={starIndex} />
                                ))}
                            </td>
                            <td className="p-4">{item.date}</td>
                            <td className="p-4">
                                <button onClick={handlePopup} className="text-indigo-600 focus:outline-none">
                                    {item.markAsDone}
                                </button>
                            </td>
                            <td className="p-4">
                                <button className="text-indigo-600 focus:outline-none">...</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShopReviews;
