import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { RiMenu3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../private/DropDown";
import { dropped } from "../../global/globalState";

const Header = () => {
  const dispatch = useDispatch();
  const drop = useSelector((state: any) => state.dropDown);
  return (
    <>
      {drop && <DropDown />}
      <header className="w-full h-[60px]  flex justify-center items-center">
        <header className="w-full h-[60px] z-[500] bg-white max-sm:bg-gradient-to-tr from-green-400 via-green-600 to-green-700 flex flex-col   items-center justify-center fixed">
          <header className="w-[97%] flex items-center justify-between ">
            <header className="max-sm:hidden">
              <Link to="/auth">
                <FaBookOpenReader className="text-4xl hover:cursor-pointer" />
              </Link>
            </header>
            <header className="hidden max-sm:flex items-center justify-between ">
              <img
                // src={vite}
                alt=""
                className="w-[50px] h-[50px] rounded-full border mr-2 object-cover"
              />
              <div className="leading-none max-sm:text-white">
                <div className="text-[12px] flex items-center ">
                  Welcome back <div className="text-sm">🎉</div>
                </div>
                <div className="font-bold">Francis Uzoigwe</div>
              </div>
            </header>
            <Profile />
            <header className="hidden max-md:block max-sm:text-white">
              <RiMenu3Fill
                className="text-2xl hover:cursor-pointer hover:scale-125 transition-all duration-300"
                onClick={() => {
                  console.log("Dropped");
                  dispatch(dropped());
                }}
              />
            </header>
          </header>
        </header>
      </header>
    </>
  );
};

export default Header;
