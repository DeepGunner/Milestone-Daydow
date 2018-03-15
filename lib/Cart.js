const LOCALE_LANG = 'en'
const LOCALE_CURRENCY = 'INR'

// format = new Intl.NumberFormat('en', {style: 'currency', currency: 'INR' });

class Cart {
    static addToCart(product = null, qty = 1, cart) {
        // Method for adding a product to the cart
        if (!this.inCart(product.sku, cart)) {
            let format = new Intl.NumberFormat(LOCALE_LANG, {style: 'currency', currency: LOCALE_CURRENCY });
            let prod = {
                sku: product.sku,
                name: product.name,
                product: product.product,
                color: product.color,
                category: product.category,
                inStock: product.inStock,
                price: format.format(product.price),
                merchant: product.merchant,
                company: product.company,
                preview: {
                    small: product.preview.small,
                    medium: product.preview.medium,
                },
                qty: qty
            };
            cart.items.push(prod)
            this.calculateTotals(cart)
        }
    }

    static removeFromCart(sku = '', cart) {
        for (let i = 0; i < cart.items.length; i++) {
            let item = cart.items[i];
            if (item.sku === sku) {
                cart.items.splice(i, 1)
                this.calculateTotals(cart)
            }
        }
    }

    static updateCart(skus = [], qtys = [], cart) {
        let map = [];
        let updated = false

        // Create map[] 
        skus.forEach(sku => {
            qtys.forEach(qty => {
                map.push({
                    sku: parseInt(sku, 10),
                    qty: parseInt(qty, 10)
                })
            })
        })

        // Now update each item and it's quantity
        map.forEach(ele => {
            cart.items.forEach(item => {
                if (item.sku === ele.sku) {
                    if (ele.qty > 0 && ele.qty !== item.qty) {
                        item.qty = ele.qty;

                    }
                }
            })
        })

        // Re-calculate the totals if any quantity
        // have been updated
        if (updated) {
            this.calculateTotals(cart)
        } 

    }

    static inCart(productSKU = '', cart){
        let found = false;
        cart.items.forEach(item => {
            if (item.sku === productSKU) {
                found = true;
            }
        });
        return found;
    }

    static calculateTotals(cart) {
        cart.totals = 0.00;
        cart.items.forEach(item => {
            let amount = item.price * item.qty;
            cart.totals += amount;
        })
        this.setFormattedTotals(cart)
    }

    static emptyCart(req) {
        if (req.session) {
            req.session.cart.items = [];
            req.session.cart.totals = 0.00;
            req.session.cart.formattedTotals = '';
        }
    }

    static setFormattedTotals() {
        let format = new Intl.NumberFormat(LOCALE_LANG, {style: 'currency', currency: LOCALE_CURRENCY });
        let totals = cart.totals;
        cart.formattedTotals = format.format(totals);
    }
}

module.exports = Cart;