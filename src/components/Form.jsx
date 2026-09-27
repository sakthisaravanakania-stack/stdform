import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Form = ({ initialData = {} }) => {

  const formik = useFormik({
    initialValues: {
      fullname: initialData?.fullname || "",
      dob: initialData?.dob || "",
      fathername: initialData?.fathername || "",
      mothername: initialData?.mothername || "",
      gender: initialData?.gender || "",
      bloodgroup: initialData?.bloodgroup || "",

      email: initialData?.email || "",
      phonenumber: initialData?.phonenumber || "",
      alternativephonenumber:initialData?.alternativephonenumber || "",

      address: initialData?.address || "",
      city: initialData?.city || "",
      state: initialData?.state || "",
      pincode: initialData?.pincode || "",
    },

    validationSchema: yup.object({
      fullname: yup.string()
        .required("FullName is required"),

      dob: yup.string()
        .required("Date of Birth is required"),
      fathername: yup.string()
        .required("Father name is requried"),
      mothername: yup.string()
        .required("Mother name is requried"),
       gender: yup.string()
        .required("Gender is requried"),
      bloodgroup: yup.string()
        .required("Bloodgroup is requried"),
      email: yup.string()
        .required("Email is requried"),
      phonenumber: yup.string()
        .required("Minimum ten numbers requried")
        .min(10,"Minimum ten numbers requried"),
      alternativephonenumber: yup.string()
      .required("Minimum ten numbers requried")
      .min(10,"Minimum ten numbers requried"),
      address: yup.string()
        .required("Maxinum 100 letters are available")
      .max(100,"Maximum 100 letters "),
      city: yup.string()
        .required("City is requried"),
      state: yup.string()
        .required("State is requried"),
      pincode: yup.string()
        .required("Pincode is requried")
      .min(6,"Minimun six numbers requried"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="form">

      <form onSubmit={formik.handleSubmit}>

        <div className="name">

          <h4>
            FullName:
            <input type="text" placeholder="Enter your name" name="fullname"
            value={formik.values.fullname} onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>

           {formik.touched.fullname &&
            formik.errors.fullname && (
              <p className="error">
                {formik.errors.fullname}
              </p>
          )}

        </div>

        <div className="dob">
          <h4>Date of Birth:
            <input type="date" name="dob" value={formik.values.dob} onChange={formik.handleChange} onBlur={formik.handleBlur}/></h4>

          {formik.touched.dob &&formik.errors.dob && (
              <p className="error"> {formik.errors.dob}</p>
          )
          }
        </div>

        <div className="fathername">
          <h4>FatherName: <input type="text" placeholder="Enter your fathername"
            name="fathername" value={formik.values.fathername} onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.fathername && formik.errors.fathername &&(
              <p className="error">{formik.errors.fathername}</p>
            )
          }
        </div>

        <div className="mothername">
          <h4>Mother Name :<input type="text" placeholder="Enter your mothername" name="mothername" value={formik.values.mothername}
            onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.mothername && formik.errors.mothername && (
              <p className="error">{formik.errors.mothername }</p>
            )
          }
        </div>

        <div className="gender">
          <h4>Gender: <input type="text" placeholder="Gender" name="gender" value={formik.values.gender}
            onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.gender && formik.errors.gender && (
              <p className="error">{formik.errors.gender }</p>
            )
          }
        </div>


        <div className="bloodgroup">
          <h4>Bloodgroup: <input type="text" placeholder="Enter your bloodgroup" name="bloodgroup" value={formik.values.bloodgroup}
            onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.bloodgroup && formik.errors.bloodgroup && (
              <p className="error">{formik.errors.bloodgroup}</p>
            )
          }
        </div>

        
        <div className="email">
          <h4>Email: <input type="email" placeholder="Enter your Email" name="email" value={formik.values.email}
            onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.email && formik.errors.email && (
              <p className="error">{formik.errors.email}</p>
            )
          }
        </div>

        <div className="phonenumber">
          <h4>PhoneNumber: <input type="text" placeholder="Enter your PhoneNumber"  name="phonenumber" value={formik.values.phonenumber}
            onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.phonenumber && formik.errors.phonenumber && (
              <p className="error">{formik.errors.phonenumber}</p>
            )
          }
        </div>

        
        <div className="alternativephonenumber">
          <h4>AlternativePhonenumber: <input type="text" placeholder="Enter your AlternativePhonenumber" name="alternativephonenumber" value={formik.values.alternativephonenumber}
            onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.alternativephonenumber && formik.errors.alternativephonenumber && (
              <p className="error">{formik.errors.alternativephonenumber}</p>
            )
          }
        </div>

        <div className="address">
          <h4>Address: <input type="text" placeholder="Enter your address"  name="address"  value={formik.values.address}
            onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.address && formik.errors.address && (
              <p className="error">{formik.errors.address}</p>
            )
          }
        </div>


        <div className="city">
          <h4>City: <input type="text" placeholder="Enter your city" name="city"  value={formik.values.city}
            onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.city && formik.errors.city && (
              <p className="error">{formik.errors.city}</p>
            )
          }
        </div>

        <div className="state">
          <h4>State: <input type="text" placeholder="Enter your state" name="state" value={formik.values.state}
            onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.state && formik.errors.state && (
              <p className="error">{formik.errors.state}</p>
            )
          }
        </div>

        <div className="pincode">
          <h4>Pincode: <input type="text" placeholder="Enter your pincode" name="pincode" value={formik.values.pincode}
            onChange={formik.handleChange} onBlur={formik.handleBlur} /></h4>
          {
            formik.touched.pincode && formik.errors.pincode && (
              <p className="error">{formik.errors.pincode}</p>
            )
          }
        </div>

        <div className="btn">
        <button type="submit">
          Submit
          </button>
          </div>

      </form>

    </div>
  );
};

export default Form;