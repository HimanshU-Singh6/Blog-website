import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, status, featuredImage, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImage,
          userId,
        }
      );
    } catch (error) {
      console.log("error while creating the post ", error);
    }
  }

  async updatePost(slug, { title, featuredImage, status, content }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          featuredImage,
          status,
          content,
        }
      );
    } catch (error) {
      console.log("error while updating the post ", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("error while getting post ", error);
      return false
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("error while getting all posts ", error);
      return false
    }
  }

  async deletePost(slug){
    try {
        await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
        return true;
    } catch (error) {
        console.log("error while deleting the post ",error)
        return false
    }
  }

  async uploadFile(file){
    try {
       return await this.storage.createFile(conf.appwriteBucketId,ID.unique(),file)
    } catch (error) {
        console.log("error while uploading the file ",error)
    }
  }

  async deleteFile(fileId){
    try {
        await this.storage.deleteFile(conf.appwriteBucketId,fileId)
        return true
    } catch (error) {
        console.log("error while deleting the file ",error)
    }
  }

   getFilePreview(fileId){
    try {
        return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
        console.log("error while getting the file preview ",error)
    }
  }
}

const appwriteService = new Services();

export default appwriteService
