import React from 'react';
import RouteList from './route/route';
import { Layout } from 'antd';
import SideBar from './components/SideBar'
import HeaderCustom from './components/HeaderCustom'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
const { Content } = Layout;

function App() {
    return (
        <div className="App">
            <Router>
                    <Layout style={{ minHeight: '100vh' }}>
                        {/* 侧边栏 */}
                        <SideBar />
                        <Layout>
                            <HeaderCustom />
                            <Content>
                                <RouteList />
                            </Content>
                        </Layout>
                    </Layout>
            </Router>
        </div>
    );
}

export default App;
