document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-add-cart');
    let total = 0.00;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const price = parseFloat(this.previousElementSibling.querySelector('.price').textContent);
            total += price;
            document.getElementById('total').textContent = total.toFixed(2);
           
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Alerte de bienvenue
    alert('Bienvenue dans notre site ! Ici, vous pouvez trouver nos jeux par catégorie de console.');

    const buttons = document.querySelectorAll('.btn-add-cart');
    let total = 0.00;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const price = parseFloat(this.previousElementSibling.querySelector('.price').textContent);
            total += price;
            document.getElementById('total').textContent = total.toFixed(2);
            alert('Article ajouté au panier ! Total actuel: ' + total.toFixed(2) + 'da');
        });
    });
});

