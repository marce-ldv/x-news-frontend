import React from 'react'
import Navbar from './components/Navbar'
import { Layout } from 'antd'
import './App.scss'
import "antd/dist/antd.css";
import { Switch, Route } from 'react-router';
import routes from './core/router';
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Navbar />
        </Header>
        <Content className="content">
            <Switch>
              {routes && routes.map( r => (
                  <Route
                    exact={r.exact}
                    path={r.path}
                    component={r.component}
                />))}
            </Switch>
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
};

export default App
