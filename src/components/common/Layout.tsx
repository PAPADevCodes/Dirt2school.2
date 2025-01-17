import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Sider from "../static/Sider";
import { useSelector } from "react-redux";
import { MdAccountCircle, MdDashboard, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const Layout = () => {
  const uToggle = useSelector((state: any) => state.uToggle);
  const resetPage = useSelector((state: any) => state.reset);
  return (
    <div>
      <Header />
      <div className="w-full h-auto  justify-between flex">
        <div
          className={`${
            !uToggle ? "w-[150px]" : "w-[60px]"
          }  h-full max-md:hidden`}
        >
          <Sider />
        </div>
        <div className="w-full h-auto bg-green-400  flex items-center justify-center">
          <div
            className={`fixed ${
              resetPage ? "z-0" : "z-50"
            } bottom-20 max-sm:flex hidden w-[40%] border bg-white h-[50px] shadow-md rounded-full items-center justify-around`}
          >
            <Link to="/auth">
              <div className="px-1 py-1 rounded-full bg-blue-600 text-white">
                <MdDashboard className="text-2xl" />
              </div>
            </Link>
            <Link to="/auth/profile">
              <div className="px-1 py-1 rounded-full bg-blue-600 text-white">
                <MdAccountCircle className="text-2xl" />
              </div>
            </Link>
            <Link to="/auth/settings">
              <div className="px-1 py-1 rounded-full bg-blue-600 text-white">
                <MdSettings className="text-2xl" />
              </div>
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
