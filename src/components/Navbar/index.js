import React from 'react'
import { Menu, Icon } from 'antd'
import './styles.scss'
import "antd/dist/antd.css";
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const Navbar = () => {

    return(
        <div className="navbar">
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <a href="">Home</a>
                </Menu.Item>
                <SubMenu title={<span>Sections</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Aadad</Menu.Item>
                    <Menu.Item key="setting:2">dasdas 2</Menu.Item>
                    </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                    
                <Menu.Item key="setting:3">Asdasd 3</Menu.Item>
                <Menu.Item key="setting:4">Adasdsad 4</Menu.Item>
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