// Récupérer les éléments du DOM
const cartButton = document.querySelector('.cart-icons .fa-cart-plus');
const cartCount = document.querySelector('.cart-count');

// Initialiser le compteur du panier
let cartItemCount = 0;

// Ajouter un écouteur d'événement sur le bouton d'ajout au panier
cartButton.addEventListener('click', () => {
  // Incrémenter le compteur du panier
  cartItemCount++;

  // Mettre à jour l'affichage du compteur
  cartCount.textContent = cartItemCount;
});