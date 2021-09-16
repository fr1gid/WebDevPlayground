/*
   Dashboard Sort Component 
 */

import React, { useState } from "react";
import { Note2Grey } from "common";
import { iconSort } from "media/svg";
import { Menu, Dropdown, message } from "antd";

const DashboardSort = () => {
  const [sortState, setSortState] = useState("");
  const [activeIndex, setActiveIndex] = useState("");

  const onClick = (el, index) => {
    setActiveIndex(index);
    setSortState(el);
    message.info(`Sort items by ${el}`);
  };

  const menu = [
    "Renewal Date",
    "Account Created",
    "Highest score",
    "Lowest score",
    "Contract size",
  ];

  const sortMenu = (
    <Menu>
      {menu.map((el, index) => (
        <Menu.Item
          onClick={() => onClick(el, index)}
          key={index}
          className={activeIndex === index ? "active" : ""}
        >
          <Note2Grey>{el}</Note2Grey>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={sortMenu}>
      <div className="sortBy">
        <img src={iconSort} alt="" />
        <Note2Grey> Sort by {sortState} </Note2Grey>
      </div>
    </Dropdown>
  );
};

export default DashboardSort;
