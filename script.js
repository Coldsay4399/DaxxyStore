let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total-price');
    cartItems.innerHTML = '';
    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.item} - Rp ${product.price}`;
        cartItems.appendChild(li);
    });
    total.textContent = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang belanja kosong!');
        return;
    }

    const waNumber = '6285947515940';
    let message = 'Halo, saya ingin memesan:\n\n';
    cart.forEach((product, index) => {
        message += `${index + 1}. ${product.item} - Rp ${product.price}\n`;
    });
    message += `\nTotal: Rp ${totalPrice}`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
}