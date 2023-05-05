import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../Redux/Profile/profile.action";

const EditProfile = ({
  name,
  business_name,
  pan_no,
  gst_no,
  address,
  incorporation_date,
  aadhaar_no,
  pincode,
  _id,
}) => {
  const [new_name, setNewName] = useState(name);
  const [new_business_name, setNewBusiness_name] = useState(business_name);
  const [new_pan_no, setNewPan_no] = useState(pan_no);
  const [new_gst_no, setNewGst_no] = useState(gst_no);
  const [new_address, setNewAddress] = useState(address);
  const [new_incorporation_date, setNewIncorporation_date] = useState(incorporation_date);
  const [new_aadhaar_no, setNewAadhaar_no] = useState(aadhaar_no);
  const [new_pincode, setNewPincode] = useState(pincode);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  // if (!visible) return null;
  const handleEdit = (_id) => {
    console.log(_id);

    if (
      new_name === "" ||
      new_business_name === "" ||
      new_pan_no === "" ||
      new_gst_no === "" ||
      new_address === "" ||
      new_incorporation_date === "" ||
      new_aadhaar_no === "" ||
      new_pincode === ""
    ) {
      return alert("Please fill all Details..");
    }
    let obj = {
      name: new_name,
      business_name: new_business_name,
      pan_no: new_pan_no,
      gst_no: new_gst_no,
      address: new_address,
      incorporation_date: new_incorporation_date,
      aadhaar_no: new_aadhaar_no,
      pincode: +new_pincode,
    };

    dispatch(updateProfile(_id, obj));
  };
  return (
    <>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => {
          
          setShowModal(true);
        }}
      >
        Edit Profile
      </button>
      {showModal ? (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-2 rounded w-[25%]">
            {/* Modal Body */}
            <p className="text-center text-blue-800 pt-2.5">Edit Profile</p>
            <div className="p-6 space-y-6">
              <input
                type="text"
                placeholder="Please Enter name"
                className="inputClass"
                value={new_name}
                onChange={(e) => setNewName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Please Enter Business Name"
                className="inputClass"
                value={new_business_name}
                onChange={(e) => setNewBusiness_name(e.target.value)}
              />
              <input
                type="text"
                placeholder="Please Enter Pan Number"
                className="inputClass"
                value={new_pan_no}
                onChange={(e) => setNewPan_no(e.target.value)}
              />
              <input
                type="text"
                placeholder="Please Enter GST Number"
                className="inputClass"
                value={new_gst_no}
                onChange={(e) => setNewGst_no(e.target.value)}
              />
              <input
                type="text"
                placeholder="Please Enter Address"
                className="inputClass"
                value={new_address}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              <input
                type="date"
                placeholder="Please Enter Incorporation Date"
                className="inputClass"
                min="2023-05-05"
                value={new_incorporation_date}
                onChange={(e) => setNewIncorporation_date(e.target.value)}
              />
              <input
                type="text"
                placeholder="Please Enter Aadhaar Number"
                className="inputClass"
                value={new_aadhaar_no}
                onChange={(e) => setNewAadhaar_no(e.target.value)}
              />
              <input
                type="number"
                placeholder="Please Enter Pincode"
                className="inputClass"
                value={new_pincode}
                onChange={(e) => setNewPincode(e.target.value)}
              />
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={() => {
                  handleEdit(_id);
                }}
                data-modal-hide="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => setShowModal(false)}
                data-modal-hide="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EditProfile;
