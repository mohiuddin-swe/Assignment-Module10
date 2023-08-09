import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to the World of Next.js</h1>
        <p className="text-lg text-gray-700 mb-6">This is an elegant and simple starter project to kickstart development journey.</p>
        <p className="text-base text-gray-600">For a detailed understanding of the file and folder structure, go to the note.txt file in the root directory.</p>
      </div>
    </div>
  );
};

export default Page;
