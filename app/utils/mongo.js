const mongoose = require("mongoose");

const mongoConnect = mongoose.connect(`mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME_MONGO}`,
    {useNewUrlParser: true, useUnifiedTopology: true},
);

module.exports = mongoConnect;