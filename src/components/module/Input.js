import "./Input.css";

function Input({
  lable,
  placeholder,
  type = "text",
  children,
  required,
  value,
  onChange,
}) {
  return (
    <div className="input">
      <label>
        {lable}
        <span>{required ? "*" : ""}</span>
      </label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete="on"
      />
      {children}
    </div>
  );
}

export default Input;
