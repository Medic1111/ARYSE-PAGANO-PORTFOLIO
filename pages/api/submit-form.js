//  /api/submit-form

import mongoose from "mongoose";

const formSubmitController = async (req, res) => {
  mongoose.connect(
    "mongodb+srv://Medic1111:1005MongodbAtlas!@cluster0.k7bhq.mongodb.net/interestListDB",
    () => console.log("Connected to DB")
  );

  const schema = new mongoose.Schema({
    name: String,
    email: String,
  });

  const PotentialNewClient = new mongoose.model("PotentialClient", schema);

  let name = req.body.userInfo.name;
  let email = req.body.userInfo.email;

  let newClient = new PotentialNewClient({
    name,
    email,
  });
  await newClient.save();

  res.send("Server Got It");
};

export default formSubmitController;
