const cartIcon = document.getElementById('cartIcon');
    const favoriteIcon = document.getElementById('favoriteIcon');

    // Fonctionnalité du panier
    cartIcon.addEventListener('click', () => {
      console.log('Le produit a été ajouté au panier.');
    });

    // Fonctionnalité des favoris
    let isFavorite = false;
    favoriteIcon.addEventListener('click', () => {
      isFavorite = !isFavorite;
      if (isFavorite) {
        favoriteIcon.classList.remove('fa-regular');
        favoriteIcon.classList.add('fa-solid', 'active');
        console.log('Le produit a été ajouté aux favoris.');
      } else {
        favoriteIcon.classList.remove('fa-solid', 'active');
        favoriteIcon.classList.add('fa-regular', 'inactive');
        console.log('Le produit a été retiré des favoris.');
      }
    });