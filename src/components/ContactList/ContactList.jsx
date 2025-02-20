import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  return (
    <>
      {isLoading && <p className={css.loadingMessage}>Loading contacts...</p>}
      {error && (
        <p className={css.errorMessage}>Error loading contacts: {error}</p>
      )}
      <ul className={css.listPhone}>
        {filteredContacts && filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} />
            </li>
          ))
        ) : (
          <p className={css.noContactsMessage}>No contacts found</p>
        )}
      </ul>
    </>
  );
};

export default ContactList;
