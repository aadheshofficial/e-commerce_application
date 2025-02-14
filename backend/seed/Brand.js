const Brand = require("../models/Brand");

const brands = [
  { _id: "65a7e20102e12c44f59943da", name: "BearingCo" },
 
];

exports.seedBrand = async () => {
  try {
    // await Brand.deleteMany({});
    await Brand.insertMany(brands);
    console.log("Brands seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
