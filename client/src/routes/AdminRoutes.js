//routes import
import { Route } from "react-router-dom";
//components import
import CreateCategory from "../components/admin/CreateCategory";
import CreateProduct from "../components/admin/CreateProduct";
import ShowOrders from "../components/admin/ShowOrders";
import ProductUpdate from "../components/admin/ProductUpdate";
import UpdateProductById from "../components/admin/UpdateProductById";
import CreatePost from "../components/admin/CreatePost";
import PostUpdate from "../components/admin/PostUpdate";
import UpdatePostById from "../components/admin/UpdatePostById";
import UpdateCategory from "../components/admin/UpdateCategory";
import CategoryUpdateById from "../components/admin/CategoryUpdateById";

function AdminRoutes() {
  return (
    <div className="adminRoutes">
      <Route path="/admin/create_category" component={CreateCategory} />
      <Route path="/admin/update_category" component={UpdateCategory} />
      <Route
        path="/admin/update/category/:categoryId"
        exact
        component={CategoryUpdateById}
      />
      <Route path="/admin/create_product" component={CreateProduct} />
      <Route path="/admin/show_orders" component={ShowOrders} />
      <Route path="/admin/update_products" component={ProductUpdate} />
      <Route
        path="/admin/update/:productId"
        exact
        component={UpdateProductById}
      />
      <Route path="/admin/create_post" component={CreatePost} />
      <Route path="/admin/update_post" component={PostUpdate} />
      <Route
        path="/admin/update/post/:postId"
        exact
        component={UpdatePostById}
      />
    </div>
  );
}

export default AdminRoutes;
