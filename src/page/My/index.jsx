import React from "react";
import { inject, observer } from "mobx-react";
@inject("userInfo")
@observer
class My extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { info } = this.props.userInfo;
    return (
      <div className="My">
        {info ? info : "需要登陆"}
        <div onClick={() => this.props.userInfo.logIn("的凤凰健康" )}>
          修改状态
        </div>
        <button onClick={() => this.props.history.push("/List")}>跳转</button>
      </div>
    );
  }
}
export default My;
