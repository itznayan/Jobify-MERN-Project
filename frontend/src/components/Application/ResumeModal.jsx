import React from "react";

const ResumeModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-lg w-full">
        <button
          className="absolute top-2 right-2 scale-[3] px-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt="resume"
            className="max-h-96 w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
