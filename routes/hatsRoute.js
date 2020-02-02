const express = require('express');
const router = express.Router();

const Hat = require('../models/Hat');

const categories = require('../constants/categories');

router.post('/add', async (req, res) => {
    try {
        const { name, category, price, sizes, images, amount } = req.body;

        const hat = new Hat({
            name,
            category,
            // frontImgSrc,
            price,
            sizes,
            amount,
            images
        });

        await hat.save();

        res.status(201).json({ message: 'Successfully added new hat!' });
    } catch (error) {
        console.log(error);
        res.status(409).json({ error: 'Something went wrong, try again later.' });
        throw error;
    }
});

router.get('/getall', async (req, res) => {
    try {
        const hats = await Hat.find();
        res.status(201).json({ hats });
    } catch (error) {
        res.status(409).json({ error: 'Something went wrong, try again later.' });
    }    
})

const getItems = (route) => {
    router.get(`/${route}`, async (_req, res) => {
        try {
            const hats = await Hat.find({ category: route });
            res.status(201).json({ hats });
        } catch (error) {
            res.status(409).json({ error: 'Something went wrong, try again later.' });
        }
    })
}

for(let category of categories) {
    getItems(category);
}

router.post('/item', async (req, res) => {
    try {
        const hat = await Hat.find({ _id: req.body.id });
        res.status(201).json({ hat });
    } catch (error) {
        res.status(409).json({ error: 'Something went wrong, try again later.' });
    }
});

module.exports = router;