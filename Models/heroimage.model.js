const mongoose= require('mongoose');

const heroimageSchema = new mongoose.Schema({
    imageURL:{type:String, required:true}
}
)

const heroImageModel = mongoose.model("heroImage", heroimageSchema)

module.exports={
    heroImageModel
}