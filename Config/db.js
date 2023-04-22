const mongoose= require('mongoose');
const connection = mongoose.connect("mongodb+srv://stymngrya:161996@cluster0.gj34e8l.mongodb.net/?retryWrites=true&w=majority")


module.exports={
    connection
}