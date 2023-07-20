export const name_validation = {
  name: "name",
  label: "Allottee Name",
  type: "text",
  id: "name",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message:"Name can't have number"
    },
  },
};

export const unitno_validation={
    name:'unit',
    label:'Unit No',
    type:'text',
    id:'unit',
    validation:{
        required:{
            value:true,
            message:'required'
        }
    }
}

export const projectname_validation={
    name:'project',
    label:'Project Name',
    type:'text',
    id:'project',
    validation:{
        required:{
            value:true,
            message:'required'
        }
    }
}

export const email_validation = {
  name: "email",
  label: "Email Id",
  type: "email",
  id: "email",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message:'not valid'
    },
  },
};

export const phone_validation = {
  name: "phone",
  label: "Phone No.",
  type: "text",
  id: "phone",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value: /^(\+91|\+91\-|0)?[789]\d{9}$/,
      message: "not valid",
    },
  },
};
