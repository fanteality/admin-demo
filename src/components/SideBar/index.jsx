import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import MyIcon from '../MyIcon'
import routeConfig from '../../route/config';
import './index.scss';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default props => {
    const [collapsed, setCollapsed] = useState(false);
    let { menu } = routeConfig;
    return (
        <Sider className="admin-sidebar" collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <div className="admin-logo">
                <img src={require('./logo.png')} alt="" />
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {menu.map((ele, index) => {
                    return ele.subs ? (
                        <SubMenu
                            key={index}
                            title={
                                <React.Fragment>
                                    <MyIcon type={`icon-${ele.icon}`} />
                                    <span>{ele.title}</span>
                                </React.Fragment>
                            }
                        >
                            {ele.subs.map((ele, index) => (
                                <Menu.Item key={index + ele.path}>
                                    <Link to={ele.path}>
                                        <MyIcon type={`icon-${ele.icon}`} />
                                        <span>{ele.title}</span>
                                    </Link>
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    ) : (
                        <Menu.Item key={index + ele.path}>
                            <Link to={ele.path}>
                                <MyIcon type={`icon-${ele.icon}`} />
                                <span>{ele.title}</span>
                            </Link>
                        </Menu.Item>
                    );
                })}
            </Menu>
        </Sider>
    );
}