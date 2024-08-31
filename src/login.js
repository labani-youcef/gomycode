// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;

        // Vérifier que les champs ne sont pas vides
        if (!email || !password || !age || !phone) {
            alert('Tous les champs doivent être remplis.');
            event.preventDefault(); // Empêcher l'envoi du formulaire
            return;
        }

        // Vérifier que l'email a un format valide
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            event.preventDefault(); // Empêcher l'envoi du formulaire
            return;
        }

        // Vérifier que l'âge est un nombre valide
        if (isNaN(age) || age <= 0) {
            alert('Veuillez entrer un âge valide.');
            event.preventDefault(); // Empêcher l'envoi du formulaire
            return;
        }

        // Vérifier que le numéro de téléphone a un format valide
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert('Veuillez entrer un numéro de téléphone valide (10 chiffres).');
            event.preventDefault(); // Empêcher l'envoi du formulaire
            return;
        }

        // Le formulaire est valide, tu peux ajouter une logique supplémentaire ici
        alert('Formulaire soumis avec succès!');
    });
});
