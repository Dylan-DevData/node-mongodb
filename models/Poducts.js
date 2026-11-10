const  ProductSchema =  new  mongoose.Schema({
    uid:{type:String , required:true , unique:true},
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    timesrtamp: { type: Date, default: Date.now }
});
export const ProductCollection = mongoose.model('Product', ProductSchema);