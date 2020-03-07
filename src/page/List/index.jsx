import React from "react";
import { inject, observer } from "mobx-react";
@inject("userInfo")
@observer
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.userInfo.info);
    return <div className="List">测试列表页面</div>;
  }
}
export default List;
