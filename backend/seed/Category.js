const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", name: "BallBearings" },
  
];

exports.seedCategory = async () => {
  try {
    await Category.deleteMany({});
    await Category.insertMany(categories);
    console.log("Categories seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
