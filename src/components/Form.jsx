import React, { useState } from "react";
import { FormProvider, useForm ,Controller} from "react-hook-form";
import Input from "./Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdError } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import {
  name_validation,
  unitno_validation,
  projectname_validation,
  phone_validation,
  email_validation,
} from "./validations";
import {useNavigate} from 'react-router-dom'

const Form = ({ tquery }) => {
  const [dateSelect,setDateSelect]=useState(false)
  
  const navigate=useNavigate()

  const methods = useForm();
  
 

  const findInputErrors = (errors, name) => {
    const filtered = Object.keys(errors)
      .filter((key) => key.includes(name))
      .reduce((curr, key) => {
        return Object.assign(curr, { error: errors[key] });
      }, {});
    return filtered;
  };

  const IsFormInvalid = (err) => {
    if (Object.keys(err).length > 0) {
      return true;
    }
    return false;
  };

  

  const dateError = findInputErrors(methods.formState.errors, "date-select");
  const dateInvalid = IsFormInvalid(dateError);
  
  const timeError =findInputErrors(methods.formState.errors, "time")
  const timeInvalid = IsFormInvalid(timeError)
 

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    navigate('/confirm')
  });


  

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off">
        <div className="grid gap-5  md:grid-cols-2">
          <Input {...name_validation} />
          <div className="flex flex-col">
            <label htmlFor="qtype" className="text-left">
              Query Type
            </label>
            <input
              {...methods.register("query-type")}
              className="p-3 font-medium rounded-md w-full border border-slate-300"
              value={tquery}
              readOnly
            />
          </div>
          <Input {...unitno_validation} />
          <Input {...projectname_validation} />
          <Input {...phone_validation} />
          <Input {...email_validation} />
          <div className="flex flex-col col-span-2">
            <label className="text-left" htmlFor="query">
              Query
            </label>
            <textarea
              rows={6}
              className="p-3 font-medium rounded-md w-full border border-slate-300"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="date" className="text-left">
                Date
              </label>
              <AnimatePresence mode="wait" initial={false}>
                {dateInvalid && (
                  <InputError
                    message={dateError.error.message}
                    key={dateError.error.message}
                  />
                )}
              </AnimatePresence>
            </div>
            <Controller
              name="date-select"
              control={methods.control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  placeholderText="select date"
                  selected={field.value}
                  onChange={(date) => {
                    field.onChange(date);
                    setDateSelect(true);
                  }}
                  className="p-3 font-medium rounded-md w-full border border-slate-300"
                  minDate={new Date()}
                  filterDate={(date) => {
                    return date.getDay() !== 0 && date.getDay() !== 6;
                  }}
                  maxDate={new Date().setDate(new Date().getDate() + 30)}
                />
              )}
            />
          </div>
          <div className="flex flex-col">
                  <div className="flex justify-between">
                  <label className="text-left" htmlFor="time">
                  Time Slot
                  </label>
                  <AnimatePresence mode="wait" initial={false}>
                    {timeInvalid && (
                      <InputError
                      message={timeError.error.message}
                      key={timeError.error.message}/>
                    )}
                  </AnimatePresence>
                  </div>
            {dateSelect ? (
              <select
                className="p-3 font-medium rounded-md w-full border border-slate-300"
                {...methods.register("time", {
                  required: { value: true, message: "required" },
                })}
                defaultValue={""}
              >
                <option value="" disabled={true} >
                  Select time slot
                </option>
                <option value="10AM-11AM">10 AM - 11 AM</option>
                <option value="11AM-12PM">11 AM - 12 PM</option>
                <option value="12PM-01PM">12 PM - 01 PM</option>
                <option value="02PM-03PM">02 PM - 03 PM</option>
                <option value="03PM-04PM">03 PM - 04 PM</option>
                <option value="04PM-05PM">04 PM - 05 PM</option>
              </select>
            ) : (
              <select className="p-3 font-medium rounded-md w-full border border-slate-300" defaultValue={""}>
                <option value="" disabled >
                  --
                </option>
              </select>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="file" className="text-left">
              Document Attachment
            </label>
            <input
              type="file"
              className="p-3 font-medium rounded-md w-full border border-slate-300"
            />
          </div>
        </div>
        <button
          className="uppercase  p-2 text-white bg-[#1b3273] hover:bg-[#8dc53e] md:w-[230px] my-6 flex justify-center"
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      <MdError />
      {message}
    </motion.p>
  );
};




 
