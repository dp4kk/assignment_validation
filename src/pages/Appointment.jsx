import React from "react";
import Form from "../components/form";
import {useLocation} from 'react-router-dom'
const Appointment = () => {
  
  const location=useLocation()
  const propData=location.state

 

  return (
    <div>
      <div className="max-w-[800px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto my-12 text-center flex flex-col jutify-center items-center">
        <div className="flex justify-center divide-x-2 m-2">
          <div className="pr-3">
            <p className="text-4xl uppercase font-bold">gaurs</p>
            <p>your own world</p>
          </div>
          <div>
            <p className="text-4xl font-semibold uppercase px-3">
              zoom meeting appointment
            </p>
          </div>
        </div>
        <div className="max-w-fit bg-[#4AAC3F] text-white m-2">
          <p className="text-xl uppercase font-semibold">
            for queries related to allotment
          </p>
        </div>
        <div className="md:w-[800px] px-10">
          <Form tquery={propData}/>
        </div>
        <div className="text-left p-10  mx-auto">
          <p className=" font-semibold mb-2">Note:</p>
          <ul className="list-disc">
            <li className="text-sm ">
              In one month, every allottee will get one online appointment only.
            </li>
            <li className="text-sm">
              You are requested to adhere to the slot appointment timings and
              ensure your availability accordingly.
            </li>
            <li className="text-sm">
              There would be a grace of 15 minutes post your appointment timing
              and further to that it would be cancelled due to no show. In case
              if you(customer) are unable to attend the appointment, you will
              have to book a new appointment.
            </li>
            <li className="text-sm">
              In case due to any reason the scheduled appointment is cancelled
              or cannot be attended by our executive, we shall inform you 24
              working hours in advance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
