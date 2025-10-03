import Number from "@/common/Number";
import styles from "./styles.module.css";
import Form from "@/common/Form";

const Hero = ({handleTogglecontactForm}) => {
  return (
    <section>
      <div className="container">
        <div className={`position-relative ${styles.heroContainer}`}>
          <div className={styles.bgWrapper}></div>
          <div className={`${styles.layerText} position-absolute`}>
            <h4>Painless</h4>
            <h4>Precise</h4>
            <h4>Proven</h4>
            <p>Cataract Surgery That Brings Life Into Focus</p>
          </div>
          <div className={`${styles.layerForm}`}>
            <Form handleTogglecontactForm={handleTogglecontactForm} />
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
