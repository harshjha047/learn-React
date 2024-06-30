// re-usable code
import config from "../config/config";
import {Client,Account,ID} from 'appwrite'

export class AppService {
    Client = new Client();
    account;
    constructor(){
        this.Client
          .setEndpoint(config.appWriteUrl)
          .setProject(config.projectId);               

        this.account = new Account(this.Client);
    }
    async createAccount({email,password,name}){
       try{
       const userAccount = await account.create(ID.unique(), email, password,name);
        console.log("createAccount run");
        if(userAccount){
            //login
            console.log("Account Created");
            return this.login({email,password});
        }else{
            console.log("Account creation failed");
            return userAccount;
        }
       }
       catch(error){
        console.log("In createAccount",error);
       }
    };
    async login({email,password}){
        try {
            console.log("Login Done")
           return await this.account.createEmailPasswordSession(email,password);
           
        } catch (error) {
            console.log("In Login",error);
        }
    };
    async getCurrentStatus(){
        try {
            console.log("Get Current Status Done");
            return await this.account.get();
            
        } catch (error) {
            console.log("Get Current Status",error);
        }
    };
    async logout(){
        try {
            console.log("run logout");
           return await this.account.deleteSessions();
        } catch (error) {
            console.log("logout",error);
        }
    };
}
const appService = new AppService();
export default appService
