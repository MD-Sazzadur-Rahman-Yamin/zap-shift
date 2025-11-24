import React from 'react';
import { BsQuote } from 'react-icons/bs';

const ReviewsCard = ({ review }) => {
    const { userName, user_photoURL, review:userReview } = review;
  return (
    <div className="flex justify-center p-4 rounded-4xl">
      <div className="w-full max-w-md bg-white rounded-xl p-6 border border-gray-200">
        {/* Quote and Text Area */}
        <div className="relative mb-6">
          {/* Quote Icon */}
          <BsQuote className="absolute -top-4 -left-3 text-7xl text-base-300 opacity-70" />

          <p className="text-gray-700 leading-relaxed z-10 relative pt-2">
            {userReview}
          </p>
        </div>

        {/* Separator Line (Dotted/Dashed as in the original image) */}
        <hr className="my-4 border-dashed border-base-300" />

        {/* Author Section */}
        <div className="flex items-center">
          {/* Profile Circle - Teal color from the original image */}
          <div className="w-10 h-10 rounded-full bg-teal-700 mr-4">
            <img className="rounded-full" src={user_photoURL} alt={userName} />
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-900">{userName}</p>
            <p className="text-sm border-base-300">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;