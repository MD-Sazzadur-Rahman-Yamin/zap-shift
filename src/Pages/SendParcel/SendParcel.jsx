import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const SendParcel = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm();
  const wareHouses = useLoaderData();
  const regionsDuplicate = wareHouses.map((h) => h.region);
  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  const districtByRegion = (region) => {
    const regionDistricts = wareHouses.filter((h) => h.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeignt = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeignt * 40
          : extraWeignt * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;
    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} BDT`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Conform and Continue Payment!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(data);
        //save the info to the db            // res
        axiosSecure.post("/parcels", data).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Parcel has created. Pleace Pay.",
              showConfirmButton: false,
              timer: 2500,
            });
            navigate("/dashboard/my-parcels");
          }
        });
      }
    });
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
                defaultValue={user?.displayName}
              />
              <label className="label">Sender Email</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Sender Email"
                {...register("senderEmail")}
                defaultValue={user?.email}
              />
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Sender Region</legend>
                <select
                  defaultValue="Pick a region"
                  className="select"
                  {...register("senderRegion")}
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Sender District</legend>
                <select
                  defaultValue="Pick a district"
                  className="select"
                  {...register("senderDistrict")}
                >
                  <option disabled={true}>Pick a district</option>
                  {districtByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <label className="label">Sender Address</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Address"
                {...register("senderAddress")}
              />
              <label className="label">Sender Phone No</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Sender Phone No"
                {...register("senderPhoneNo")}
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
              <label className="label">Receiver Email</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Receiver Email"
                {...register("receiverEmail")}
              />
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Receiver Region</legend>
                <select
                  defaultValue="Pick a region"
                  className="select"
                  {...register("receiverRegion")}
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  defaultValue="Pick a district"
                  className="select"
                  {...register("receiverDistrict")}
                >
                  <option disabled={true}>Pick a district</option>
                  {districtByRegion(receiverRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <label className="label">Receiver Address</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Address"
                {...register("receiverAddress")}
              />
              <label className="label">Receiver Phone No</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Receiver Phone No"
                {...register("receiverPhoneNo")}
              />
              <label className="label">Your District</label>
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
