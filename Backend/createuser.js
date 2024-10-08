// const mongoose = require('mongoose');
// const User = require('../models/User.js'); // Adjust the path based on your project structure

// async function createUser() {
//   try {
//     await mongoose.connect('mongodb+srv://abhi:1234@signin.cb6zr.mongodb.net/admin1', { useNewUrlParser: true, useUnifiedTopology: true });

//     const newUser = new User({
//       id: '1234',
//       password: '1234', // The password will be hashed in the User model
//     });

//     await newUser.save();
//     console.log('User created successfully');
//   } catch (error) {
//     console.error('Error creating user:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// createUser();



// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const User = require('../Backend/models/User.js'); // Adjust the path based on your project structure

// async function createUser() {
//   try {
//     // Connect to the MongoDB database
//     await mongoose.connect('mongodb+srv://abhi:1234@signin.cb6zr.mongodb.net/admin1', { 
//       useNewUrlParser: true, 
//       useUnifiedTopology: true 
//     });

//     // Hash the password
//     const hashedPassword = await bcrypt.hash('1234', 10); // 10 is the salt rounds

//     // Create a new user instance with hashed password
//     const newUser = new User({
//       username: '1234',
//       password: hashedPassword, // Store hashed password
//     });

//     // Save the new user to the database
//     await newUser.save();
//     console.log('User created successfully');
//   } catch (error) {
//     console.error('Error creating user:', error);
//   } finally {
//     // Close the database connection
//     mongoose.connection.close();
//   }
// }

// // Call the function to create the user
// createUser();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User.js'); // Adjust the path based on your project structure

async function createUser() {
  try {
    // Remove deprecated options from mongoose.connect
    await mongoose.connect('mongodb+srv://abhi:1234@signin.cb6zr.mongodb.net/admin1', {
      serverSelectionTimeoutMS: 5000, // Set timeout to 5 seconds
    });

    const hashedPassword = await bcrypt.hash('1234', 10);

    const newUser = new User({
      username: '1234',
      password: hashedPassword,
    });

    await newUser.save();
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    mongoose.connection.close();
  }
}

createUser();
