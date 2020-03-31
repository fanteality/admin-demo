import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;
export default class HeaderCustom extends React.Component {
    render() {
        return (
            <Header>
                */}
            </Header>
        );
    }
}
const FocusInput = React.forwardRef((props, ref) => <input type="text" ref={ref} {...props}/>);
