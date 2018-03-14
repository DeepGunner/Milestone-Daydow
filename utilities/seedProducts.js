const faker = require('faker');
const db = require('../models');
const shortid = require('shortid');

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

async function seedProducts(num) {
    var object; 
    for (let i = 0; i < num; i++) {
        object = {
            sku: shortid.generate(),
            name: faker.commerce.productName(),
            product: faker.commerce.product(),
            color: faker.commerce.color(),
            category: ["Mobile & Accessories", "Laptops & Tablets", "Fashion", "Home & Living", "Cameras", "Televisions", "Health & Beauty"][Math.floor(Math.random() * 7)],
            inStock: true,
            stock: Math.floor(getRandomArbitrary(10, 50)),
            sold: Math.floor(getRandomArbitrary(10, 30)),
            price: faker.commerce.price(),
            merchant: faker.name.findName(),
            company: faker.company.companyName(),
            preview: {
                small: "https://picsum.photos/300/300?image=" + i,
                medium: "https://picsum.photos/500/500?image=" + i
            }
        }
        var product = new db.Product(object);
        await product.save()

    }
}

seedProducts(180)
