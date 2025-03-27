//one to many / Approch 3 (one to squillions)

// stores a referance to the parent document inside child .

const mongoose = require("mongoose");
const {Schema}= mongoose;

main()
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username:String,
    email:String,
    });

    const postSchema = new Schema({
        content:String,
        likes:Number,
        user:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    });

    const User = mongoose.model("User",userSchema);
    const Post = mongoose.model("Post",postSchema);


    // const addData = async()=>{
    //     let user = await User.findOne({ username: "Devang gupta" });

    //     let post2 = new Post({
    //         content:"hello hello",
    //         likes:25,
    //     });
    //     post2.user= user._id;
    //     await post2.save();

    //     let post1 = new Post({
    //         content:"hello hello",
    //         likes:25,
    //     });
    //     post1.user= user._id;
    //     await post1.save();
    // };

    const getData = async()=>{
        let result = await Post.findOne({}).populate("user");
        console.log(result)
    }
    

    getData();
