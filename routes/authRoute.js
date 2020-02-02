const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user) return res.status(404).json({ error: 'User doesn\'t exist' });

        const match = await bcrypt.compare(password, user.password);

        if(!match) return res.status(404).json({ error: 'Password is not correct' });

        const token = jwt.sign({
            data: { email, password }  
        }, process.env.SECRET, { expiresIn: '12h' });
        console.log(token);
        res.status(201).json({ token });
    } catch (error) {
        res.status(409).json({ error: 'Something went wrong, try again later.' });
        throw error;
    };
});


router.post('/register', async (req, res) => {
    const { name, email, password, repPassword } = req.body;

    try {
        const exists = await User.find({ $or: [{ name }, { email }] });

        if(exists.length) res.status(404).json({ error: 'User already exists' });

        if(password !== repPassword) res.status(404).json({ error: 'Passwords don\'t match' });

        const passHashed = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: passHashed
        });

        await user.save();

        const token = jwt.sign({
            data: { email, password }  
        }, process.env.SECRET, { expiresIn: '12h' });

        res.status(201).json({ token });
    } catch (error) {
        res.status(409).json({ error: 'Something went wrong, try again later.' });
        throw error;     
    }
});

module.exports = router;