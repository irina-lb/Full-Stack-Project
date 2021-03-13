//routes import
import { Route } from "react-router-dom";
//components import
import UserInfo from "../components/UserInfo";
import CreateCategory from "../components/admin/CreateCategory";
import CreateProduct from "../components/admin/CreateProduct";

function AdminRoutes() {
  return (
    <div className="adminRoutes">
      <Route path="/admin/info" component={UserInfo} />
      <Route path="/admin/create_category" component={CreateCategory} />
      <Route path="/admin/create_product" component={CreateProduct} />
    </div>
  );
}

export default AdminRoutes;
