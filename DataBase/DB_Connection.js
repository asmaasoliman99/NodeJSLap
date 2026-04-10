import mongoose from "mongoose";

export const connection = mongoose.connect('mongodb://127.0.0.1:27017/mearnmongoDB')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
})

// export default connection;

