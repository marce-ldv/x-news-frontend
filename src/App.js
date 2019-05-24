import React from 'react'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import ArticlesContainer from './components/ArticlesContainer'
import {ArticleMini} from "./components/ArticleMini";
import Login from './components/Login'
import { Layout } from 'antd'
import './App.css'
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          {/* <ArticlesContainer /> */}
          <Login />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App
