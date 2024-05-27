import "./CustomDatePicker.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";

function CustomDatePicker({ profileData, setProfileData }) {
  const [value, setValue] = useState(new Date());

  function handleChange(value) {
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    setValue(value);

    setProfileData({
      ...profileData,
      constructionDate: new Date(value).toISOString(),
    });
  }

  return (
    <div className="data-picker">
      <p>تاریخ ساخت</p>
      <DatePicker
        inputClass="data-picker-value"
        value={value}
        onChange={handleChange}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="right"
      />
    </div>
  );
}

export default CustomDatePicker;
