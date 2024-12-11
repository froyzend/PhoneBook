import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            className={css.formInput}
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="div" className={css.formError} />

          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            className={css.formInput}
            placeholder="Enter your email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className={css.formError}
          />

          <label htmlFor="password">Password</label>
          <Field
            type="password"
            name="password"
            className={css.formInput}
            placeholder="Enter your password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className={css.formError}
          />

          <button
            type="submit"
            className={css.formButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
