import React, { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const DeleteConfirm = () => {
  const [showModal, setShowModal] = useState(false);

  const onDelete = () => {
    toast("Delete request sent", {
      style: {
        borderRadius: "10px",
      },
    });
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <label
        className="btn bg-red-500 w-full"
        htmlFor="modal-1"
        onClick={handleModalToggle}
      >
        Delete Account
      </label>
      <input className="modal-state" id="modal-1" type="checkbox" />

      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        {/* toast  */}
        <Toaster position="top-right" reverseOrder={false} />

        <div className="modal-content flex flex-col gap-5">
          <label
            htmlFor="modal-1"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl">Deleteting your Account</h2>
          <span>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </span>
          <div className="flex gap-3">
            <button className="btn bg-red-500 btn-block" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirm;
