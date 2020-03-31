import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
export default props => {
    let { navTitle = [] } = props;
    return (
        <div className="admin-breadcrum" >
                <Breadcrumb style={{ margin: '12px 0' }}>
                    {navTitle.map((ele, index) => (
                        <Breadcrumb.Item key={index}>{index === 0 ? <Link to={'/'}>{ele}</Link> : ele}</Breadcrumb.Item>
                    ))}
                </Breadcrumb>
        </div>
    );
};
