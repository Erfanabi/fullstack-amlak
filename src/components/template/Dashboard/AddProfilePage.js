"use client";

import CustomDatePicker from "@/module/CustomDatePicker";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import styles from "@/template/Dashboard/AddProfilePage.module.css";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async () => {
    // console.log(new Date(value).toLocaleDateString("fa-IR"));
    // console.log(new Date(value).toISOString());
    // console.log(profileData);

    try {
      setIsLoading(true);
      const res = await axios.post("/api/profile", profileData);
      console.log(res.data);

      if (res.data.error) {
        toast.error(res.data.error);
        setIsLoading(false);
      } else {
        toast.success(res.data.message);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h3>ثبت آگهی</h3>

      <TextInput
        lable="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        type="textarea"
        lable="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        lable="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        lable="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        lable="قیمت (تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        lable="بنگاه"
        name="realState"
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
        {isLoading ? "loading" : "ثبت آگهی"}
      </button>
      <Toaster />
    </div>
  );
}

export default AddProfilePage;
