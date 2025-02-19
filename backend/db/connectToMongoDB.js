import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // .env dosyasını yüklüyoruz

const connectToMongoDB = async () => {
    try {
        if (!process.env.MONGO_DB_URI) {
            throw new Error("MONGO_DB_URI is not defined in .env file");
        }

        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.log("❌ Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

export default connectToMongoDB;
