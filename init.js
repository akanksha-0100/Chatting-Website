const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
   .then(()=>{
    console.log("Connection successful");
   })
   .catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

let allChats = [
    {
        from: "Anita",
        to: "Monu",
        msg: "Hello monu",
        created_at: new Date()
    },
    {
        from: "Mita",
        to: "Nancy",
        msg: "Help me nancy",
        created_at: new Date()
    },
    {
        from: "Gita",
        to: "Iyer",
        msg: "Please reply",
        created_at: new Date()
    },
    {
        from: "Sunita",
        to: "Priya",
        msg: "How are you",
        created_at: new Date()
    },
    {
        from: "Mita",
        to: "Kashish",
        msg: "Hello!!",
        created_at: new Date()
    },
    {
        from: "Nancy",
        to: "Monu",
        msg: "Hello Nancy",
        created_at: new Date()
    },
    {
        from: "Rashi",
        to: "Mansi",
        msg: "Please collaborate",
        created_at: new Date()
    },
    {
        from: "Anvi",
        to: "Lavanya",
        msg: "Cancel the order",
        created_at: new Date()
    },
];

chat.insertMany(allChats);