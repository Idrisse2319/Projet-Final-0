// Sélectionner tous les boutons "add" et "remove"
const addButtons = document.querySelectorAll('.add');
const removeButtons = document.querySelectorAll('.remove');

// Sélectionner tous les éléments "span" avec la classe "span"
const quantitySpans = document.querySelectorAll('.products');

// Tableau pour stocker les quantités de chaque produit
let quantities = [0, 0, 0];

// Fonction pour mettre à jour l'affichage des quantités
function updateQuantityDisplay() {
  quantitySpans.forEach((span, index) => {
    span.textContent = quantities[index];
  });

  // Calculer le prix total
  const totalPrice = quantities[] *  + quantities[] * + quantities[] * ;
  document.querySelector('.produitcart').textContent = `Total price : ${totalPrice} CFA`;
}

// Ajouter les écouteurs d'événements sur les boutons "add" et "remove"
addButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    quantities[index]++;
    updateQuantityDisplay();
  });
});

removeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (quantities[index] > 0) {
      quantities[index]--;
      updateQuantityDisplay();
    }
  });
});

// Ajouter les écouteurs d'événements sur les icônes "trash"
const trashIcons = document.querySelectorAll('.trash-outline');
trashIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    quantities[index] = 0;
    updateQuantityDisplay();
  });
});

// Sélectionner tous les éléments avec la classe "heart"
const heartIcons = document.querySelectorAll('.heart');

// Parcourir les éléments "heart" et ajouter un écouteur d'événement "click"
heartIcons.forEach(heartIcon => {
  heartIcon.addEventListener('click', function() {
    // Basculer la classe "active" sur l'icône pour afficher/masquer le cœur rouge
    this.classList.toggle('active');

    // Récupérer l'ID du produit associé à l'icône "heart"
    const productId = this.dataset.productId;

    // Vérifier si l'utilisateur a cliqué pour aimer ou ne plus aimer le produit
    if (this.classList.contains('active')) 
      {
      // Ajouter le produit aux favoris de l'utilisateur
      addToFavorites(productId);
    } else {
      // Supprimer le produit des favoris de l'utilisateur
      removeFromFavorites(productId);
    }
  });
});

// Fonction pour ajouter un produit aux favoris
function addToFavorites(productId) {
  // Logique pour ajouter le produit aux favoris de l'utilisateur
  console.log(`addItems ${productId} heart`);
}

// Fonction pour supprimer un produit des favoris
function removeFromFavorites(productId) {
  // Logique pour supprimer le produit des favoris de l'utilisateur
  console.log(`deleteItems ${productId} heart`);
}