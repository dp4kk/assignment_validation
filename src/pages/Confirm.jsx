import React from 'react'
import {Link} from 'react-router-dom'
const Confirm = () => {
  return (
    <div className="w-full min-h-screen bg-[#eef2de] flex justify-center items-center">
      <div className="w-3/4 h-[200px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="text-center flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">Gaurs</p>
          <p className="text-[8px] font-bold">your own world</p>
          <p className="text-xl font-bold my-2">
            Your request is processed and the appointment is scheduled.
          </p>
          <p className="text-md">
            The link has been shared with you over ID and on your Phone via SMS
          </p>
          <button className="py-2 px-3 my-4 bg-blue-950 hover:bg-[#212121] text-white w-[200px]">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirm