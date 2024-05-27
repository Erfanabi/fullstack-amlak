import "./CustomDatePicker.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CustomDatePicker({ profileData, setProfileData }) {
  function handleChange(value) {
    setProfileData({
      ...profileData,
      constructionDate: new Date(value),
    });
  }

  return (
    <div className="data-picker">
      <p>تاریخ ساخت</p>
      <DatePicker
        inputClass="data-picker-value"
        value={profileData.constructionDate}
        onChange={handleChange}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="right"
      />
    </div>
  );
}

export default CustomDatePicker;
