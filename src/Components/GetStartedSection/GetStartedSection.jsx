    import React from 'react';
import { Link } from 'react-router';

const GetStartedSection = () => {
  return (
    <section className="bg-blue-600 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Start Managing AI Models Today</h2>
        <p className="text-lg mb-8">
          Take control of your AI models and streamline your machine learning workflow. 
          Register or log in to get started with adding, viewing, and managing AI models easily.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/register"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Register
          </Link>
          <Link
            to="/signin"
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
