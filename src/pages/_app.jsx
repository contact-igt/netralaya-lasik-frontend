import Footer from "@/common/Footer";
import Form from "@/common/Form";
import Header from "@/common/Header";
import { Popup } from "@/common/Popup";
import useUTMSource from "@/hooks/useUTMSource";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const handleTogglecontactForm = () => {
    setOpen(!open);
  };
  useUTMSource();
  return (
    <>

      <Header handleTogglecontactForm={handleTogglecontactForm} />

      <Component {...pageProps} handleTogglecontactForm={handleTogglecontactForm} />
      <Popup open={open} onClose={() => handleTogglecontactForm()}>
        <Form handleTogglecontactForm={handleTogglecontactForm}
        />
      </Popup>
      <Footer />

    </>
  )
}
