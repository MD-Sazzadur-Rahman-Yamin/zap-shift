import React from 'react';
import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png"; 

const Facility = () => {
    return (
      <div className="my-12 flex flex-col gap-6">
        <div className="flex justify-between items-center flex-col sm:flex-row p-8 bg-base-100 rounded-2xl">
          <div className="pr-0 sm:pr-12 border-r-0 sm:border-r-2 border-dashed">
            <img src={liveTracking} alt="img" />
          </div>
          <div className="flex-1 mt-6 sm:mt-0 ml-0 sm:ml-12">
            <h4 className="font-extrabold text-2xl text-base-300">
              Live Parcel Tracking
            </h4>
            <p className="font-medium mt-4">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col sm:flex-row p-8 bg-base-100 rounded-2xl">
          <div className="pr-0 sm:pr-12 border-r-0 sm:border-r-2 border-dashed">
            <img src={safeDelivery} alt="img" />
          </div>
          <div className="flex-1 mt-6 sm:mt-0 ml-0 sm:ml-12">
            <h4 className="font-extrabold text-2xl text-base-300">
              100% Safe Delivery
            </h4>
            <p className="font-medium mt-4">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col sm:flex-row p-8 bg-base-100 rounded-2xl">
          <div className="pr-0 sm:pr-12 border-r-0 sm:border-r-2 border-dashed">
            <img src={safeDelivery} alt="img" />
          </div>
          <div className="flex-1 mt-6 sm:mt-0 ml-0 sm:ml-12">
            <h4 className="font-extrabold text-2xl text-base-300">
              24/7 Call Center Support
            </h4>
            <p className="font-medium mt-4">
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Facility;