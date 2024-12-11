import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ConfirmModal from "../Modal/ConfirmModal";
import { deleteContact } from "../../redux/contacts/operation";

const Contact = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  const openDeleteModal = () => {
    setContactToDelete(contact);
    setIsModalOpen(true);
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
      <button className={css.deleteButton} onClick={openDeleteModal}>
        Delete
      </button>

      {isModalOpen && (
        <ConfirmModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => handleDelete(contactToDelete.id)}
          message={`Are you sure you want to delete ${contactToDelete?.name}?`}
        />
      )}
    </div>
  );
};

export default Contact;
