"use client";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Cart from "@/module/Cart";
import "./MyProfilePage.css";

function MyProfilesPage({ profiles }) {
  const router = useRouter();

  const editHandler = (id) => {
    router.push(`/dashboard/my-profiles/${id}`);
  };

  const deleteHandler = () => {};

  return (
    <div>
      {profiles.length ? null : <p className="text">هیچ آگهی ثبت نشده است</p>}

      <div className="cart-container">
        {profiles.map((item) => (
          <Cart item={item} key={item._id}>
            <div className="cart-btn">
              <button
                className="btn-edit"
                onClick={() => editHandler(item._id)}
              >
                ویرایش
                <FiEdit />
              </button>
              <button className="btn-delete" onClick={deleteHandler}>
                حذف
                <AiOutlineDelete />
              </button>
            </div>
          </Cart>
        ))}
      </div>
    </div>
  );
}

export default MyProfilesPage;

{
  /* <style jsx>{`
        .text {
          background-color: rgba(219, 5, 5, 0.159);
          color: rgb(219, 5, 5);
          font-size: 1.1rem;
          padding: 10px 15px;
          border-radius: 10px;
        }

        .cart-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 30px;
          row-gap: 50px;
        }

        .cart-btn {
          margin-top: 10px;
        }
      `}</style> */
}
