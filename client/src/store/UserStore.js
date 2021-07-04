import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this.isAuth = true;
    this.user = {};
    makeAutoObservable(this);
  }

  setAuthValue(value) {
    this.isAuth = value;
  }

  setUserValue(value) {
    this.user = value;
  }

  get getIsAuth() {
    return this.isAuth;
  }

  get getUser() {
    return this.user;
  }
}
