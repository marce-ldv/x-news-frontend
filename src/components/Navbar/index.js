import React from 'react';
import { Menu, Icon } from 'antd';
import './styles.scss';
import "antd/dist/antd.css";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Navbar = () => {
    return(
        <div className="navbar">
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                <Icon type="home" />
                    Home
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                        <Icon type="setting" />
                        Sections
                        </span>
                    }
                >
                <MenuItemGroup title="Sections">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="">Contact Us</a>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar