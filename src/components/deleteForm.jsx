import React, { useState } from "react";
import DeleteConfirm from "../modal/delete_confirmation";

const DeleteForm = () => {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6 mt-32 px-6 md:px-4 lg:px-0">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Delete Account</h1>
        <p className="text-sm">
          On clicking delete button your account will be deleted
        </p>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label className="form-label">Name</label>
          <input
            placeholder="Enter your name"
            type="text"
            className="input max-w-full"
          />
        </div>
        <div className="form-field">
          <label className="form-label">Phone No.</label>
          <div className="form-control">
            <input
              placeholder="Enter phone number"
              type="tel"
              className="input max-w-full"
            />
          </div>
        </div>
        <div className="form-field pt-5">
          <div className="form-control justify-between">
            <DeleteConfirm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteForm;
