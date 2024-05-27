import { p2e } from "@/utils/replaceNumber";
import "./TextInput.css";

function TextInput({
  lable,
  placeholder,
  type = "text",
  children,
  required,
  name,
  profileData,
  setProfileData,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <div className="input">
      <label htmlFor={name}>
        {lable}
        <span>{required ? "*" : ""}</span>
      </label>
      {type == "textarea" ? (
        <textarea
          placeholder={placeholder}
          type={type}
          autoComplete="on"
          name={name}
          id={name}
          value={profileData[name]}
          onChange={changeHandler}
          rows="3"
        ></textarea>
      ) : (
        <input
          placeholder={placeholder}
          type={type}
          autoComplete="on"
          name={name}
          id={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
      {children}
    </div>
  );
}

export default TextInput;
