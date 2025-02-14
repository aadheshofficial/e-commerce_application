const Product = require("../models/Product");

const products = [
  {
    _id: "65a7e45902e12c44f599444e",
     title: "Spherical Roller Bearing",
     description: "Self-aligning bearing ideal for heavy loads and misalignment conditions.",
     price: 549,
    discountPercentage: 12.96,
    stockQuantity: 14,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://www.cbccuscinetti.com/wp-content/uploads/2017/10/URB-Spherical-Roller-Bearing-2_edited.jpg",
    images: [
     
      "https://www.cbccuscinetti.com/wp-content/uploads/2017/10/URB-Spherical-Roller-Bearing-2_edited.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f599444f",
    title: "Angular Contact Ball Bearing",
    description:
      "Designed to handle both radial and axial loads efficiently.",
    price: 13,
    discountPercentage: 8.14,
    stockQuantity: 21,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://www.bearingtips.com/wp-content/uploads/2016/09/PumPac-Bearings.jpg",
    images: [
      "https://www.bearingtips.com/wp-content/uploads/2016/09/PumPac-Bearings.jpg",
     
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
    stockQuantityQuantity: 5,
  },
  {
    _id: "65a7e45902e12c44f5994450",
    title: "Tapered Roller Bearing",
    description:
      "Ideal for applications with high radial and axial loads.",
    price: 1249,
    discountPercentage: 15.46,
    stockQuantity: 36,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://tse3.mm.bing.net/th?id=OIP.bsq7AQgjQxirg7X0zrWbVwHaEJ&pid=Api",
    images: ["https://tse3.mm.bing.net/th?id=OIP.bsq7AQgjQxirg7X0zrWbVwHaEJ&pid=Api"],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994451",
    title: "Spherical Roller Bearing Different Configuration",
    description: "Modified version of spherical roller bearing for specific applications.",
    price: 280,
    discountPercentage: 17.91,
    stockQuantity: 123,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://tse2.mm.bing.net/th?id=OIP.sFQ0RJNONMI6UhkWjMS3CwHaHa&pid=Api",
    images: [
      "https://tse2.mm.bing.net/th?id=OIP.sFQ0RJNONMI6UhkWjMS3CwHaHa&pid=Api",
      
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994452",
    title: "Cylindrical Roller Bearing",
    description:
      "Provides high radial load capacity and low friction.",
    price: 499,
    discountPercentage: 10.58,
    stockQuantity: 32,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://www.bmcbearing.com/hubfs/Cylindrical%20Roller%20bearing%20(2).jpg",
    images: [
      "https://www.bmcbearing.com/hubfs/Cylindrical%20Roller%20bearing%20(2).jpg",
     
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994453",
    title:     "Cylindrical Roller Bearing with Brass Cage",
    description:
      "Brass cage improves durability and performance under high loads.",
    price: 1749,
    discountPercentage: 11.02,
    stockQuantity: 83,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://www.gobizkorea.com/image/goodsImage.do?goods_no=GS2022122325529&image_se_code=ADI2_THUMB10A",
    images: [
     
      "https://www.gobizkorea.com/image/goodsImage.do?goods_no=GS2022122325529&image_se_code=ADI2_THUMB10A",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994454",
    title: "Cylindrical Roller Bearing with Polymer Cage",
    description:
      "Polymer cage reduces weight and noise, ideal for high speed applications.",
    price: 1499,
    discountPercentage: 4.15,
    stockQuantity: 50,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://th.bing.com/th/id/OIP.jEyukSQ8827KEO68UbZxRgHaHa?rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.jEyukSQ8827KEO68UbZxRgHaHa?rs=1&pid=ImgDetMain",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994455",
    title: "Double Row Tapered Roller Bearing",
    description:
      "Provides higher radial and axial load capacity than single row variants.",
    price: 1499,
    discountPercentage: 10.23,
    stockQuantity: 68,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://th.bing.com/th/id/OIP.QIOAdvLozmeOp17Q_qhYawHaHO?rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.QIOAdvLozmeOp17Q_qhYawHaHO?rs=1&pid=ImgDetMain",
     
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994456",
    title: "Adapter Sleeve",
    description:
      "Used for mounting bearings with a tapered bore on cylindrical shafts.",
    price: 1099,
    discountPercentage: 11.83,
    stockQuantity: 96,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://www.thumbsfrog.com/1030853/product/adapter-sleeves-1592635183.jpeg",
    images: [
      "https://www.thumbsfrog.com/1030853/product/adapter-sleeves-1592635183.jpeg",
      
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994457",
    title: "Bearing Housing Plummer Block",
    description:
      "Provides support and protection for bearings in rotating applications.",
    price: 1099,
    discountPercentage: 6.18,
    stockQuantity: 89,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://th.bing.com/th/id/OIP.bp_1qfQhnNFvfH3vI2AfEQHaFb?rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.bp_1qfQhnNFvfH3vI2AfEQHaFb?rs=1&pid=ImgDetMain",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994458",
    title: "Grease Gun with Lubricants",
    description:
      "Used for applying lubricant to bearings and other mechanical parts.",
    price: 13,
    discountPercentage: 8.4,
    stockQuantity: 65,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://th.bing.com/th/id/OIP.b-5skjUclnw6YmHNUKtAgAHaHa?rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.b-5skjUclnw6YmHNUKtAgAHaHa?rs=1&pid=ImgDetMain",

    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  
];

exports.seedProduct = async () => {
  try {
    // await Product.deleteMany({}); // Deletes existing products
    await Product.insertMany(products); // Inserts new products
    console.log("Products seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
