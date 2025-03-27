//Approch 1 (one to few ) 
//Store the child document inside the parent. ex- Zomato , uber.


const mongoose = require("mongoose");
const { Schema } = mongoose;  

main()
.then(()=>console.log("connection is sucessful"))
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");  //relationDemo is name of database

}

const userSchema = new Schema({
    username:String,
    addresses:[
        {
            _id:false,
location: String,
city:String,
        },
    ],
});

const User = mongoose.model("User",userSchema);

const addUser = async()=>{
    let User1= new User({

        username:"Devang gupta",
        addresses:[{
            location:"sector 10",
            city:"gurugoan",
        }]
    })


let result = await User1.save();
console.log(result);
};

addUser();


