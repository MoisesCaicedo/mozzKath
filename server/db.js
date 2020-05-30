const mongoose = require("mongoose");
console.log(process.env.DB)
mongoose.connect(process.env.DB,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);
let db = mongoose.connection;
db.on('error',
    console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("DB ok")
});