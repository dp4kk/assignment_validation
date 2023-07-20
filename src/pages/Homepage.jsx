import React from 'react'
import {Link} from 'react-router-dom'
const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="text-center mt-10">
        <p className="text-7xl font-bold ">GAURS</p>
        <p className="text-xl font-bold">your own world</p>
      </div>
      <div className="max-w-[768px] mt-20 text-center p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="text-2xl p-5 font-semibold">
          <p>
            For Your Queries related to Customer Care, please click below to
            take Online Appointment.
          </p>
        </div>
        <div className="flex mt-5 gap-2 flex-wrap justify-center">
          <button className="bg-[#0d6efd] text-white px-2 py-3 rounded-md hover:bg-[#8DC53E]">
            <Link to="/appointment" state={"Allotment"}>
              Allotment
            </Link>
          </button>
          <button className="bg-[#0d6efd] text-white px-2 py-3 rounded-md hover:bg-[#8DC53E]">
            <Link to="/appointment" state={"Demand/Payment"}>  
            Demand/Payment
            </Link>
          </button>
          <button className="bg-[#0d6efd] text-white px-2 py-3 rounded-md hover:bg-[#8DC53E]">
            <Link to="/appointment" state={"No Dues Certificate"}>
            No Dues Certificate
            </Link>
          </button>
          <button className="bg-[#0d6efd] text-white px-2 py-3 rounded-md hover:bg-[#8DC53E]">
            <Link to="/appointment" state={"Key Handover"}>
            Key Handover
            </Link>
          </button>
          <button className="bg-[#0d6efd] text-white px-2 py-3 rounded-md hover:bg-[#8DC53E]">
            <Link to="/appointment" state={"Registry"}>
            Registry
            </Link>
          </button>
          <button className="bg-[#0d6efd] text-white px-2 py-3 rounded-md hover:bg-[#8DC53E]">
            <Link to="/appointment" state={"Cancellation And Refund"}>
            Cancellation And Refund
            </Link>
          </button>
          <button className="bg-[#0d6efd] text-white px-2 py-3 rounded-md hover:bg-[#8DC53E]">
            <Link to="/appointment" state={"Assured Rental"}>
            Assured Rental
            </Link>
          </button>
          <button className="bg-[#0d6efd] text-white px-2 py-3 rounded-md hover:bg-[#8DC53E]">
            <Link to="/appointment" state={"Lease Guarantee"}>
            Lease Guarantee
            </Link>
          </button>
          <button className="bg-[#0d6efd] text-white px-2 py-3 rounded-md hover:bg-[#8DC53E]">
            <Link to="/appointment" state={"Maintanence"}>
            Maintanence
            </Link>
          </button>
          <button className="bg-[#0d6efd] text-white px-2 py-3 rounded-md hover:bg-[#8DC53E]">
            <Link to="/appointment" state={"Others"}>
            Others
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage