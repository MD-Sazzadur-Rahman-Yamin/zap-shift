import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="page-body">
      <h2 className="page-title">Send A Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-8">
        {/* parcel type */}
        <div className="flex gap-4 items-center">
          <label className="label">
            <input
              type="radio"
              value="document"
              className="radio"
              defaultChecked
              {...register("parcelType")}
            />
            <span> Document</span>
          </label>
          <label className="label">
            <input
              type="radio"
              value="non-document"
              className="radio"
              {...register("parcelType")}
            />
            <span> Non-Document</span>
          </label>
        </div>
        {/* parcel info: name,weignt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Parcel Name"
              {...register("parcelName")}
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Parcel Weight (KG)"
              {...register("parcelWeight")}
            />
          </fieldset>
        </div>
        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* sender info */}
          <div>
            <h4 className="font-extrabold text-lg text-base-300 my-8">
              Sender Details
            </h4>
            <fieldset className="fieldset">
              <label className="label">Sender Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Sender Name"
                {...register("senderName")}
              />
              <label className="label">Address</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Address"
                {...register("address")}
              />
              <label className="label">Sender Phone No</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Sender Phone No"
                {...register("senderPhoneNo")}
              />
              <label className="label">Your District</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your District"
                {...register("yourDistrict")}
              />
              <label className="label">Pickup Instruction</label>
              <textarea
                type="text"
                className="textarea w-full"
                placeholder="Pickup Instruction"
                {...register("pickupInstruction")}
              />
            </fieldset>
          </div>
          {/* reeveiver info */}
          <div>
            <h4 className="font-extrabold text-lg text-base-300 my-8">
              Receiver Details
            </h4>
            <fieldset className="fieldset">
              <label className="label">Receiver Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Receiver Name"
                {...register("receiverName")}
              />
              <label className="label">Address</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Address"
                {...register("address")}
              />
              <label className="label">Receiver Phone No</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Receiver Phone No"
                {...register("receiverPhoneNo")}
              />
              <label className="label">Your District</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your District"
                {...register("yourDistrict")}
              />
              <label className="label">Pickup Instruction</label>
              <textarea
                type="text"
                className="textarea w-full"
                placeholder="Pickup Instruction"
                {...register("pickupInstruction")}
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          value="Proceed to Confirm Booking"
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default SendParcel;
