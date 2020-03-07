import { observable, action } from "mobx";
class UserInfo {
  @observable info = null;
  @action logIn(info) {
    this.info = info;
  }
}
export default UserInfo;
