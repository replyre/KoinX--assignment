import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <Header className="header">
      <div className="logo">
        <img src="./images/Logo.png" alt="Logo" className="logo-img" />
      </div>

      {/* Desktop View */}
      <div className="destop-container">
        <Menu mode="horizontal" className="desktop-menu">
          <Menu.Item key="features">Features</Menu.Item>
          <Menu.Item key="exchanges">Exchanges</Menu.Item>
          <Menu.Item key="how-it-works">How it Works?</Menu.Item>
          <Menu.Item key="blog">Blog</Menu.Item>
          <Menu.Item key="about-us">About us</Menu.Item>
        </Menu>
        <Button
          color="primary"
          variant="outlined"
          className="sign-in-button desktop-signin"
        >
          Sign In
        </Button>
      </div>

      {/* Mobile View */}
      <Button
        className="menu-button mobile-menu"
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
      >
        <Menu mode="vertical">
          <Menu.Item key="features">Features</Menu.Item>
          <Menu.Item key="exchanges">Exchanges</Menu.Item>
          <Menu.Item key="how-it-works">How it Works?</Menu.Item>
          <Menu.Item key="blog">Blog</Menu.Item>
          <Menu.Item key="about-us">About us</Menu.Item>
        </Menu>
        <Button type="primary" className="sign-in-button mobile-signin">
          Sign In
        </Button>
      </Drawer>
    </Header>
  );
};

export default AppHeader;
