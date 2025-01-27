import { useState } from "react";
import s from "./Forms.module.css";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    course: "",
    about: "",
    level: "middle",
    accept: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      return setFormData((prev) => ({ ...prev, [name]: !prev[name] }));
    }

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            className={s.input}
            onChange={handleChangeInput}
            name="username"
            value={formData.username}
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            className={s.input}
            onChange={handleChangeInput}
            value={formData.email}
            name="email"
          />
        </label>
        <label className={s.label}>
          <span>Phone:</span>
          <input
            className={s.input}
            onChange={handleChangeInput}
            value={formData.phone}
            name="phone"
          />
        </label>
        <label className={s.label}>
          <span>Course:</span>
          <select
            className={s.input}
            onChange={handleChangeInput}
            value={formData.course}
            name="course"
          >
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
            <option value="devops">DevOps</option>
          </select>
        </label>
        <label className={s.label}>
          <span>About:</span>
          <textarea
            className={s.input}
            onChange={handleChangeInput}
            value={formData.about}
            name="about"
          />
        </label>
        <div>
          <span>Level:</span>
          <label>
            <input
              checked={"junior" === formData.level}
              type="radio"
              name="level"
              value="junior"
              onChange={handleChangeInput}
            />
            Junior
          </label>
          <label>
            <input
              checked={"middle" === formData.level}
              type="radio"
              name="level"
              value="middle"
              onChange={handleChangeInput}
            />
            Middle
          </label>
          <label>
            <input
              checked={"senior" === formData.level}
              type="radio"
              name="level"
              value="senior"
              onChange={handleChangeInput}
            />
            Senior
          </label>
        </div>
        <label>
          <input
            name="accept"
            checked={formData.accept}
            onChange={handleChangeInput}
            type="checkbox"
          />
          I accept all rules!
        </label>
        <button className={s.button}>Apply</button>
      </form>
    </div>
  );
};

export default ControlledForm;
