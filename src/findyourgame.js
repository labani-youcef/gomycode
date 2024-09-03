function openModal(gameId) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    var gameElement = document.querySelector(".game[onclick=\"openModal('" + gameId + "')\"]");
    var imgSrc = gameElement.querySelector("img").src;
    var imgAlt = gameElement.querySelector("img").alt;

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = imgAlt;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
});
