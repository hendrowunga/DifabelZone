import { Outlet } from "react-router-dom";
import DynamicPageTitle from "../components/DynamicPageTitle";

export const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/login",
    name: "Dashboard",
  },
  {
    path: "/products",
    name: "Products",
  },
];

const MainLayout = () => {
  return (
    <div className="mt-4 pt-4">
      <DynamicPageTitle />
      <Outlet />
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">© 2024 by DifabelZone</span>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
