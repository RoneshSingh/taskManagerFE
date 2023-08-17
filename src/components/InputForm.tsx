import React from "react";

const InputForm = () => {
  return (
    <div>
      <div className="form-control bg-fuchsia-400 text-white">
        <input
          type="text"
          placeholder="Task Name"
          className="input input-bordered"
        />
      </div>
      <div className="form-control bg-fuchsia-400 text-white">
        <textarea
          placeholder="task Description"
          className="resize-y
           input-bordered"
        />
      </div>
      <div className="form-control bg-fuchsia-400 text-white">
        <input
          type="date"
          placeholder="Date"
          className="input input-bordered"
        />
      </div>
    </div>
  );
};

export default InputForm;
