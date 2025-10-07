import { useState } from "react";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const AdvancedCataract = ({ lasikData }) => {

  return (
    <section>
      <div className={styles.cardWrapper}>
        <h4>{lasikData?.card?.title}</h4>
        <p>{lasikData?.card?.description}</p>
      </div>

      <div className={`${styles.abtCatractWrapper}`}>
        <h4>{lasikData?.aboutExplain?.title}</h4>
        <p>{lasikData?.aboutExplain?.description}</p>
      </div>

      <div className={`${styles.abtQuestionWrapper}`}>
        {lasikData?.aboutPoints?.map((item, index) => {
          const isLast = index === lasikData?.aboutPoints?.length - 1;

          return (
            <div key={item.id} className={styles.accordionItem}>
              <div className={styles.timelineWrapper}>
                <div className={styles.timeline}>
                  <div
                    className={`${styles.dot}`}
                    style={{ opacity: 0.5 }}
                  />
                  {!isLast && <div className={styles.line} />}
                </div>

                <div className={styles.content}>
                  <button
                    className={styles.header}
                  >
                    <h3 className={styles.title}>{item.point}</h3>
                  </button>

                  {/* <div
                    className={`${styles.panel} ${isOpen ? styles.panelOpen : ""
                      }`}
                  >
                    {item.point && (
                      <p className={styles.text}>{item.point}</p>
                    )}
                    {item.pointsHeader && (
                      <p className={styles.pointsHeader}>{item.pointsHeader}</p>
                    )}
                    {item?.points && (
                      <div className={`${item?.pointsHeader ? "mt-2" : "mt-3"}`}>
                        {item?.points?.map((value, i) => (
                          <h6 style={{ color: "#42474d" }} key={i}>
                            {value}
                          </h6>
                        ))}
                      </div>
                    )}
                  </div> */}
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
