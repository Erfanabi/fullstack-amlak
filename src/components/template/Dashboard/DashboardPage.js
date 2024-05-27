import styles from "@/template/Dashboard/DashboardPage.module.css";
import convertDate from "@/utils/convertDate";

function DashboardPage({ user }) {
  return (
    <div className={styles.container}>
      <h3>سلام 👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت:</p>
        <span>{convertDate(user.createdAt)}</span>
      </div>
    </div>
  );
}

export default DashboardPage;
