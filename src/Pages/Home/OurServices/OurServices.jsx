import React from "react";
import serviceImg from "../../../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-primary-content px-12 lg:px-24 py-24 lg:py-32 rounded-4xl">
      <h4 className="font-extrabold text-4xl my-4 text-center text-base-100">
        Our Services
      </h4>
      <p className="font-medium text-base-100 text-center">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-base-100 px-6 py-8 rounded-3xl">
          <img className="mx-auto" src={serviceImg} alt="" />
          <h4 className="font-bold text-2xl text-base-300 text-center my-4">
            Express & Standard Delivery
          </h4>
          <p className="text-base-200 font-medium text-center">
            We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-base-100 lg:bg-primary px-6 py-8 rounded-3xl">
          <img className="mx-auto" src={serviceImg} alt="" />
          <h4 className="font-bold text-2xl text-base-300 text-center my-4">
            Nationwide Delivery
          </h4>
          <p className="text-base-200 font-medium text-center">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48-72 hours.
          </p>
        </div>
        <div className="bg-base-100 px-6 py-8 rounded-3xl">
          <img className="mx-auto" src={serviceImg} alt="" />
          <h4 className="font-bold text-2xl text-base-300 text-center my-4">
            Fulfillment Solution
          </h4>
          <p className="text-base-200 font-medium text-center">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="bg-base-100 px-6 py-8 rounded-3xl">
          <img className="mx-auto" src={serviceImg} alt="" />
          <h4 className="font-bold text-2xl text-base-300 text-center my-4">
            Cash on Home Delivery
          </h4>
          <p className="text-base-200 font-medium text-center">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-base-100 px-6 py-8 rounded-3xl">
          <img className="mx-auto" src={serviceImg} alt="" />
          <h4 className="font-bold text-2xl text-base-300 text-center my-4">
            Corporate Service / Contract In Logistics
          </h4>
          <p className="text-base-200 font-medium text-center">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="bg-base-100 px-6 py-8 rounded-3xl">
          <img className="mx-auto" src={serviceImg} alt="" />
          <h4 className="font-bold text-2xl text-base-300 text-center my-4">
            Parcel Return
          </h4>
          <p className="text-base-200 font-medium text-center">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
