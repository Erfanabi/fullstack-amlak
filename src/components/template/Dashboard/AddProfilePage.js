"use client";

import CustomDatePicker from "@/module/CustomDatePicker";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import styles from "@/template/Dashboard/AddProfilePage.module.css";
import { useState } from "react";

function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const submitHandler = () => {
    // console.log(new Date(value).toLocaleDateString("fa-IR"));
    // console.log(new Date(value).toISOString());
    console.log(profileData);
  };

  return (
    <div className={styles.container}>
      <h3>"ثبت آگهی"</h3>

      <TextInput
        lable="عنوان آگهی"
        name="title"
        required
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        type="textarea"
        lable="توضیحات"
        name="description"
        required
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        lable="آدرس"
        name="location"
        required
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        lable="شماره تماس"
        name="phone"
        required
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        lable="قیمت (تومان)"
        name="price"
        required
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        lable="بنگاه"
        name="realState"
        required
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />

      <TextList
        form={profileData}
        setForm={setProfileData}
        type="amenities"
        lable="امکانات رفاهی"
      />
      <TextList
        form={profileData}
        setForm={setProfileData}
        type="rules"
        lable="قوانین"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <button className={styles.submit} onClick={submitHandler}>
        ثبت آگهی
      </button>
    </div>
  );
}

export default AddProfilePage;
