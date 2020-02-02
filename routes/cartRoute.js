const express = require('express');
const router = express.Router();

const Hat = require('../models/Hat');

// const editCart = (id, cart, price, add = true) => {
//     const oldItem = cart.items.find(oldItem => oldItem.id === id.toString());

//     if(add) {
//         oldItem.quantity++;
//         oldItem.price += price;

//         cart.quantity++;
//         cart.price += price;
//     } else {
//         oldItem.quantity--;
//         oldItem.price -= price;

//         cart.quantity--;
//         cart.price -= price;
//     }
// }

router.get('/all', async (req, res) => {
    return res.status(201).json({ cart: req.session.cart });
});

router.post('/add/:id', async (req, res) => {
    const itemId = req.params.id;
    const { size, quantity } = req.body;

    let cart = req.session.cart ? req.session.cart : 
    {
        items: [],
        quantity: 0,
        price: 0
    };

    try {
        const { _id, images, name, category, sizes, price, amount } = await Hat.findById(itemId);

        let newItem = {
            id: _id,
            img: images[0],
            name,
            category,
            size,
            sizes,
            amount,
            quantity,
            price: quantity * price
        };

        cart.items.push(newItem);

        cart.quantity += newItem.quantity;
        cart.price += newItem.price;

        req.session.cart = cart;     

        res.status(201).json({ cart });
    } catch (error) {
        res.status(409).json({ error: 'Something went wrong, try again later.' });
        throw error;
    }
});

const editCart = async (req, res, add) => {
    const itemId = req.params.id;

    let cart = req.session.cart;

    try {
        const { _id, price } = await Hat.findById(itemId);

        const oldItem = cart.items.find(oldItem => oldItem.id === _id.toString());

        if(add) {
            oldItem.quantity++;
            oldItem.price += price;

            cart.quantity++;
            cart.price += price;
        } else {
            oldItem.quantity--;
            oldItem.price -= price;

            cart.quantity--;
            cart.price -= price;
        }

        // editCart(_id, cart, price);

        req.session.cart = cart;     

        res.status(201).json({ cart });
    } catch (error) {
        res.status(409).json({ error: 'Something went wrong, try again later.' });
        throw error;
    }
}

router.post('/plus/:id', (req, res) => {
    editCart(req, res, true);
});

router.post('/minus/:id', (req, res) => {
    editCart(req, res, false);
});

router.post('/size/:id', async (req, res) => {
    const itemId = req.params.id;

    let cart = req.session.cart;
    const size = req.body.size;

    try {
        cart.items.forEach(currentItem => {
            if(currentItem.id === itemId) {
                currentItem.size = size;
            }
        });
    
        req.session.cart = cart;
    
        res.status(201).json({ cart });
    } catch (error) {
        res.status(409).json({ error: 'Something went wrong, try again later.' });
        throw error;
    }
});

router.delete('/delete/:id', async (req, res) => {
    const itemId = req.params.id;

    let cart = req.session.cart;

    try {
        cart.items.forEach(item => {
            if(itemId === item.id) {
                cart = {
                    ...cart,
                    quantity: cart.quantity - item.quantity,
                    price: cart.price - item.price
                }
            }
        });
    
        cart.items = cart.items.filter(item => item.id !== itemId);
    
        if(cart.items.length) {
            req.session.cart = cart;
        } else {
            req.session.destroy();
            cart = {};
        }

        res.status(201).json({ cart });
    } catch (error) {
        res.status(409).json({ error: 'Something went wrong, try again later.' });
        throw error;
    }
});


module.exports = router;
