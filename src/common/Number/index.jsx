import { HomeConstantData } from "@/constant/Home";
import styles from "./styles.module.css";
import CountUp from "react-countup";

const Number = () => {
  return (
    <div className={styles.countWrapper}>
      <div className="d-flex align-items-center justify-content-evenly text-center">
        {HomeConstantData?.Number?.map((data, i) => (
          <div className={styles.countNums} key={i}>
            <h6>
              {data?.id == "4" ? (
                <CountUp
                  start={0.0}
                  end={data?.count}
                  duration={5}
                  decimal="."
                  decimals={1}
                />
              ) : (
                <CountUp start={0} end={data?.count} duration={5} />
              )}
              <span>{data?.symbol}</span>
            </h6>
            <p>{data?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Number;
