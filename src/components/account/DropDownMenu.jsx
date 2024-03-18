"use client";
import { Dropdown } from "keep-react";
import { CaretRight, Gear,SignOut, SquaresFour } from "phosphor-react";
import { Link } from "react-router-dom";
import { removeSession } from "../../utility/SessionHelper";

const DropDownMenu = () => {
  const handleLogout = () => {
    removeSession();
  };
  return (
    <Dropdown label="Dashboard" size="xs">
      <Dropdown.Item icon={<SquaresFour size={20} color="#5E718D" />}>
        <Link to="/profile">Profile</Link>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item icon={<Gear size={20} color="#5E718D" />}>
        <Link to="/my-course">My Course</Link>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item icon={<SignOut size={20} color="#5E718D" />}>
        <span
          onClick={handleLogout}
          className="text-gray-800 hover:text-green-500 cursor-pointer"
        >
          Logout
        </span>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
    </Dropdown>
  );
};
export default DropDownMenu;
