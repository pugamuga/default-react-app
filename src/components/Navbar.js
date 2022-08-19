import logo from "../assets/logo.png";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menuClick = async () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className=" flex items-center  justify-between w-full bg-slate-700 text-white h-[60px] border-b-[1px] border-slate-500 shadow-xl">
        <div className="flex items-center justify-start ml-4">
          <img src={logo} className="w-8 h-8 mr-2" />
          <p className="font-bold text-2xl">BrandName</p>
        </div>
        <div className="flex items-center justify-end mr-4 ">
          <div className="sm:flex hidden">
            <div className="mx-2">Home</div>
            <div className="mx-2">About</div>
            <div className="mx-2">Contact</div>
          </div>
          <div className="flex sm:hidden ml-4 border-[1px] rounded-md items-center p-1 hover:opacity-50 border-slate-500">
            {menu ? (
              <XIcon onClick={menuClick} className="w-5 stroke-slate-300" />
            ) : (
              <MenuIcon onClick={menuClick} className="w-5 stroke-slate-300" />
            )}
          </div>
        </div>
      </div>
      {menu ? (
        <div className="flex justify-center rounded-b-md text-center bg-slate-700 shadow-xl text-white border-b-[1px] border-slate-500">
          <ul className="py-4">
            <li className="p-2 hover:opacity-70">Home</li>
            <li className="p-2 hover:opacity-70">About</li>
            <li className="p-2 hover:opacity-70">Contact</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
