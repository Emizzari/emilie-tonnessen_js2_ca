import displayMessage from "../messages/displayMessage.js";
import { emptyFilter } from "../messages/displayMessage.js";


export function createHTML(products) {
    const productContainer = document.querySelector(".product-container");

    productContainer.innerHTML = "";

    if (products.length === 0) {
        displayMessage("", emptyFilter, ".product-container");
    }

    products.forEach(function (product) {
        productContainer.innerHTML += `
            <div class="product col">
                <img src="http://localhost:1337${product.image.formats.medium.url}" alt="${product.name}" class="product__img">
                <h4>${product.name}</h4>
                <p>${product.price} €</p>
                <p>${product.description} €</p>

                <button class="btn">
                    Add to favourites
                    <i class="far fa-heart"></i>
                </button>
            </div>
        `;
    });
}