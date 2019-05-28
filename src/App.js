import React from 'react'
import Navbar from './components/Navbar'
import { Layout } from 'antd'
import './App.css'
import "antd/dist/antd.css";
import { Switch, Route } from 'react-router';
import routes from './core/router';
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
            <Switch>
              {routes && routes.map( r => (
                  <Route
                    exact={r.exact}
                    path={r.path}
                    component={r.component}
                />))}
            </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default App
