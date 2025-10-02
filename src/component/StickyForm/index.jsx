import Form from "@/common/Form";
import styles from "./styles.module.css"

const StickyForm = () => {
  return (
    <section>
     <div className={styles.stickyFormWrapper}>
         <Form />
     </div>
    </section>
  );
};

export default StickyForm;
