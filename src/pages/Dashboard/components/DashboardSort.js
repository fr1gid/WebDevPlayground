/*
   Dashboard Sort Component 
 */

import React from "react";
import { Note2Grey } from "common";
import { iconSort } from "media/svg";

import { Menu, Dropdown, message } from "antd";

const DashboardSort = () => {
  const onClick = ({ key }) => {
    message.info(`Sort items by ${key}`);
  };

  const sortMenu = (
    <Menu onClick={onClick}>
      <Menu.Item key="Renewal Date">
        <Note2Grey>Renewal Date</Note2Grey>
      </Menu.Item>
      <Menu.Item key="Account Created">
        <Note2Grey>Account Created</Note2Grey>
      </Menu.Item>
      <Menu.Item key="Highest score">
        <Note2Grey>Highest score</Note2Grey>
      </Menu.Item>
      <Menu.Item key="Lowest score">
        <Note2Grey>Lowest score</Note2Grey>
      </Menu.Item>
      <Menu.Item key="Contract size">
        <Note2Grey>Contract size</Note2Grey>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={sortMenu}>
      <div className="sortBy">
        <img src={iconSort} alt="" />
        <Note2Grey> Sort By </Note2Grey>
      </div>
    </Dropdown>
  );
};

export default DashboardSort;
