import React from 'react'
import {useFormContext} from 'react-hook-form'
import {AnimatePresence, motion} from 'framer-motion'
import {MdError} from 'react-icons/md'
const Input = ({name,label,type,id,validation}) => {

    const {register,formState:{errors}}=useFormContext()

    const findInputErrors=(errors,name)=>{
        const filtered=Object.keys(errors)
        .filter((key)=>key.includes(name))
        .reduce((curr,key)=>{
            return Object.assign(curr,{error:errors[key]})
        },{})
        return filtered
    }

    const IsFormInvalid=(err)=>{
            if(Object.keys(err).length>0) {
                return true
            }
            return false
    }
    const inputErrors = findInputErrors(errors,name)
    const Invalid = IsFormInvalid(inputErrors)

  return (
    <div className="flex flex-col w-full ">
      <div className="flex justify-between">
        <label htmlFor={id}>{label}</label>
        <AnimatePresence mode="wait" initial={false}>
          {Invalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <input className='p-3 font-medium rounded-md w-full border border-slate-300 '  id={id} type={type} {...register(name, validation)}/>
    </div>
  );
}

export default Input

const InputError =({message})=>{
    return(
        <motion.p
        className='flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md'
        initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:10}}
        transition={{duration:0.2}}
        >
        <MdError/>
            {message}
        </motion.p>
    )
}


