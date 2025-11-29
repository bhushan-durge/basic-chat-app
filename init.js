//sample database file if we delete all data fronm databse just
//  direct go to init.js file and run this file


const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me the notes",
    created_at: new Date(),
},
 {
    from: "rohit",
    to: "mohit",
    msg: "can you help me teach callbacks",
    created_at: new Date(),
},
 {
    from: "john",
    to: "bob",
    msg: "are you free today",
    created_at: new Date(),
},
 {
    from: "johny",
    to: "siggy",
    msg: "lets go for walk today",
    created_at: new Date(),
},
 {
    from: "ajay",
    to: "aashish",
    msg: "how are you",
    created_at: new Date(),
},
];

Chat.insertMany(allChats);

//after creating this save this file run this as node init.js and then all the data from this file save to database
