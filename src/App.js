import React from 'react'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import ArticlesContainer from './components/ArticlesContainer'
import { Layout } from 'antd'
import './App.scss'

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App
