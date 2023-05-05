import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProfile,
  deleteProfile,
  getProfiles,
} from "../Redux/Profile/profile.action";
import EditProfile from "./EditProfile";

const AddProfile = () => {
  const dispatch = useDispatch();
  const { loading, profiles } = useSelector((store) => store.profilesManager);
  const [name, setName] = useState("");
  const [business_name, setBusiness_name] = useState("");
  const [pan_no, setPan_no] = useState("");
  const [gst_no, setGst_no] = useState("");
  const [address, setAddress] = useState("");
  const [incorporation_date, setIncorporation_date] = useState("");
  const [aadhaar_no, setAadhaar_no] = useState("");
  const [pincode, setPincode] = useState("");


  console.log(profiles);

  //Adding profile Data
  const handleAdd = () => {
    if (
      name === "" ||
      business_name === "" ||
      pan_no === "" ||
      gst_no === "" ||
      address === "" ||
      incorporation_date === "" ||
      aadhaar_no === "" ||
      pincode === ""
    ) {
      return alert("Please fill all Details");
    }

    const obj = {
      name,
      business_name,
      pan_no,
      gst_no,
      address,
      incorporation_date,
      aadhaar_no,
      pincode: +pincode,
    };
    console.log(obj);
    dispatch(createProfile(obj));
  };

  //Deleting Profile Data

  const handleDelete = (id) => {
    dispatch(deleteProfile(id));
  };

  // const handleclose = () => {
  //   setShowModal(false);
  // };

  // Reading Profile Data
  useEffect(() => {
    dispatch(getProfiles());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-gray-900 pt-5">
      <h1 className="font-bold font-sans text-lg text-white">All Business Profiles</h1>
      <div className="flex gap-2.5 mobile:flex-col tablet:flex-row">
        <div className="flex flex-col mx-10 my-10 mobile:w-[80%] tablet:w-[30%] h-full shadow-2xl rounded border-2 px-2.5 py-2.5 bg-gray-300">
          <h1 className="font-bold font-sans text-lg text-blue-800">Add Business Profile</h1>
          <input
            type="text"
            placeholder="Please Enter name"
            className="inputClass"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Please Enter Business Name"
            className="inputClass"
            value={business_name}
            onChange={(e) => setBusiness_name(e.target.value)}
          />
          <input
            type="text"
            placeholder="Please Enter Pan Number"
            className="inputClass"
            value={pan_no}
            onChange={(e) => setPan_no(e.target.value)}
          />
          <input
            type="text"
            placeholder="Please Enter GST Number"
            className="inputClass"
            value={gst_no}
            onChange={(e) => setGst_no(e.target.value)}
          />
          <input
            type="text"
            placeholder="Please Enter Address"
            className="inputClass"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="date"
            min="2023-05-05"
            placeholder="Please Enter Incorporation Date"
            className="inputClass"
            value={incorporation_date}
            onChange={(e) => setIncorporation_date(e.target.value)}
          />
          <input
            type="text"
            placeholder="Please Enter Aadhaar Number"
            className="inputClass"
            value={aadhaar_no}
            onChange={(e) => setAadhaar_no(e.target.value)}
          />
          <input
            type="number"
            placeholder="Please Enter Pincode"
            className="inputClass"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Submit
          </button>
        </div>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-5 mx-10 my-10 h-full">
          {profiles?.map((el) => (
            <div
              className="shadow-xl bg-gray-300 rounded px-5 py-5 font-bold font-sans text-lg text-slate-800"
              key={el._id}
            >
              <p className="profiledata">Name :- {el.name}</p>
              <p className="profiledata">Business Name :- {el.business_name}</p>
              <p className="profiledata">Pan Card :- {el.pan_no}</p>
              <p className="profiledata">GST No. :- {el.gst_no}</p>
              <p className="profiledata">Address :- {el.address}</p>
              <p className="profiledata">
                Incorporation_date :- {el.incorporation_date}
              </p>
              <p className="profiledata">Aadhaar No. :- {el.aadhaar_no}</p>
              <p className="profiledata">Pincode :- {el.pincode}</p>
              <div>
                <div className="flex flex-row justify-evenly">
                  <EditProfile {...el} />

                  <button
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => handleDelete(el._id)}
                  >
                    Delete Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
