const User = require("../models/User");
const bcrypt = require("bcryptjs");

const users = [
  {
    _id: "65b8e564ea5ce114184ccb96",
    name: "demo user",
    email: "demo@gmail.com",
    password:'$2a$10$GH8p5cAsGFEdYsLaSfTQ3e1eUs7KbLmVBltjbX4DDCj2eyO2KW/Ze',
    isVerified: true,
    isAdmin: false,
    __v: 0,
  },
  {
    _id: "65c2526fdcd9253acfbaa731",
    name: "rishibakshi",
    email: "demo2@gmail.com",
    password: '$2a$10$tosjkprqtomSah0VJNyKi.TIv1JU65pl1i1IJ6wUttjYw.ENF99jG',
    isVerified: true,
    isAdmin: false,
    __v: 0,
  },
];

const addExtraUsers = async () => {
  const hashedAdminPassword = await bcrypt.hash("12345678", 10); // Hash password for admin
  const hashedUserPassword = await bcrypt.hash("12345678", 10);  // Hash password for non-admin

  users.push(
    {
      name: "Admin User",
      email: "aadheshofficial@gmail.com",
      password: hashedAdminPassword,
      isVerified: true,
      isAdmin: true, // Admin flag
      __v: 0,
    },
    {
      name: "Aadhesh Rock",
      email: "aadheshrock@gmail.com",
      password: hashedUserPassword,
      isVerified: true,
      isAdmin: false, // Non-admin flag
      __v: 0,
    }
  );
};

exports.seedUser = async () => {
  try {
    await addExtraUsers();
    await User.insertMany(users);
    console.log("Users seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
