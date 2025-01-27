import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ApplyForm.module.css";
import * as Yup from "yup";

const ApplyForm = () => {
  const initialValues = {
    name: "",
    age: "",
    email: "",
    plan: "",
    about: "",
    agree: false,
  };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required("Це поле обовʼязкове")
      .matches(onlyLetters, "Імʼя має містити тільки літери")
      .min(3, "Мінімум 3 сиволи!")
      .max(20, "Максимум 20 символів"),
    email: Yup.string()
      .required("Це поле обовʼязкове")
      .matches(re, "Це не emeil"),
    age: Yup.number().required("Це поле обовʼязкове"),
    plan: Yup.string()
      .oneOf(["standard", "pro", "business"])
      .required("Це поле обовʼязкове"),
    about: Yup.string().required("Це поле обовʼязкове"),
  });

  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  return (
    <section className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={applySchema}
      >
        {({ values }) => (
          <Form className={s.form}>
            <Field name="name" className={s.input} placeholder="Name" />
            <ErrorMessage className={s.error} component="p" name="name" />
            <Field
              name="email"
              type="email"
              className={s.input}
              placeholder="Email"
            />
            <ErrorMessage className={s.error} component="p" name="email" />
            <Field
              name="age"
              type="number"
              className={s.input}
              placeholder="Age"
            />
            <ErrorMessage className={s.error} component="p" name="age" />

            <Field as="select" name="plan" className={s.input}>
              <option disabled value="">
                Choose your plan!
              </option>
              <option value="standard">Standard</option>
              <option value="pro">Pro</option>
              <option value="business">Business</option>
            </Field>
            <ErrorMessage className={s.error} component="p" name="plan" />

            <Field
              as="textarea"
              name="about"
              className={s.input}
              placeholder="About"
            />
            <ErrorMessage className={s.error} component="p" name="about" />

            <label>
              <Field type="checkbox" name="agree" className={s.checkbox} />
              Agree to terms
            </label>
            <button disabled={!values.agree} type="submit" className={s.button}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ApplyForm;
