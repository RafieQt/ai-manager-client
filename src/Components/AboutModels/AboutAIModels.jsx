import React from 'react';

const AboutAIModels = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About AI Models</h2>
        <p className="text-gray-700 text-lg mb-6">
          AI models are algorithms designed to perform intelligent tasks by learning patterns from data.
          They are a fundamental part of machine learning and artificial intelligence, enabling
          computers to make decisions, recognize patterns, and solve complex problems.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          One common type of AI model is the <strong>neural network</strong>, which is inspired by
          the human brain and excels at processing large amounts of data. Neural networks power many
          real-world applications, such as chatbots that understand language, recommendation engines,
          and image recognition systems that detect objects in pictures.
        </p>
        <p className="text-gray-700 text-lg">
          By leveraging AI models, businesses and researchers can automate tasks, uncover insights
          from data, and build intelligent systems that improve user experience across industries.
        </p>
      </div>
    </section>
  );
};

export default AboutAIModels;
