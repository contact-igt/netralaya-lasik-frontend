import { useFormik } from "formik";
import Button from "../Button";
import styles from "./styles.module.css";
import * as Yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(/^[A-Za-z\s']+$/, "Enter valid name"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile must be 10 digits")
        .required("Mobile is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <div>
      <div className={styles.formTopic}>
        <h4>Book Your Consultation</h4>
        <p>Fill the form below and we will get back to you asap.</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.inputgrp}>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <small className="text-danger">{formik.errors.name}</small>
          )}
        </div>
        <div className={styles.inputgrp}>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            {...formik.getFieldProps("mobile")}
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <small className="text-danger">{formik.errors.mobile}</small>
          )}
        </div>

        <div className={styles.inputgrp}>
          <Button
            btnTitle="Submit"
            bgColor="#42474D"
            textColor="#fff"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
