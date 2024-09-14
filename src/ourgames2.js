let cart = [];
let currency = 'DA'; 
const conversionRate = 200; 

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        addToCart(name, price);
        displayCart();
    });
});


function addToCart(name, price) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart[i].quantity++;
            return;
        }
    }

    cart.push({ name: name, price: price, quantity: 1 });
}


function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = `
        <tr>
            <th>Game</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
        </tr>
    `;

    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        let displayedPrice = currency === 'DA' ? item.price : convertToDollar(item.price);
        let displayedTotal = currency === 'DA' ? itemTotal : convertToDollar(itemTotal);

        cartItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${displayedPrice} ${currency}</td>
                <td>${displayedTotal} ${currency}</td>
            </tr>
        `;
    });

    document.getElementById('total-price').textContent = currency === 'DA' ? totalPrice : convertToDollar(totalPrice);
}


function convertToDollar(dinars) {
    return (dinars / conversionRate).toFixed(2); 
}

// Changer la devise
document.getElementById('currency-selector').addEventListener('change', (event) => {
    currency = event.target.value; 
    displayCart(); 
});

document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout is not implemented yet!');
});



