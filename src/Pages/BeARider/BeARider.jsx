import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const BeARider = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm();

  const wareHouses = useLoaderData();
  const regionsDuplicate = wareHouses.map((h) => h.region);
  const regions = [...new Set(regionsDuplicate)];
  const districtByRegion = (region) => {
    const regionDistricts = wareHouses.filter((h) => h.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };
  const RiderRegion = useWatch({ control, name: "region" });
const handleBeARider = (data) => {
  axiosSecure.post("/riders", data).then((res) => {
    if (res.data.insertedId) {
      toast("Your application has been submitted. We will reach you in 7 days");
    }
  });
};

  return (
    <div className="page-body">
      <h2 className="page-title">Be A Rider</h2>
      <form onSubmit={handleSubmit(handleBeARider)} className="mt-8">
        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* sender info */}
          <div>
            <h4 className="font-extrabold text-lg text-base-300 my-8">
              Rider Details
            </h4>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your Name"
                {...register("name")}
                defaultValue={user?.displayName}
              />
              <label className="label">Your Email</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your Email"
                {...register("email")}
                defaultValue={user?.email}
              />
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Region</legend>
                <select
                  defaultValue="Pick a region"
                  className="select"
                  {...register("region")}
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
                <legend className="fieldset-legend">District</legend>
                <select
                  defaultValue="Pick a district"
                  className="select"
                  {...register("district")}
                >
                  <option disabled={true}>Pick a district</option>
                  {districtByRegion(RiderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <label className="label">Your Address</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Address"
                {...register("address")}
              />
              <label className="label">Phone No</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Phone No"
                {...register("phoneNo")}
              />
            </fieldset>
          </div>
          {/* reeveiver info */}
          <div>
            <h4 className="font-extrabold text-lg text-base-300 my-8">
              More Details
            </h4>
            <fieldset className="fieldset">
              <label className="label">Driving Licence</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Driving Licence"
                {...register("drivingLicence")}
              />
              <label className="label">NID</label>
              <input
                type="text"
                className="input w-full"
                placeholder="NID"
                {...register("nid")}
              />
              <label className="label">Bike</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Bike"
                {...register("bike")}
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          value="Apply as a Rider"
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default BeARider;
