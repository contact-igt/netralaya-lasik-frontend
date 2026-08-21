import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import Button from "../Button";
import { MessageCircleMore, ArrowRight, Phone } from "lucide-react";

const Header = ({ handleTogglecontactForm }) => {
  return (
    <header style={{ backgroundColor: "#fff9eb" }}>
      <div className="container">
        <div
          className={`${styles.headerwrapper} d-flex justify-content-between align-items-center py-2`}
        >
          <Link href="https://antardrashtinetralaya.com/" target="_blank">
            <div className={styles.headerImg}>
              <Image
                src="/assets/logo2.webp"
                alt="logo"
                width={140}
                height={120}
                priority
              />
            </div>
          </Link>

          <div className="d-none d-md-block">
            <div
              className={`${styles.headerCta} d-flex gap-3 align-items-center`}
            >
              <Button
                bgColor="#fff"
                textColor="#2F3032"
                link="tel:+917987360323"
                btnIcon={"phone"}
                iconColor={"#a98927"}
                btnTitle2="+91 7987360323"
              />

              <Button
                onClick={handleTogglecontactForm}
                bgColor="#a98927"
                textColor="#fff"
                iconColor={"#ffff"}
                btnIcon={"arrow-right"}
                btnTitle="Enquiry Now"
              />
            </div>
          </div>

          <div className="d-block d-md-none">
            <div className="d-flex gap-3">
              <Link href="tel:+917987360323">
                <div className={styles.ctabtn}>
                  <Phone size={22} color="#fff" />
                </div>
              </Link>

              <div className={styles.ctabtn} onClick={handleTogglecontactForm}>
                <MessageCircleMore size={22} color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
