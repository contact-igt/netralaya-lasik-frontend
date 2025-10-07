import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";
import Button from "@/common/Button";

const AreYouACanditate = ({ data, handleTogglecontactForm }) => {
  return (
    <section className={styles.areYouCanditate}>
      <div className={styles.header}>
        <h4 className={styles.title}>{data?.title}</h4>
        <p className={styles.description}>{data?.description}</p>
        <p></p>
      </div>
      <div className="container mt-md-5 mt-3">
        <div className="row">
          {data?.conditions?.map((item, index) => (
            <div className="col-xl-4 col-md-6 col-12">
              <div key={index} className={styles.conditionItem}>
                <div>
                  <img
                    src={item?.image}
                    className={styles.image}
                    alt={item?.title}
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.conditionDescription}>{item?.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <Button
          onClick={handleTogglecontactForm}
          textColor="#fff"
          bgColor="#a98927"
          btnTitle={data?.btnText}
          btnIcon={data?.icon}
          iconColor="#fff"
        />
      </div>
    </section>
  );
};

export default AreYouACanditate;
