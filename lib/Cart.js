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
                }
            };
            cart.items.push(prod)
            this.calculateTotals(cart)
        }
    }

    static removeFromCart(id, cart) {
        // 
    }

    static updateCart() {
        // 
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

    static calculateTotals() {
        // 
    }

    static emptyCart() {
        // 
    }

    static setFormattedTotals() {
        // 
    }
}

module.exports = Cart;