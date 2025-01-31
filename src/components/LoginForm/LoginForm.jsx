import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import s from "./LoginForm.module.css";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider/AuthProvider";

const LoginForm = () => {
  const { login } = useContext(authContext);
  const initialValues = {
    login: "",
    password: "123qwe",
  };
  const onSubmit = (values) => {
    console.log(values);
    login(values.login);
    toast.success("Login successful");
  };
  return (
    <div className={s.overlay}>
      <div className={s.formContainer}>
        <h2 className={s.title}>Login to Your Account</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className={s.form}>
            <Field
              className={s.input}
              name="login"
              placeholder="Enter your login"
            />
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <button className={s.button} type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
