import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contactsOps";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">Error: {error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
