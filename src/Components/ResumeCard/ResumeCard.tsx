import styles from "./ResumeCard.module.css";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

type ResumeCardProp = {
  id: string;
  title: string;
  deleteHandler: (id: string) => void;
};

const ResumeCard = ({ id, title, deleteHandler }: ResumeCardProp) => {
  return (
    <div className={styles.resumeCard}>
      <div className={styles.resumeContent}>
        {/* Title of resume */}
        <h2 className={styles.resumeTitle}>{title}</h2>
      </div>
      <div className={styles.resumeActions}>
        {/* Button for edit resume */}
        <Link to={`/edit-resume/${id}`}>
          <button className="secondary-button">
            <AiFillEdit />
            Edit
          </button>
        </Link>
        {/* Button for delete resume */}
        <button className="secondary-button" onClick={() => deleteHandler(id)}>
          <MdDelete /> Delete
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;
