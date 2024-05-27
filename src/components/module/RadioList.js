import styles from "@/module/RadioList.module.css";

function RadioList({ profileData, setProfileData, required = true }) {
  const radios = [
    {
      name: "villa",
      title: "ویلا",
    },
    {
      name: "apartment",
      title: "آپارتمان",
    },
    {
      name: "store",
      title: "مغازه",
    },
    {
      name: "office",
      title: "دفتر",
    },
  ];

  const { category } = profileData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <p>
        دسته بندی
        <span>{required ? "*" : ""}</span>
      </p>
      <div className={styles.main}>
        {radios.map((item, index) => {
          return (
            <div key={index}>
              <label htmlFor={item.name}>{item.title}</label>
              <input
                type="radio"
                name="category"
                value={item.name}
                id={item.name}
                checked={category === item.name}
                onChange={changeHandler}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RadioList;

{
  /* <div>
<label htmlFor="villa">ویلا</label>
<input
  type="radio"
  name="category"
  value="villa"
  id="villa"
  checked={category === "villa"}
  onChange={changeHandler}
/>
</div>
<div>
<label htmlFor="apartment">آپارتمان</label>
<input
  type="radio"
  name="category"
  value="apartment"
  id="apartment"
  checked={category === "apartment"}
  onChange={changeHandler}
/>
</div>
<div>
<label htmlFor="store">مغازه</label>
<input
  type="radio"
  name="category"
  value="store"
  id="store"
  checked={category === "store"}
  onChange={changeHandler}
/>
</div>
<div>
<label htmlFor="office">دفتر</label>
<input
  type="radio"
  name="category"
  value="office"
  id="office"
  checked={category === "office"}
  onChange={changeHandler}
/>
</div> */
}
