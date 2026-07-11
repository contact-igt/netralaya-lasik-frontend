import { useFormik } from "formik";
import Button from "../Button";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzy7iVHer_zkbo7c3roIW1Dylrivhia8bL-ToTxUGM1pSEvdmaqfXgGntVMT4wzvMLdVg/exec";
const REGISTER_ENDPOINT = "/api/v1/antardrashti-netralaya/register";
const DEFAULT_SERVICE = "Lasik";

const getIpAddress = async () => {
  try {
    const ipResponse = await fetch("https://api.ipify.org?format=json");

    if (!ipResponse.ok) {
      throw new Error("Failed to fetch IP address");
    }

    const ipData = await ipResponse.json();
    return ipData?.ip || "unknown";
  } catch (error) {
    console.error("IP fetch failed:", error);
    return "unknown";
  }
};

const submitToBackend = async (payload) => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY;

  if (!baseUrl || !clientKey) {
    throw new Error("Backend environment variables are not configured");
  }

  const endpoint = new URL(REGISTER_ENDPOINT, baseUrl).toString();
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Client-Key": clientKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Backend submission failed with status ${response.status}`);
  }

  return response;
};

const submitToGoogleAppsScript = async (payload) => {
  const params = new URLSearchParams();

  Object.keys(payload).forEach((key) => {
    params.append(key, payload[key]);
  });

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(`Fallback submission failed with status ${response.status}`);
  }

  return response;
};

const Form = ({ handleTogglecontactForm }) => {
  const [loading, setisLoading] = useState(false);
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
    onSubmit: async (value, Formik) => {
      try {
        setisLoading(true);

        const ipAddress = await getIpAddress();
        const utmSource = localStorage.getItem("utm_source") || "direct";

        const backendPayload = {
          name: value.name,
          mobile_number: value.mobile,
          service: DEFAULT_SERVICE,
          ip_address: ipAddress,
          utm_source: utmSource,
        };

        const fallbackPayload = {
          Name: value.name,
          MobileNumber: value.mobile,
          IP_Address: ipAddress,
          utm_source: utmSource,
        };

        try {
          await submitToBackend(backendPayload);
        } catch (backendError) {
          console.error("Backend submission failed, falling back:", backendError);
          await submitToGoogleAppsScript(fallbackPayload);
        }

        Formik.resetForm();
        handleTogglecontactForm(false);
        if (window.location !== undefined) {
          window.location.href = "/thank-you";
        }
      } catch (err) {
        console.error("Error:", err);
        handleTogglecontactForm(false);
      } finally {
        setisLoading(false);
      }
    },
  });

  return (
    <div>
      <div className={styles.formTopic}>
        <h4>Book Your Consultation</h4>
        <p>Fill the form below and we will get back soon.</p>
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
            disabled={loading}
            btnTitle={loading ? "Submitting..." : "Submit"}
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
