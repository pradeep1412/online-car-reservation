import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import "./Navibar.css";
import { useCookies } from "react-cookie";
function Navibar() {
  const user = useSelector(selectUser);
  const [cookies, setCookie,removeCookie] = useCookies(['user']);
  return (
    <div>
      <div className="nav justify-content-between">
        {!cookies.user ? (
          <LeftNav />
        ) : (
          <div className="nav justify-content-between">
            <LeftNav />
            <RightNav />
          </div>
          )}
        </div>
    </div>
  );
}

export default Navibar;
