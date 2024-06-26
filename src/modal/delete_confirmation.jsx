import React from "react";

const DeleteConfirm = () => {
  return (
    <>
      <label className="btn bg-red-500 w-full" htmlFor="modal-1">
        Delete Account
      </label>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
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
            <button className="btn btn-error btn-block">Delete</button>

            <button className="btn btn-block">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirm;
