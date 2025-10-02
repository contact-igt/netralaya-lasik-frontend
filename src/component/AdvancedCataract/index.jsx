import { useState } from "react";
import styles from "./styles.module.css";

const AdvancedCataract = ({ cataractData }) => {
  const [openId, setOpenId] = useState(2);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section>
      <div className={styles.cardWrapper}>
        <h4>{cataractData?.card?.title}</h4>
        <p>{cataractData?.card?.description}</p>
      </div>

      <div className={`${styles.abtCatractWrapper}`}>
        <h4>{cataractData?.aboutExplain?.title}</h4>
        <p>{cataractData?.aboutExplain?.description}</p>
      </div>

      <div className={`${styles.abtQuestionWrapper}`}>
        {cataractData?.aboutQuestion?.map((item, index) => {
          const isOpen = openId === item.id;
          const isLast = index === cataractData?.aboutQuestion?.length - 1;

          return (
            <div key={item.id} className={styles.accordionItem}>
              <div className={styles.timelineWrapper}>
                <div className={styles.timeline}>
                  <div
                    className={`${styles.dot} ${
                      isOpen ? styles.dotActive : ""
                    }`}
                    style={{ opacity: isOpen ? 1 : 0.4 }}
                  />
                  {!isLast && <div className={styles.line} />}
                </div>

                <div className={styles.content}>
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className={styles.header}
                  >
                    <h3 className={styles.title}>{item.question}</h3>
                  </button>

                  <div
                    className={`${styles.panel} ${
                      isOpen ? styles.panelOpen : ""
                    }`}
                  >
                    {item.answer && (
                      <p className={styles.text}>{item.answer}</p>
                    )}

                    {item?.points && (
                      <div className="mt-3">
                        {item?.points?.map((value, i) => (
                          <h6 style={{ color: "#42474d" }} key={i}>
                            {value}
                          </h6>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdvancedCataract;
