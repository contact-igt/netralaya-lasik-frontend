import Number from "@/common/Number";
import styles from "./styles.module.css";
import Form from "@/common/Form";

const Hero = () => {
  return (
    <section>
      <div className="container-fluid px-1 px-md-3 px-lg-5">
        <div className={`position-relative ${styles.heroContainer}`}>
          <div className={styles.bgWrapper}></div>
          <div className={`${styles.layerText} position-absolute`}>
            <h4>Painless</h4>
            <h4>Precise</h4>
            <h4>Proven</h4>
            <p>Cataract Surgery That Brings Life Into Focus</p>
          </div>
          <div className={`${styles.layerForm}`}>
            <Form />
          </div>
          <div className={`${styles.layerNumber} w-100`}>
            <Number />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
