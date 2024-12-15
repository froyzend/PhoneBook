import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/operations";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      registration({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, touched, errors, handleChange, handleBlur }) => (
        <Form className={css.form}>
          <div className={css.inputGroup}>
            <FaUserAlt className={css.icon} />
            <Field
              type="text"
              name="name"
              className={`${css.input} ${
                touched.name && errors.name ? css.errorInput : ""
              }`}
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.name && errors.name && (
            <div className={css.errorText}>{errors.name}</div>
          )}

          <div className={css.inputGroup}>
            <FaEnvelope className={css.icon} />
            <Field
              type="email"
              name="email"
              className={`${css.input} ${
                touched.email && errors.email ? css.errorInput : ""
              }`}
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.email && errors.email && (
            <div className={css.errorText}>{errors.email}</div>
          )}

          <div className={css.inputGroup}>
            <FaLock className={css.icon} />
            <Field
              type="password"
              name="password"
              className={`${css.input} ${
                touched.password && errors.password ? css.errorInput : ""
              }`}
              placeholder="Enter your password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.password && errors.password && (
            <div className={css.errorText}>{errors.password}</div>
          )}

          <button
            type="submit"
            className={css.submitButton}
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
