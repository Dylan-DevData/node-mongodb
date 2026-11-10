import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.db_uri, {
            dbName: "apiBackend"
        });

        console.log("connexion mongodb reussi");
        return "db connected";
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};