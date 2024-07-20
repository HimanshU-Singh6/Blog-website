import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    console.log(conf.appwriteUrl)
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      // if user created then just log him in
      if (user) return this.login({ email, password });
      else return user;
    } catch (error) {
      console.log("error while creating user ", error);
      return false
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("error while login the user ", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("no user logged in ", error);
      return false;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("error while loggin out the user ", error);
      return false
    }
  }
}

const authService = new AuthService();

export default authService;
