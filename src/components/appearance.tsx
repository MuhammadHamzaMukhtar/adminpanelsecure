"use client"
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

const InstagramProfileBanner = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [backImage, setBackImage] = useState(null);

    const handleBackImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onDropProfileImage = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const onDropBackImage = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const { getRootProps: getProfileRootProps, getInputProps: getProfileInputProps, isDragActive: isProfileDragActive } = useDropzone({
        onDrop: onDropProfileImage,
    });

    const { getRootProps: getBackRootProps, getInputProps: getBackInputProps, isDragActive: isBackDragActive } = useDropzone({
        onDrop: onDropBackImage,
    });

    return (
        <div>
            <div>
                {backImage ? (
                    <Image
                        className="h-32 w-full object-cover lg:h-48"
                        src={backImage}
                        alt="Back Image"
                        width={500}
                        height={300}
                    />
                ) : (
                    <div className="h-32 w-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Select Back Image</span>
                    </div>
                )}
            </div>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                        <div
                            {...getProfileRootProps()}
                            className="relative cursor-pointer h-24 w-24 sm:h-32 sm:w-32 rounded-full ring-4 ring-blue-300 overflow-hidden"
                        >
                            <input {...getProfileInputProps()} />
                            {profileImage && (
                                <Image
                                    className="object-cover object-center w-full h-full"
                                    src={profileImage}
                                    alt="Profile Image"
                                    layout="fill"
                                />
                            )}
                        </div>
                    </div>
                    <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                            <h1 className="truncate text-2xl font-bold text-blue-300">Shehab coding</h1>
                        </div>
                        <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                <svg className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                                </svg>
                                <span>Message</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                <svg className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                                </svg>
                                <span>Call</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                    <h1 className="truncate text-2xl font-bold text-blue-300">Shehab coding</h1>
                </div>
            </div>
        </div>
    );
};

export default InstagramProfileBanner;
