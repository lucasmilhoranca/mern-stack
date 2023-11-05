const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Wait connecting to the database");

    mongoose
        .connect(
        "mongodb+srv://root:131023@cluster0.uiwjznu.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error));
};

module.exports = connectDatabase;
