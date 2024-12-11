import { FaEdit, FaTrash } from "react-icons/fa";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <h1 className={css.title}>Welcome to Phonebook</h1>
      <p className={css.description}>
        This is a simple phonebook application. You can add, edit, and delete
        contacts.
      </p>
      <div className={css.features}>
        <div className={css.featureItem}>
          <FaEdit className={css.featureIcon} />
          <p>Add or Edit Contacts</p>
        </div>
        <div className={css.featureItem}>
          <FaTrash className={css.featureIcon} />
          <p>Delete Contacts</p>
        </div>
      </div>
      <a href="/register" className={css.linkHomePage}>
        Go to Register Page
      </a>
    </div>
  );
};

export default HomePage;
