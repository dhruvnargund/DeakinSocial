const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://harsha:reddy@cluster0.22slh.mongodb.net/DeakinSocial", {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connection succesfull"))

.catch( (err) => console.log(err));

// schema

const userSchema = new mongoose.Schema({

    fnameInput: {
        type: String,
        required : true
    },
    lnameInput: String,
    email: String,
    phonenumber: String,
    campus: String



})

const contentSchema = new mongoose.Schema({

    fnameInput: {
        type: String,
        required : true
    },
    lnameInput: String,
    email: String,
    content: String,
    date: {
        type:Date,
        default: Date.now
    }

})

const friendrequestSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: String,
    campus: String


})

// collection creation

const User = new mongoose.model("User",userSchema);
const Post = new mongoose.model("Post",contentSchema);
const Request = new mongoose.model("Request",friendrequestSchema);

// create document or insert

const harshUser = new User({

    fnameInput: "Harsh",
    lnameInput: "reddy",
    email: "abcd@deakin.edu.au",
    phonenumber: "123456789",
    campus: "burwood"
})

harshUser.save();

const harshPost = new Post({

    fnameInput: "Harsh",
    lnameInput: "reddy",
    email: "abcd@deakin.edu.au",
    content: "Hello everone!",
    active: true
})

harshPost.save();

const createDocument = async () => {
    try{
        const yashRequest = new Request({

            name: "Yash",
            email: "yash@deakin.edu.au",
            campus: "Burwood"
        })

        const dhruvRequest = new Request({

            name: "Dhruv",
            email: "dhruv@deakin.edu.au",
            campus: "Burwood"
        })
        const benRequest = new Request({

            name: "Ben",
            email: "ben@deakin.edu.au",
            campus: "Burwood"
        })
        const tomRequest = new Request({

            name: "Tom",
            email: "tom@deakin.edu.au",
            campus: "Burwood"
        })

        const result = await Request.insertMany([dhruvRequest, benRequest, tomRequest]);
        console.log(result);

    }catch(err){
        console.log(err);
    }
}

 createDocument();


// to read or quering the documents

//const getDocument = async () =>{
//  const result = await Request.find({campus: "Burwood"})
//   .select({name:1})
//   .limit(1);
//    console.log(result);
//}

//getDocument();