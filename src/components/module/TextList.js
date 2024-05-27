import "./TextList.css";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ form, setForm, type, lable }) {
  const addHnadler = () => {
    setForm({
      ...form,
      [type]: [...form[type], ""],
    });
  };

  const deleteHandler = (index) => {
    const newList = [...form[type]]; // clone
    newList.splice(index, 1);
    setForm({
      ...form,
      [type]: newList,
    });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...form[type]];
    list[index] = value;
    setForm({ ...form, [type]: list });
  };

  return (
    <div className="item-list">
      <p>{lable}</p>

      {form[type].map((item, index) => {
        return (
          <div className="form-input__list" key={index}>
            <input
              type="text"
              value={item.index}
              onChange={(e) => changeHandler(e, index)}
            />

            <button onClick={() => deleteHandler(index)}>
              <AiOutlineDelete />
              حذف
            </button>
          </div>
        );
      })}

      <button onClick={addHnadler} className="add">
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}

export default TextList;
