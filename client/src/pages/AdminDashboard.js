//components import
import AdminSideBar from "../components/admin/AdminSideBar";
import AdminRoutes from "../routes/AdminRoutes";

function AdminDashboard() {
  return (
    <div className="adminDashboard">
      <h3>Admin Dashboard</h3>
      <div className="routesContainer">
        <AdminSideBar />
        <AdminRoutes />
      </div>
    </div>
  );
}

export default AdminDashboard;
