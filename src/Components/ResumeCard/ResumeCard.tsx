import styles from "./ResumeCard.module.css";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete, MdShare } from "react-icons/md";
import { Link } from "react-router-dom";

type ResumeCardProp = {
  id: string;
  title: string;
  onDelete: (id: string) => void;
  onShare: (id: string) => void;
};

const ResumeCard = ({ id, title, onDelete, onShare }: ResumeCardProp) => {
  return (
    <>
      <div className={styles.resumeCard}>
        <div className={styles.resumeContent}>
          {/* Title of resume */}
          <h2 className={styles.resumeTitle}>{title}</h2>
        </div>
        <div className={styles.resumeActions}>
          {/* for Share a resume */}
          <div className={styles.resumeAction} onClick={() => onShare(id)}>
            <MdShare />
            <span>Share link</span>
          </div>
          {/* for Edit resume */}
          <div className={styles.resumeAction}>
            <Link to={`/edit-resume/${id}`}>
              <AiFillEdit />
              <span>Edit</span>
            </Link>
          </div>
          {/* for Delete resume */}
          <div className={styles.resumeAction} onClick={() => onDelete(id)}>
            <MdDelete />
            <span>Delete</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeCard;
