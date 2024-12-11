import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./Registration.module.css";

const RegistrationPage = () => {
  return (
    <div className={css.registrationPage}>
      <h2 className={css.title}>Registration Form</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
