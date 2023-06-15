import styles from "./ResumeCard.module.css";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

type ResumeCardProp = {
  id: string;
  title: string;
};

const ResumeCard = ({ id, title }: ResumeCardProp) => {
  return (
    <div className={styles.resumeCard}>
      <div className={styles.resumeContent}>
        <h2 className={styles.resumeTitle}>{title}</h2>
      </div>
      <div className={styles.resumeActions}>
        <button className="secondary-button">
          <AiFillEdit />
          Edit
        </button>
        <button className="secondary-button">
          <MdDelete /> Delete
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;
