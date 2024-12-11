import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { FaUserAlt, FaLock } from "react-icons/fa";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.inputGroup}>
            <FaUserAlt className={css.icon} />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${css.input} ${
                touched.email && errors.email ? css.errorInput : ""
              }`}
            />
          </div>
          {touched.email && errors.email && (
            <div className={css.errorText}>{errors.email}</div>
          )}

          <div className={css.inputGroup}>
            <FaLock className={css.icon} />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${css.input} ${
                touched.password && errors.password ? css.errorInput : ""
              }`}
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
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
