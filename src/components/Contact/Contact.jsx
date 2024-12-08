import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <div className={css.userInfo}>
          <FaUser className={css.userIcon} />
          <span className={css.userName}>{contact.name}</span>
        </div>
        <div className={css.phoneInfo}>
          <FaPhone className={css.phoneIcon} />
          <span className={css.phoneNumber}>{contact.phone}</span>
        </div>
      </div>
      <button
        className={css.deleteButton}
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
