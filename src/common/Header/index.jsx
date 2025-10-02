import Image from "next/image";
import styles from "./styles.module.css";
import Button from "../Button";

const Header = ({handleTogglecontactForm}) => {
  return (
    <header style={{ backgroundColor: "#fff9eb" }}>
      <div className="container">
        <div
          className={`${styles.headerwrapper} d-flex justify-content-between align-items-center py-2`}
        >
          <div className={styles.headerImg}>
            <Image src={"/assets/logo2.png"} width={140} height={120} />
          </div>

          <div
            className={`${styles.headerCta} d-flex gap-3 align-items-center`}
          >
            <div className={styles.callCta}>
              <Button
                bgColor={"#fff"}
                btnIcon={"phone"}
                textColor={"#42474D"}
                btnTitle2={"+91 9990110596"}
                iconColor={"#ae8624"}
              />
            </div>

            <div className={styles.enquiryCta}>
              <Button
              onClick={handleTogglecontactForm}
                bgColor={"#a98927"}
                btnIcon={"arrow-right"}
                textColor={"#ffff"}
                btnTitle={"Enquiry Now"}
                iconColor={"#ffff"}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
