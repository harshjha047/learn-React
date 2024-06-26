const config = {
    appWriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    projectId:String(import.meta.env.VITE_PROJECT_ID),
    databaseId:String(import.meta.env.VITE_DATABASE_ID),
    collectionId:String(import.meta.env.VITE_A_COLLECTION_ID),
    bucketId:String(import.meta.env.VITE_BUCKET_ID),
}
export default config