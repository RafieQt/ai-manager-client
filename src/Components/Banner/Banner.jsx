import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="relative bg-gray-900 text-white overflow-hidden py-16 sm:py-24">
            {/* Background visual element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse "></div>
                <div className="absolute top-0 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 pb-3">
                    AI Model Inventory Manager
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
                    Streamline your machine learning research. Catalog, manage, and track
                    your neural networks and language models in one centralized,
                    real-time dashboard.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/all-models"
                        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-500 transition-colors"
                    >
                        Explore Models
                    </Link>
                    <Link to="/add-models" className="text-sm font-semibold leading-6 hover:text-blue-400 transition-colors">
                        Add New Model <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="mt-12 flex justify-center gap-8 grayscale opacity-50">
                    <span className="text-xs uppercase tracking-widest font-semibold">Neural Networks</span>
                    <span className="text-xs uppercase tracking-widest font-semibold">NLP Models</span>
                    <span className="text-xs uppercase tracking-widest font-semibold">Computer Vision</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;