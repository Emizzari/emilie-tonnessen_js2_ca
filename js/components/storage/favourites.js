import { getExistingFavs } from "./existingFavs.js";

const favourites = getExistingFavs();

const productContainer = document.querySelector(".product-container");

if (favourites.length === 0) {
    productContainer.innerHTML = "No favourites yet";
}

favourites.forEach((favourite) => {
    productContainer.innerHTML += `
        <div class="product col-sm-12 col-md-6 col-lg-3">
                <img src="http://localhost:1337${favourite.image.formats.medium.url}" alt="${favourite.name}" class="product__img">
                <h4>${favourite.name}</h4>
                <p>${favourite.price} €</p>
                <p>${favourite.description} €</p>
                <div class="heart-icon">
                    <i class="${cssClass} fa-heart" data-id="${favourite.id}" data-name="${favourite.name}"></i>
                </div>
            </div>
    `;
});