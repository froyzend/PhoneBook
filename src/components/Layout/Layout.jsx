import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={css.layout}>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
