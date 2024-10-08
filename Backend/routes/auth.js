// // routes/auth.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Authentication route
// // router.post('/login', async (req, res) => {
// //   const { id, password } = req.body;

// //   try {
// //     // Find user by ID
// //     const user = await User.findOne({ id });
// //     if (!user) {
// //       return res.status(400).json({ message: 'Invalid credentials' });
// //     }

// //     // Check password
// //     const isMatch = await user.comparePassword(password);
// //     if (!isMatch) {
// //       return res.status(400).json({ message: 'Invalid credentials' });
// //     }

// //     // Generate token or session (for simplicity, we'll return a success message here)
// //     res.json({ message: 'Authentication successful' });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });
// router.post('/login', async (req, res) => {
//     const { id, password } = req.body;
//     console.log("Received login request:", req.body); // Log the incoming request
//     try {
//         const user = await User.findOne({ id });
//         if (!user) {
//             return res.status(400).send('User not found');
//         }

//         const isMatch = await user.comparePassword(password);
//         if (!isMatch) {
//             return res.status(400).send('Invalid credentials');
//         }

//         // If successful, you might want to return a token or success message
//         res.send('Login successful');
//     } catch (error) {
//         res.status(500).send('Error logging in: ' + error.message);
//     }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Authentication route
// router.post('/login', async (req, res) => {
//     const { id, password } = req.body;
//     console.log("Received login request:", req.body); // Log the incoming request

//     try {
//         // Find user by ID
//         const user = await User.findOne({_id});
//         if (!user) {
//             return res.status(400).json({ message: 'User not found' });
//         }

//         // Compare the provided password with the stored hash
//         const isMatch = await user.comparePassword(password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         // Return a JSON response to indicate successful authentication
//         // You could return a token here if needed for further security
//         res.json({ message: 'Authentication successful' });
//     } catch (error) {
//         console.error('Error during login:', error.message);
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// });

// module.exports = router;





const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

        res.json({ token, expiry });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
