import config from "../config/config";
import {Client,ID,Databases,Query,Storage} from 'appwrite'

export class AppConfig {
    Client = new Client();
    databases;
    storage;
    constructor(){
        this.Client
          .setEndpoint(config.appWriteUrl)
          .setProject(config.projectId);               
          this.storage = new Storage(this.Client);
          this.databases = new Databases(this.Client);
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                config.databaseId, // databaseId
                config.collectionId, // collectionId
                slug,  // documentId
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }, // data
                ["read('any')"] // permissions (optional)
            );
        } catch (error) {
            console.log("createPost err",error);
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.databaseId, // databaseId
                config.collectionId, // collectionId
                slug,  // documentId
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }, // data (optional)
                ["read('any')"] // permissions (optional)
            );
        } catch (error) {
            console.log("updatePost err",error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.databaseId, // databaseId
                config.collectionId, // collectionId
                slug,  // documentId
            );
            return true;
        } catch (error) {
            console.log("deletePost err",error);
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.databaseId, // databaseId
                config.collectionId, // collectionId
                slug, // documentId
                [] // queries (optional)
            );
            
        } catch (error) {
            console.log("getPost err",error);
        }
    }
    async listPost(){
        try {
            return await this.databases.listDocuments(
                config.databaseId, // databaseId
                config.collectionId, // collectionId
                [Query.equal("status","active")] // queries (optional)
            );
        } catch (error) {
            console.log("listPost err",error);
        }
    }
    //uplode file

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.bucketId, // storageId
                ID.unique,
                file, // file
                ["read('any')"] // permissions (optional)
            );
        } catch (error) {
            console.log("uploadFile err",error);
        }
    }
    async deleteFile(fileID){
        try {
            await this.storage.deleteFile(
                config.bucketId, // storageId
                fileID, // fileId
            )
            return true;
        } catch (error) {
            console.log("deleteFile err",error);
            return false;
        }
    }
    getFilePreview(fileID){
        return this.storage.getFilePreview(config.bucketId, fileID)
    }

}
const  appConfig = new AppConfig();
export default appConfig