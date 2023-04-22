const express = require("express");
const { connection } = require("./Config/db");
const { heroImageModel } = require("./Models/heroimage.model");

const app = express();
const cors= require('cors');
const { adminController } = require("./Routes/admin.route");
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("gld app is running");
});

// ----------------------hero image------------------
app.post("/changeHeroImage", async (req, res) => {
  const { imageURL } = req.body;
  await heroImageModel.deleteMany();
  const newImageURL= new heroImageModel({imageURL});
  await newImageURL.save()
//   await heroImageModel.init({ imageURL });
  res.send({msg:"hero image has been changed."})
});

// --------get image url in fe---
app.get("/getHeroImage", async (req, res) => {
   
   const imageURL= await heroImageModel.find();
    // const newImageURL= new heroImageModel({imageURL});
    // await newImageURL.save()
  //   await heroImageModel.init({ imageURL });
    res.send({'data':imageURL})
  });
  


// ------------ADMIN-------LOGINNNN--------------------

app.use("/",adminController)

app.listen(3113, async () => {
  try {
    await connection;

    console.log("database connected!!!!");
    console.log("app is ruuning on PORT 3113");
  } catch (err) {
    console.log("database conection failed..");
    console.log(err);
  }
});
