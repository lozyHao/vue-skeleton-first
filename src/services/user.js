import Service from "./service";
class UserService extends Service {
  /**
   *
   * @param {*} payload { username: '', password: '' }
   * @returns Promise < data,error,statusCode ... >
   */
  async login(payload) {
    return this.fetch("/user/login/").post(payload).json();
  }
}

export default UserService;
