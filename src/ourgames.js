let cart = [];
let currency = 'DA'; // Par défaut en Dinar Algérien
const conversionRate = 200; // 1 Dollar = 200 DA

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        addToCart(name, price);
        displayCart();
    });
});

// Fonction pour ajouter des articles au panier
function addToCart(name, price) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart[i].quantity++;
            return;
        }
    }

    cart.push({ name: name, price: price, quantity: 1 });
}

// Fonction pour afficher le panier
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

// Fonction de conversion en dollars
function convertToDollar(dinars) {
    return (dinars / conversionRate).toFixed(2); // Convertir et limiter à 2 décimales
}

// Changer la devise
document.getElementById('currency-selector').addEventListener('change', (event) => {
    currency = event.target.value; // Mettre à jour la devise sélectionnée
    displayCart(); // Mettre à jour l'affichage du panier
});






document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout is not implemented yet!');
});
document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour défiler vers le haut
    document.getElementById('scrollToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Fonction pour défiler vers le bas
    document.getElementById('scrollToBottom').addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});

