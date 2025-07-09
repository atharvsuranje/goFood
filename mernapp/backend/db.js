const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://atharvsuranje2604:2604@cluster0.jauu9lz.mongodb.net/goFood?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {useNewUrlParser: true,useUnifiedTopology: true});
    console.log('Connected Done');
    const foodItemsCollection =  mongoose.connection.db.collection("food_items");
    global.food_items = await foodItemsCollection.find({}).toArray();;
    const foodCategoryCollection =  mongoose.connection.db.collection("foodCategory");
    global.catData = await foodCategoryCollection.find({}).toArray();;

  } catch (err) {
    console.log('Some Error:', err);
  }
};

module.exports = mongoDB;
 