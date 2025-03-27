const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
    
}

const orderSchema = new Schema ({
    item:String,
    price:Number,

});


const customerSchema = new Schema ({
 name:String,
 orders:[
    {
    type:Schema.Types.ObjectId,
    ref:"Order",
    },
 ],
});


const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);



// const addCustomer = async()=>{
//     let cust1 = new Customer({
//         name:"Rahul kumar",

//     });
//     let Order1 = await Order.findOne({item:"chips"});
//     let Order2 = await Order.findOne({item:"chocolate"});

//     cust1.orders.push(Order1._id);
//     cust1.orders.push(Order2._id);

//     let result = await cust1.save();
//     console.log(result);


//     }

//     addCustomer();      // Function call  


// const addOrder = async()=>{
//     let res = await Order.insertMany([
        
//         {item:"somasa",price:12},
//         {item:"chips",price:10},
//         {item:"chocolate",price:40}
//     ]);
//     console.log(res);
// };


const findCustomer = async () => {
    let result = await Customer.find({})
        .populate("orders");  // ✅ lowercase "orders"
    console.log(result[0]);
};

findCustomer();
