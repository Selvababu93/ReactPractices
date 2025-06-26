import React from "react";
import MenuItem from "./Menu-item";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-conatiner">
      {list && list.length
        ? list.map((item) => <MenuItem item={item} />)
        : null}
    </ul>
  );
};

export default MenuList;
