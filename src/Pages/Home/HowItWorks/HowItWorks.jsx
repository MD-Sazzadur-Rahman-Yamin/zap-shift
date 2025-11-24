import React from 'react';
import bookingIcon from '../../../assets/bookingIcon.png'

const HowItWorks = () => {
    return (
      <div className="my-12">
        <h3 className="font-extrabold text-3xl my-8">How it Works</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-white rounded-2xl">
            <img src={bookingIcon} alt="Icon" />
            <h6 className="font-bold text-xl mt-8 mb-4">Booking Pick & Drop</h6>
            <p className="font-medium text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl">
            <img src={bookingIcon} alt="Icon" />
            <h6 className="font-bold text-xl mt-8 mb-4">Booking Pick & Drop</h6>
            <p className="font-medium text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl">
            <img src={bookingIcon} alt="Icon" />
            <h6 className="font-bold text-xl mt-8 mb-4">Booking Pick & Drop</h6>
            <p className="font-medium text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl">
            <img src={bookingIcon} alt="Icon" />
            <h6 className="font-bold text-xl mt-8 mb-4">Booking Pick & Drop</h6>
            <p className="font-medium text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    );
};

export default HowItWorks;