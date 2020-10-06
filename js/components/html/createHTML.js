import displayMessage from "../messages/displayMessage.js";
import { emptyFilter } from "../messages/message.js";
import { getExistingFavs } from "../storage/existingFavs.js";


export function createHTML(products) {
    const productContainer = document.querySelector(".product-container");

    productContainer.innerHTML = "";

    if (products.length === 0) {
        displayMessage("", emptyFilter, ".product-container");
    }

    const favourites = getExistingFavs();

    products.forEach(function (product) {
        let cssClass = "far";

        const doesObjectExist = favourites.find(function (fav) {
            return parseInt(fav.id) === product.id;
        });

        if (doesObjectExist) {
            cssClass = "fa";
        }

        productContainer.innerHTML += `
            <div class="product col">
                <img src="http://localhost:1337${product.image.formats.medium.url}" alt="${product.name}" class="product__img">
                <h4>${product.name}</h4>
                <p>${product.price} €</p>
                <p>${product.description} €</p>

                <div>
                    <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}"></i>
                </div>
                
                
            </div>
        `;
    });
}