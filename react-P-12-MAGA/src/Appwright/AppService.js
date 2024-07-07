import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AppService {
  client = new Client();
  account; 
  constructor() {
    this.client.setEndpoint(config.appWriteUrl).setProject(config.projectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    console.log("Attempting to create account");
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      console.log("createAccount run");
      if (userAccount) {
        console.log("Account Created");
        return this.login({ email, password });
      } else {
        console.log("Account creation failed");
        return userAccount;
      }
    } catch (error) {
      console.log("In createAccount", error);
      throw error; // Re-throw to handle it in the caller
    }
  }
  async login({ email, password }) {
    console.log("Attempting to log in");
    try {
      const session = await this.account.createEmailSession(email, password); // Changed to createEmailSession
      console.log("Login Done", session);
      return session;
    } catch (error) {
      console.log("In Login", error);
      throw error; // Re-throw to handle it in the caller
    }
  }
  async getCurrentStatus() {
    console.log("Attempting to get current status");
    try {
      const status = await this.account.get();
      console.log("Get Current Status Done", status);
      return status;
    } catch (error) {
      console.log("Get Current Status", error);
      throw error; // Re-throw to handle it in the caller
    }
  }
  async logout() {
    console.log("Attempting to log out");
    try {
      const result = await this.account.deleteSessions();
      console.log("run logout", result);
      return result;
    } catch (error) {
      console.log("logout", error);
      throw error; // Re-throw to handle it in the caller
    }
  }
}
const appService = new AppService();
export default appService;
