
import React from 'react';
import Image from 'next/image';

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

const ProductReviews = () => {
    const data = [
        {
            id: 1,
            product: 'Product 1',
            orderNumber: '123456',
            productCode: 'ABC123',
            judgement1: 'Positive',
            judgement2: 4,
            language: 'English',
            selected: false,
        },
        {
            id: 2,
            product: 'Product 2',
            orderNumber: '789012',
            productCode: 'XYZ789',
            judgement1: 'Negative',
            judgement2: 2,
            language: 'Spanish',
            selected: false,
        },
        // Add more dummy data as needed
    ];



    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="p-4"></th>
                        <th className="p-4">Product</th>
                        <th className="p-4">Order number</th>
                        <th className="p-4">Product code</th>
                        <th className="p-4">Judgement 1</th>
                        <th className="p-4">Judgement 2</th>
                        <th className="p-4">Language</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className={item.selected ? 'bg-gray-50' : ''}>
                            <td className="p-4">
                                {/* Dummy Image URL (replace with actual image URLs) */}
                                <Image src="" alt={""} width={50} height={50} />
                            </td>
                            <td className="p-4">{item.product}</td>
                            <td className="p-4">{item.orderNumber}</td>
                            <td className="p-4">{item.productCode}</td>
                            <td className="p-4">{item.judgement1}</td>
                            <td className="p-4 flex items-center">
                                {Array.from({ length: item.judgement2 }).map((_, starIndex) => (
                                    <StarSvg key={starIndex} />
                                ))}
                            </td>
                            <td className="p-4">{item.language}</td>
                            <td className="p-4">
                                <button className="text-indigo-600 focus:outline-none">
                                    Mark as Done
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductReviews;
