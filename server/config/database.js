import mongoose from "mongoose";

const connectWithDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(
        console.log("Connected to database successfully")
    ).catch(error => {
        console.log("Connection to database failed!");
        console.log(error);
        process.exit(1);
    })
}

export default connectWithDatabase;