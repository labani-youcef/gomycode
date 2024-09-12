document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche l'envoi du formulaire pour démonstration

        // Ici, vous pouvez ajouter des actions à effectuer lorsque le formulaire est soumis
        alert('Votre commentaire a été envoyé !');
        
        // Réinitialiser le formulaire après soumission
        contactForm.reset();
    });
});
